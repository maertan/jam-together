import { supabase } from "../client";

export async function addSong(props, owner, handleSongLoading, collab_id) {
  // Song data to be inserted, with default values for some columns
  // The id and created_at columns will be automatically generated
  console.log("Met at add song",props) 
  const song = {
    artist: props.artists[0].name, 
    title: props.name,
    duration_ms: props.duration_ms,
    spotify_url: props.external_urls.spotify,
    collab_id: collab_id, 
    song_id: props.id,
    image_url: props.album.images[0].url,
    upvotes: 0, 
    downvotes: 0, 
    votes: {},
    score: 0,
    owner: owner,
  }
  
  // Check if a song with the same artist, title, and collab_id already exists
  const { data, selectError } = await supabase
    .from('songs')
    .select()
    .eq('artist', song.artist)
    .eq('title', song.title)
    .eq('collab_id', song.collab_id);
  
  
  if (selectError) {
    console.error("Error checking for duplicates: ", selectError);
    return null;
  }
  
  // If duplicate exists, do not insert song
  if (data && data.length > 0) {
    console.log("Duplicate song found. Song not added.", data);
    return null;
  }

  // Else, insert the new song into the songs table
  const { data: insertData, error: insertError } = await supabase
    .from('songs')
    .insert(song)

  if (insertError) {
    // Additional check that no foreign key constraint or uniqueness violation is made 
    // if (insertError.code === '23505' || insertError.code === '23503') {
    //   console.log("Foreign key or uniqueness constraint violated during insert. Song not added.", insertError);
    // } else {
      console.log("Error adding song: ", insertError);
    
    return null;
  } else {
    console.log("Song added successfully: ", song.title);
    
    return song;
  }
}