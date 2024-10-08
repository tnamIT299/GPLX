import React from "react";
import { supabase } from "../../../data/supabaseClient";
import BoCauHoiTab from "../BoCauHoiTab";

const fetchCauLiet = async () => {
    const { data, error } = await supabase
    .from("question")
    .select("content, option, image, tip)")
    .eq("typeQuestion", 6);

  if (error) {
    console.error("Error fetching data:", error);
    return [];
  }

  return data;
};

const CauLietTab = ({ navigation }) => {
  return <BoCauHoiTab fetchData={fetchCauLiet}  navigation={navigation} />;
};

export default CauLietTab;
