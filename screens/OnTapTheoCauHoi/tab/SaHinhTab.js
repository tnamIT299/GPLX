import React from "react";
import { supabase } from "../../../data/supabaseClient";
import BoCauHoiTab from "../BoCauHoiTab";

const fetchSaHinh = async () => {
    const { data, error } = await supabase
    .from("question")
    .select("content, option, image, tip")
    .eq("typeQuestion", 5);

  if (error) {
    console.error("Error fetching data:", error);
    return [];
  }

  return data;
};

const SaHinhTab = ({ navigation }) => {
  return <BoCauHoiTab fetchData={fetchSaHinh}  navigation={navigation} />;
};

export default SaHinhTab;
