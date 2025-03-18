import React, { useState, useEffect } from "react";
import axios from "axios";

export async function searchForSongs(searchString) {
        // Function to fetch access token
        const fetchAccessToken = async () => {
          try {
            const tokenResponse = await axios.post(
              "https://accounts.spotify.com/api/token",
              "grant_type=client_credentials",
              {
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                  Authorization: `Basic ${btoa(
                    `${import.meta.env.VITE_SPOTIFY_CLIENT_ID}:${import.meta.env.VITE_SPOTIFY_CLIENT_SECRET}`
                  )}`,
                },
              }
            );
            return tokenResponse.data.access_token;
          } catch (err) {
            console.error("Error fetching access token:", err.response?.data || err.message);
            return null;
          }
        };
    
        // Function to fetch song data
        const fetchSongs = async () => {
          const token = await fetchAccessToken();
          if (!token) return;
    
          try {
            const response = await axios.get(
              `https://api.spotify.com/v1/search?q=${searchString}&type=track&limit=8`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
    
            return response.data.tracks.items;
          } catch (err) {
            console.error("Error fetching song data:", err.response?.data || err.message);
            return null;
        }
        };
    
        return fetchSongs();
    
}
