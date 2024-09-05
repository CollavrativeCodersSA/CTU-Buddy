document.addEventListener("DOMContentLoaded", () => {
  const uploadForm = document.getElementById("upload-form");
  const videoOption = document.getElementById("video-option");
  const pdfOption = document.getElementById("pdf-option");
  const videoLinkContainer = document.getElementById("video-link-container");
  const fileUploadContainer = document.getElementById("file-upload-container");
  const videoLinkInput = document.getElementById("video-link");
  const resourceDescription = document.getElementById("resource-description");
  const resourceSection = document.getElementById("resources-list"); // Changed to match second snippet

  // Load saved resources from localStorage
  const savedResources = JSON.parse(localStorage.getItem("resources")) || [];
  savedResources.forEach((resource, index) => {
    const resourceCard = createResourceCard(resource, index);
    resourceSection.appendChild(resourceCard);
  });

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
    let resourceLink = "";
    let thumbnailUrl = "";

    if (type === "video") {
      const videoUrl = videoLinkInput.value;
      const videoId = extractYouTubeID(videoUrl);
      if (!videoId) {
        alert("Invalid YouTube URL");
        return;
      }
      resourceLink = videoUrl;
      thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    } else if (type === "pdf") {
      const fileInput = document.getElementById("file-upload");
      if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        resourceLink = URL.createObjectURL(file); // Generate URL for the file
        thumbnailUrl = "assets/images/pdf-thumbnail.jpg"; // Placeholder thumbnail for PDF
      }
    }

    const newResource = { resourceType: type, description, resourceLink };
    saveResource(newResource);

    // Update UI
    const resourceCard = createResourceCard(
      newResource,
      getSavedResources().length - 1
    );
    resourceSection.appendChild(resourceCard);

    // Reset form
    uploadForm.reset();
    videoLinkContainer.style.display = "none";
    fileUploadContainer.style.display = "none";
  });

  // Function to create a resource card
  function createResourceCard(resource, index) {
    const card = document.createElement("div");
    card.className = "resource-card";

    const imageDiv = document.createElement("div");
    imageDiv.className = "resource-image";
    const thumbnailUrl =
      resource.resourceType === "video"
        ? `https://img.youtube.com/vi/${extractYouTubeID(
            resource.resourceLink
          )}/maxresdefault.jpg`
        : "assets/images/pdf-thumbnail.jpg";
    imageDiv.style.backgroundImage = `url(${thumbnailUrl})`;
    card.appendChild(imageDiv);

    const text = document.createElement("p");
    text.textContent = resource.description;
    card.appendChild(text);

    const button = document.createElement("button");
    if (resource.resourceType === "video") {
      button.className = "button-color-red"; // Red for video
      button.textContent = "Watch Video";
    } else {
      button.className = "button-color-blue"; // Blue for PDF
      button.textContent = "Download Article";
    }

    button.onclick = () => {
      window.open(resource.resourceLink, "_blank");
    };
    card.appendChild(button);

    const deleteButton = document.createElement("button");
    deleteButton.className = "button-color-red";
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => {
      deleteResource(index);
    };
    card.appendChild(deleteButton);

    return card;
  }

  // Save resource to localStorage
  function saveResource(resource) {
    const savedResources = getSavedResources();
    savedResources.push(resource);
    localStorage.setItem("resources", JSON.stringify(savedResources));
  }

  // Delete resource
  function deleteResource(index) {
    const savedResources = getSavedResources();
    savedResources.splice(index, 1); // Remove the resource at the given index
    localStorage.setItem("resources", JSON.stringify(savedResources));
    updateResourceList();
  }

  // Update UI resource list
  function updateResourceList() {
    resourceSection.innerHTML = ""; // Clear the existing list
    const savedResources = getSavedResources();
    savedResources.forEach((resource, index) => {
      const resourceCard = createResourceCard(resource, index);
      resourceSection.appendChild(resourceCard);
    });
  }

  // Get resources from localStorage
  function getSavedResources() {
    return JSON.parse(localStorage.getItem("resources")) || [];
  }

  // Extract YouTube ID function
  function extractYouTubeID(url) {
    const regex =
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=|.+\?v=|.+\/videos\/|.+\/videos\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  }
});
