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
      const response = await fetch('http://154.53.59.178:30002/api/blogs?sort=id&populate=*', {
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
      const response = await fetch(`http://154.53.59.178:30002/api/blogs?filters[slug][$eq]=${slug}&populate=author, author.avatar, featuredImage`, {
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