import { GithubAPI } from './api.js';

// 1. Initialize the API Service
const api = new GithubAPI();

// 2. Select Elements
const searchBtn = document.getElementById("search-btn");
const usernameInput = document.getElementById("username");
const card = document.getElementById("profile-card");

// Elements inside the card
const avatar = document.getElementById("avatar");
const name = document.getElementById("name");
const bio = document.getElementById("bio");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const repos = document.getElementById("repos");

// 3. Add Event Listener
searchBtn.addEventListener("click", async () => {
    const username = usernameInput.value;

    if (username === "") {
        alert("Please enter a username!");
        return;
    }

    // A. Show "Loading..." state (Optional but professional)
    searchBtn.textContent = "Searching...";
    searchBtn.disabled = true;

    // B. Fetch Data (WAIT here)
    const user = await api.getUser(username);

    // C. Reset Button
    searchBtn.textContent = "Search";
    searchBtn.disabled = false;

    // D. Update UI
    if (user) {
        // Success: Fill data and show card
        card.style.display = "block";
        
        avatar.src = user.avatar_url;
        name.textContent = user.name || user.login; // Fallback to login if name is null
        bio.textContent = user.bio || "No bio available";
        followers.textContent = user.followers;
        following.textContent = user.following;
        repos.textContent = user.public_repos;
    } else {
        // Failure: Hide card and alert
        card.style.display = "none";
        alert("User not found!");
    }
});