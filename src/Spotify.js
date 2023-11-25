let accessToken = "";
const clientID = "";
const redirectUrl = "http://localhost:3000";

const Spotify = {
  accessToken: "",
  getAccessToken() {
    if (this.accessToken) {
      return this.accessToken;
    }
    // token url
    const tokenUrl = window.location.href.match(/access_token=([^&]*)/);
    const expiryTime = window.location.href.match(/expires_in=([^&]*)/);

    //  second check for the access token
    if (tokenUrl && expiryTime) {
      this.accessToken = tokenUrl[1];
      const expiresIn = Number(expiryTime[1]);
      window.setTimeout(() => (this.accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access token", null, "/");
      return this.accessToken;
    }
    const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUrl}`;
    window.location = redirect;
  },
  search(term) {
    return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${this.accessToken}` },
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (!jsonResponse) {
          console.error("Response Error");
        }
        return jsonResponse.tracks.items.map((t) => ({
          id: t.id,
          name: t.name,
          artist: t.artist[0].name,
          album: t.album.name,
          uri: t.uri,
        }));
      });
  },
  savePlaylist() {},
};
