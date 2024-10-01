// List of multiple beach scene images
const imageUrls = [
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1531162944115-541f7e3d4703?auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=600&q=60",
    "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=600&q=60"
];

let currentImageIndex = 0;

// Change the image on button click
document.getElementById("changeImageButton").onclick = function() {
    currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
    document.getElementById("exampleImage").src = imageUrls[currentImageIndex];
};

// Other DOM manipulation and jQuery code...
