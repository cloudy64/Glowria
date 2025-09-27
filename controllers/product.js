const express = require("express");
const router = express.Router();

const product = require("../models/product");

router.get("/", async (req, res) => {
 res.render("products/index.ejs")
});

router.get("/new", async (req, res) => {
  res.render("products/new.ejs");
});

router.post("/", async (req, res) => {
  req.body.owner = req.session.user._id;
  await Listing.create(req.body);
  console.log(req.body);
  res.redirect("/listings");
});

router.get("/:listingId", async (req, res) => {
  try {
    const populatedListings = await Listing.findById(
      req.params.listingId
    ).populate("owner");

    const userHasFavourited = populatedListings.favouritedByUsers.some((user) =>
      user.equals(req.session.user._id)
    );
    res.render("listings/show.ejs", {
      listing: populatedListings,
      userHasFavourited: userHasFavourited,
    });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

router.delete("/:listingId", async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.listingId);
    if (listing.owner.equals(req.session.user._id)) {
      console.log("Permission granted");
      await listing.deleteOne();
      res.redirect("/listings");
    } else {
      console.log("Permission denied");
    }
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

router.get("/:listingId/edit", async (req, res) => {
  try {
    const currentListing = await Listing.findById(req.params.listingId);
    res.render("listings/edit.ejs", { listing: currentListing });
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

router.put("/:listingId", async (req, res) => {
  try {
    const currentListing = await Listing.findById(req.params.listingId);
    if (currentListing.owner.equals(req.session.user._id)) {
      console.log("Permission granted");
      await currentListing.updateOne(req.body);
      res.redirect(`/listings/${req.params.listingId}`);
    } else {
      console.log("Permission denied");
    }
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

router.post("/:listingId/favourite-by/:userId", async (req, res) => {
  try {
    await Listing.findByIdAndUpdate(req.params.listingId, {
      $push: { favouritedByUsers: req.params.userId },
    });
    res.redirect(`/listings/${req.params.listingId}`);
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

router.delete("/:listingId/favourite-by/:userId", async (req, res) => {
  try {
    await Listing.findByIdAndUpdate(req.params.listingId, {
      $pull: { favouritedByUsers: req.params.userId },
    });
    res.redirect(`/listings/${req.params.listingId}`);
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
});

module.exports = router;