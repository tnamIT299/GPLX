import React from "react";
import { supabase } from "../../../data/supabaseClient";
import BoCauHoiTab from "../BoCauHoiTab";

const fetchVanHoaDaoDuc = async () => {
    const { data, error } = await supabase
    .from("question")
    .select("content, option, image, tip")
    .eq("typeQuestion", 2);

  if (error) {
    console.error("Error fetching data:", error);
    return [];
  }

  return data;
};

const VanHoaDaoDucTab = ({ navigation }) => {
  return <BoCauHoiTab fetchData={fetchVanHoaDaoDuc}  navigation={navigation} />;
};

export default VanHoaDaoDucTab;
