const accessToken = '4b488384c7bd5d1a30ff2d0190bb639e31a042f2dbcbeb330879e179c1b627b473045f52edcb242cc512842457c8205396a8e892cf65659b6d5ace7066b73b5cf2237a0c59961dc0b1f379c359441086e2f7c7a1f15359625deae7902e24b4fcf7bab46d30c9017f21b7526e52d2cef366298e11688caf176e5868edaf1260b9';
const URL = 'http://154.53.59.178:30002'

  export const getTweets = async () => {
    const accessToken = '4b488384c7bd5d1a30ff2d0190bb639e31a042f2dbcbeb330879e179c1b627b473045f52edcb242cc512842457c8205396a8e892cf65659b6d5ace7066b73b5cf2237a0c59961dc0b1f379c359441086e2f7c7a1f15359625deae7902e24b4fcf7bab46d30c9017f21b7526e52d2cef366298e11688caf176e5868edaf1260b9';
    try {
      const response = await fetch('http://154.53.59.178:30002/api/tweets?populate=*', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch tweets: ' + response.statusText);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching tweets:', error);
      return [];
    }
  };

  export const getProducts = async () => {
    const accessToken = '4b488384c7bd5d1a30ff2d0190bb639e31a042f2dbcbeb330879e179c1b627b473045f52edcb242cc512842457c8205396a8e892cf65659b6d5ace7066b73b5cf2237a0c59961dc0b1f379c359441086e2f7c7a1f15359625deae7902e24b4fcf7bab46d30c9017f21b7526e52d2cef366298e11688caf176e5868edaf1260b9';
    try {
      const response = await fetch('http://154.53.59.178:30002/api/hero-products?populate=*', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch tweets: ' + response.statusText);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching tweets:', error);
      return [];
    }
  }

  export const getFAQS = async () => {
    try {
      const response = await fetch('http://154.53.59.178:30002/api/learn-faqs?sort=id&populate=tab.image,headerImage,points', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch tweets: ' + response.statusText);
      }
      const data = await response.json()
      return data;
    }
    catch(error) {
      console.error(error);
      return [];
    }
  }

  export const getOtherFAQS = async () => {
    try {
      const response = await fetch('http://154.53.59.178:30002/api/learn-other-faqs?sort=id&populate=*', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch tweets: ' + response.statusText);
      }
      const data = await response.json()
      return data;
    }
    catch(error) {
      console.error(error);
      return [];
    }
  }

  // Mission Section

  export const getMissions = async () => {
    try {
      const response = await fetch('http://154.53.59.178:30002/api/about-missions?sort=id&populate=*', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch Missions: ' + response.statusText);
      }
      const data = await response.json()
      return data;
    }
    catch(error) {
      console.error(error);
      return [];
    }
  }

  export const getValues = async () => {
    try {
      const response = await fetch('http://154.53.59.178:30002/api/about-values?sort=id&populate=*', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch Missions: ' + response.statusText);
      }
      const data = await response.json()
      return data;
    }
    catch(error) {
      console.error(error);
      return [];
    }
  }

  export const getTeams = async () => {
    try {
      const response = await fetch('http://154.53.59.178:30002/api/about-teams?sort=id&populate=*', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch Teams: ' + response.statusText);
      }
      const data = await response.json()
      return data;
    }
    catch(error) {
      console.error(error);
      return [];
    }
  }

  export const getBlogs = async () => {
    try {
      const response = await fetch('http://154.53.59.178:30002/api/blogs?sort=updatedAt:desc&populate=*', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch Teams: ' + response.statusText);
      }
      const data = await response.json()
      return data;
    }
    catch(error) {
      console.error(error);
      return [];
    }
  }

  export const getBlogBySlug = async (slug) => {
    try {
      const response = await fetch(`http://154.53.59.178:30002/api/blogs?filters[slug][$eq]=${slug}&populate=author, author.avatar, featuredImage, Reactions, Reactions.comments`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch Teams: ' + response.statusText);
      }
      const data = await response.json()
      return data;
    }
    catch(error) {
      console.error(error);
      return [];
    }
  }

  export const getBlogsByAuthor = async (author) => {
    try {
      const response = await fetch(`http://154.53.59.178:30002/api/blogs?filters[author][name][$eqi]=${author}&populate=author,author.avatar,featuredImage`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch Authors Blogs: ' + response.statusText);
      }
      const data = await response.json()
      return data;
    }
    catch(error) {
      console.error(error);
      return [];
    }
  }

  export const getTos = async (page) => {
    try {
      const response = await fetch(`http://154.53.59.178:30002/api/${page}?sort=id&populate=*`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch TOS: ' + response.statusText);
      }
      const data = await response.json()
      return data;
    }
    catch(error) {
      console.error(error);
      return [];
    }
  }

  export const getShockers = async () => {
    try {
      const response = await fetch(`http://154.53.59.178:30002/api/about-shockers?sort=id&populate=*`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch Shockers: ' + response.statusText);
      }
      const data = await response.json()
      return data;
    }
    catch(error) {
      console.error(error);
      return [];
    }
  }

 export const updateClaps = async (id, claps) => {
    const updatedArticleData = {
      data: {
        Reactions: {
          claps: claps
        }
      }
    };
  
    // Send the update request
    await fetch(`http://154.53.59.178:30002/api/blogs/${id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedArticleData)
    })
    .then(response => response.json())
    .then(updatedData => {
      console.log('Article updated successfully:', updatedData);
    })
    .catch(error => {
      console.error('Error updating article:', error);
    });
  };
  export const createComments = async (id, name, comment, existingComments) => {
    try {
        // Get the current timestamp
        const commentedAt = new Date().toISOString();

        // Create a new comment object with the name, comment, and timestamp
        const newComment = {
            name: name,
            comment: comment,
            commented_at: commentedAt
        };

        // Create a new comments array by appending the new comment
        const updatedComments = [
            ...(existingComments || []),
            newComment
        ];

        // Create updated article data with the new comments
        const updatedArticleData = {
            data: {
                Reactions: {
                    comments: updatedComments
                }
            }
        };

        // Send the update request
        const updateResponse = await fetch(`http://154.53.59.178:30002/api/blogs/${id}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedArticleData)
        });

        if (!updateResponse.ok) {
            throw new Error('Failed to update article data');
        }

        const updatedData = await updateResponse.json();
        console.log('Article updated successfully:', updatedData);

        // Return the updated comments array or any other relevant data
        return updatedComments;
    } catch (error) {
        console.error('Error updating article:', error);
        // Return the existing comments array in case of an error
        return existingComments;
    }
};
