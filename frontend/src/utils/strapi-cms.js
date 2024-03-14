
  export const getTweets = async () => {
    const accessToken = '396250188711bd0302df8d0ad7e6c60e064462aaf3e547d927d8b42a03c5ca6965ee0f32bd4cbba3358c2111bd914c43f09d4ba1d08ad1cc3c298c3e658d181492e51fd8ff6d381f57d2ca34523ae04e9e536d50a747295864ba6c06cf288fcf5033fd24c29dd623268f25dd68437c203d414acd2c98252106c8ef193510e6da'; // Replace with your actual access token
    try {
      const response = await fetch('http://localhost:1337/api/tweets?populate=*', {
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
    const accessToken = '396250188711bd0302df8d0ad7e6c60e064462aaf3e547d927d8b42a03c5ca6965ee0f32bd4cbba3358c2111bd914c43f09d4ba1d08ad1cc3c298c3e658d181492e51fd8ff6d381f57d2ca34523ae04e9e536d50a747295864ba6c06cf288fcf5033fd24c29dd623268f25dd68437c203d414acd2c98252106c8ef193510e6da'; // Replace with your actual access token
    try {
      const response = await fetch('http://localhost:1337/api/heroproducts?populate=*', {
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