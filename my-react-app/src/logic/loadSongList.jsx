import { supabase } from "../client";

export async function loadSongList(collab_id) {
    const {data, error} = await supabase
    .from("songs")
    .select()
    .eq('collab_id', collab_id)
    .order('score', { ascending: false });;

    console.log(data)
    console.log("hi")

    if (error) {
        console.error("Error loading songs:");
        return null;
    }

    return data;
}
