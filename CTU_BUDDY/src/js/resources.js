document.addEventListener("DOMContentLoaded", () => {
  const uploadForm = document.getElementById("upload-form");
  const videoOption = document.getElementById("video-option");
  const pdfOption = document.getElementById("pdf-option");
  const videoLinkContainer = document.getElementById("video-link-container");
  const fileUploadContainer = document.getElementById("file-upload-container");
  const videoLinkInput = document.getElementById("video-link");
  const resourceDescription = document.getElementById("resource-description");
  const resourceSection = document.querySelector(".resources");

  // Toggle input fields based on resource type
  document.querySelectorAll('input[name="resource-type"]').forEach((radio) => {
    radio.addEventListener("change", () => {
      if (videoOption.checked) {
        videoLinkContainer.style.display = "block";
        fileUploadContainer.style.display = "none";
      } else if (pdfOption.checked) {
        videoLinkContainer.style.display = "none";
        fileUploadContainer.style.display = "block";
      }
    });
  });

  // Handle form submission
  uploadForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const type = document.querySelector(
      'input[name="resource-type"]:checked'
    ).value;
    const description = resourceDescription.value;

    if (type === "video") {
      const videoUrl = videoLinkInput.value;
      const videoId = extractYouTubeID(videoUrl);
      if (!videoId) {
        alert("Invalid YouTube URL");
        return;
      }

      const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

      createResourceCard(thumbnailUrl, description, videoUrl);
    } else if (type === "pdf") {
      const fileInput = document.getElementById("file-upload");
      if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const fileUrl = URL.createObjectURL(file);
        const thumbnailUrl = "assets/images/pdf-thumbnail.jpg"; // Placeholder thumbnail for PDF

        createResourceCard(thumbnailUrl, description, fileUrl);
      }
    }

    // Reset form
    uploadForm.reset();
    videoLinkContainer.style.display = "none";
    fileUploadContainer.style.display = "none";
  });

  // Function to create a resource card
  function createResourceCard(imageUrl, description, link = null) {
    const card = document.createElement("div");
    card.className = "resource-card";

    const imageDiv = document.createElement("div");
    imageDiv.className = "resource-image";
    imageDiv.style.backgroundImage = `url(${imageUrl})`;
    card.appendChild(imageDiv);

    const text = document.createElement("p");
    text.textContent = description;
    card.appendChild(text);

    const button = document.createElement("button");
    button.className = link ? "button-color-blue" : "button-color-red";
    button.textContent = link ? "Watch Video" : "Download File";
    button.onclick = () => {
      if (link) {
        window.open(link, "_blank");
      } else {
        window.open(fileUrl, "_blank");
      }
    };
    card.appendChild(button);

    resourceSection.appendChild(card);
  }

  // Extract YouTube ID function
  function extractYouTubeID(url) {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=|.+\?v=|.+\/videos\/|.+\/videos\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }
});
