import React from "react";
import { supabase } from "../../../data/supabaseClient";
import BoCauHoiTab from "../BoCauHoiTab";

const fetchBienBaoDuongBo = async () => {
    const { data, error } = await supabase
    .from("question")
    .select("content, option, image, tip)")
    .eq("typeQuestion", 4);

  if (error) {
    console.error("Error fetching data:", error);
    return [];
  }

  return data;
};

const BienBaoDuongBoTab = ({ navigation }) => {
  return <BoCauHoiTab fetchData={fetchBienBaoDuongBo}  navigation={navigation} />;
};

export default BienBaoDuongBoTab;
