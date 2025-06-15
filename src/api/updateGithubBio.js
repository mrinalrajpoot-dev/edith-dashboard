export async function updateGithubBio(newBio) {
  const response = await fetch("https://api.github.com/user", {
    method: "PATCH",
    headers: {
      Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      bio: newBio
    })
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to update GitHub bio");
  }

  const data = await response.json();
  return data;
}
