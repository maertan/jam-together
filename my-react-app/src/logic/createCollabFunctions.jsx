import { supabase } from "../client";
import cryptoRandomString from 'crypto-random-string';


export async function createCollab(name) {
    var code = await generateNewCode()
    const {error} = await supabase
        .from('collabs')
        .insert({'collab_id':code,'collab_name': name})
    if (error) {
        console.log("Error creating session: " + error.message)
    }
    return code;
}

export async function generateNewCode() {
    while (true){
        var code = cryptoRandomString({length:7, type:'alphanumeric'});
        const { data, error } = await supabase
            .from('collabs')
            .select()
            .eq("collab_id", code);
        if (error) {
            console.log("Error generating code: " + error.message)
        }
        if (data.length === 0) {
            return code;
        }
    }   
}
