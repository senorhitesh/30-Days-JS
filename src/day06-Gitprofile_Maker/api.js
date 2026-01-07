export class GithubAPI {
    // 1. Async keyword tells JS this function takes time
    async getUser(username) {
        try {
            // 2. Await the network request
            const response = await fetch(`https://api.github.com/users/${username}`);

            // 3. Handle Errors (like 404 Not Found)
            if (!response.ok) {
                throw new Error(`User not found (Status: ${response.status})`);
            }

            // 4. Await the JSON parsing
            const data = await response.json();
            return data;

        } catch (error) {
            console.error(error);
            return null; // Return null so the Controller knows it failed
        }
    }
}