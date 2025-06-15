// src/api/updateGithubBio.js
export const updateGithubBio = async (bio) => {
  const response = await fetch('https://api.github.com/user', {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ bio }),
  });

  if (!response.ok) {
    throw new Error(`Failed to update GitHub bio. Status: ${response.status}`);
  }

  return await response.json();
};
