import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import {
  Dialog,
  Portal,
  Button,
  Paragraph,
  Provider as PaperProvider,
} from "react-native-paper";

const rawData = [
  {
    type: "W.201a",
    name: "Chỗ ngoặt nguy hiểm vòng bên trái",
    content: "Cảnh báo sắp đến một khúc ngoặt nguy hiểm phía bên trái.",
    image: require("../../assets/Bienbaonguyhiem/w201a.jpg"),
  },
  {
    type: "W.201b",
    name: "Chỗ ngoặt nguy hiểm vòng bên phải",
    content: "Cảnh báo sắp đến một khúc ngoặt nguy hiểm phía bên phải.",
    image: require("../../assets/Bienbaonguyhiem/w201b.jpg"),
  },
  {
    type: "W.202a",
    name: "Nhiều chỗ ngoặt nguy hiểm liên tiếp",
    content:
      "Cảnh báo trước sắp đến nhiều chỗ ngoặt nguy hiểm liên tiếp trong đó chỗ ngoặt đầu tiên hướng vòng bên trái.",
    image: require("../../assets/Bienbaonguyhiem/w202a.jpg"),
  },
  {
    type: "W.202b",
    name: "Nhiều chỗ ngoặt nguy hiểm liên tiếp",
    content:
      "Cảnh báo trước sắp đến nhiều chỗ ngoặt nguy hiểm liên tiếp trong đó chỗ ngoặt đầu tiên hướng vòng bên phải.",
    image: require("../../assets/Bienbaonguyhiem/w202b.jpg"),
  },
  {
    type: "W.203a",
    name: "Đường bị hẹp cả hai bên",
    content:
      "Một trong các biển báo nguy hiểm dùng báo trước sắp đến một đoạn đường bị hẹp đột ngột, biển báo này là hẹp cả hai bên.",
    image: require("../../assets/Bienbaonguyhiem/w203a.jpg"),
  },
  {
    type: "W.203b",
    name: "Đường bị hẹp về phía trái",
    content:
      "Cảnh báo trước sắp đến một đoạn đường bị hẹp đột ngột phía bên trái.",
    image: require("../../assets/Bienbaonguyhiem/w203b.jpg"),
  },
  {
    type: "W.203c",
    name: "Đường bị hẹp về phía phải",
    content:
      "Cảnh báo trước sắp đến một đoạn đường bị hẹp đột ngột phía bên phải.",
    image: require("../../assets/Bienbaonguyhiem/w203c.jpg"),
  },
  {
    type: "W.204",
    name: "Đường hai chiều",
    content:
      "Cảnh báo trước sắp đến đoạn đường do sửa chữa hoặc có trở ngại ở một phía đường mà phải tổ chức đi lại cho phương tiện cả hai chiều trên phía đường còn lại hoặc để báo trước đoạn đường đôi tạm thời hoặc đoạn đường có chiều xe đi và về đi chung.",
    image: require("../../assets/Bienbaonguyhiem/w204.jpg"),
  },
  {
    type: "W.205a",
    name: "Đường giao nhau cùng cấp",
    content:
      "Một trong các biển báo nguy hiểm dùng để báo trước sắp đến nơi giao nhau cùng mức của các tuyến đường cùng cấp (không có đường nào ưu tiên) trên cùng một mặt bằng.",
    image: require("../../assets/Bienbaonguyhiem/w205a.jpg"),
  },
  {
    type: "W.205b",
    name: "Đường giao nhau cùng cấp",
    content:
      "Cảnh báo trước sắp đến nơi giao nhau cùng mức của các tuyến đường cùng cấp (không có đường nào ưu tiên) trên cùng một mặt bằng về phía bên phải.",
    image: require("../../assets/Bienbaonguyhiem/w205b.jpg"),
  },
  {
    type: "W.205c",
    name: "Đường giao nhau cùng cấp",
    content:
      "Cảnh báo trước sắp đến nơi giao nhau cùng mức của các tuyến đường cùng cấp (không có đường nào ưu tiên) trên cùng một mặt bằng về phía bên trái.",
    image: require("../../assets/Bienbaonguyhiem/w205c.jpg"),
  },
  {
    type: "W.205d",
    name: "Đường giao nhau cùng cấp",
    content:
      "Một trong các biển báo nguy hiểm dùng để báo trước sắp đến nơi giao nhau cùng mức của các tuyến đường cùng cấp (không có đường nào ưu tiên) trên cùng một mặt bằng.",
    image: require("../../assets/Bienbaonguyhiem/w205d.jpg"),
  },
  {
    type: "W.205e",
    name: "Đường giao nhau cùng cấp",
    content:
      "Cảnh báo trước sắp đến nơi giao nhau cùng mức của các tuyến đường cùng cấp (không có đường nào ưu tiên) trên cùng một mặt bằng.",
    image: require("../../assets/Bienbaonguyhiem/w205e.jpg"),
  },
  {
    type: "W.206",
    name: "Giao nhau chạy theo vòng xuyến",
    content:
      "Cảnh báo trước nơi giao nhau có bố trí đảo an toàn ở giữa nút giao, các loại xe qua nút giao phải đi vòng xuyến quanh đảo an toàn theo chiều mũi tên.",
    image: require("../../assets/Bienbaonguyhiem/w206.jpg"),
  },
  {
    type: "W.207a",
    name: "Giao nhau với đường không ưu tiên",
    content:
      "Thuộc nhóm các biển báo nguy hiểm dùng lưu ý trước sắp đến nơi giao nhau với đường không ưu tiên.",
    image: require("../../assets/Bienbaonguyhiem/w207a.jpg"),
  },
  {
    type: "W.207b",
    name: "Giao nhau với đường không ưu tiên",
    content: "Cảnh báo trước sắp đến nơi giao nhau với đường không ưu tiên.",
    image: require("../../assets/Bienbaonguyhiem/w207b.jpg"),
  },
  {
    type: "W.207c",
    name: "Giao nhau với đường không ưu tiên",
    content: "Cảnh báo trước sắp đến nơi giao nhau với đường không ưu tiên.",
    image: require("../../assets/Bienbaonguyhiem/w207c.jpg"),
  },
  {
    type: "W.207d",
    name: "Giao nhau với đường không ưu tiên",
    content: "Cảnh báo trước sắp đến nơi giao nhau với đường không ưu tiên.",
    image: require("../../assets/Bienbaonguyhiem/w207d.jpg"),
  },
  {
    type: "W.207e",
    name: "Giao nhau với đường không ưu tiên",
    content: "Cảnh báo trước sắp đến nơi giao nhau với đường không ưu tiên.",
    image: require("../../assets/Bienbaonguyhiem/w207e.jpg"),
  },
  {
    type: "W.207f",
    name: "Giao nhau với đường không ưu tiên",
    content: "Cảnh báo trước sắp đến nơi giao nhau với đường không ưu tiên.",
    image: require("../../assets/Bienbaonguyhiem/w207f.jpg"),
  },
  {
    type: "W.207g",
    name: "Giao nhau với đường không ưu tiên",
    content: "Cảnh báo trước sắp đến nơi giao nhau với đường không ưu tiên.",
    image: require("../../assets/Bienbaonguyhiem/w207g.jpg"),
  },
  {
    type: "W.207h",
    name: "Giao nhau với đường không ưu tiên",
    content: "Cảnh báo trước sắp đến nơi giao nhau với đường không ưu tiên.",
    image: require("../../assets/Bienbaonguyhiem/w207h.jpg"),
  },
  {
    type: "W.207i",
    name: "Giao nhau với đường không ưu tiên",
    content: "Cảnh báo trước sắp đến nơi giao nhau với đường không ưu tiên.",
    image: require("../../assets/Bienbaonguyhiem/w207i.jpg"),
  },
  {
    type: "W.207k",
    name: "Giao nhau với đường không ưu tiên",
    content: "Cảnh báo trước sắp đến nơi giao nhau với đường không ưu tiên.",
    image: require("../../assets/Bienbaonguyhiem/w207k.jpg"),
  },
  {
    type: "W.208",
    name: "Giao nhau với đường ưu tiên",
    content:
      "Cảnh báo trước sắp đến nơi giao nhau với đường ưu tiên.Chú ý: Biển này tương tự, chỉ quay lộn ngược đầu so với biển báo nguy hiểm số 247.",
    image: require("../../assets/Bienbaonguyhiem/w208.jpg"),
  },
  {
    type: "W.209",
    name: "Giao nhau có tín hiệu đèn",
    content:
      "Cảnh báo trước nơi giao nhau có điều khiển giao thông bằng tín hiệu đèn trong trường hợp người lái xe khó quan sát để kịp thời xử lý.",
    image: require("../../assets/Bienbaonguyhiem/w209.jpg"),
  },
  {
    type: "W.210",
    name: "Giao nhau với đường sắt có rào chắn",
    content:
      "Cảnh báo trước sắp đến chỗ giao nhau giữa đường bộ và đường sắt có rào chắn kín hay rào chắn nửa kín và có nhân viên ngành đường sắt điều khiển giao thông.",
    image: require("../../assets/Bienbaonguyhiem/w210.jpg"),
  },
  {
    type: "W.211a",
    name: "Giao nhau với đường sắt không có rào chắn",
    content:
      "Cảnh báo trước sắp đến chỗ giao nhau giữa đường bộ và đường sắt không có rào chắn, không có người điều khiển giao thông.",
    image: require("../../assets/Bienbaonguyhiem/w211a.jpg"),
  },
  {
    type: "W.211b",
    name: "Giao nhau với đường tàu điện",
    content: "Cảnh báo nơi đường bộ giao nhau cùng mức với đường tàu điện.",
    image: require("../../assets/Bienbaonguyhiem/w211b.jpg"),
  },
  {
    type: "W.212",
    name: "Cầu hẹp",
    content:
      "Cảnh báo trước sắp đến cầu hẹp là loại cầu có chiều rộng phần xe chạy nhỏ hơn hoặc bằng 4,5m.",
    image: require("../../assets/Bienbaonguyhiem/w212.jpg"),
  },
  {
    type: "W.213",
    name: "Cầu tạm",
    content:
      "Cảnh báo trước sắp đến cầu tạm là loại cầu được làm để sử dụng tạm thời cho xe cộ qua lại.",
    image: require("../../assets/Bienbaonguyhiem/w213.jpg"),
  },
  {
    type: "W.214",
    name: "Cầu quay-cầu cất",
    content:
      "Cảnh báo phía trước gặp cầu xoay, cầu cất là loại cầu trong từng thời gian có cắt giao thông đường bộ bằng cách quay hoặc nâng nhịp thông thuyền để cho tàu thuyền qua lại.",
    image: require("../../assets/Bienbaonguyhiem/w214.jpg"),
  },
  {
    type: "W.215",
    name: "Kè, vực sâu phía trước",
    content:
      "Cảnh báo trước sắp tới những vị trí có kè chắn vực sâu, hoặc sông suối đi sát đường, cần đề phòng tình huống nguy hiểm rơi xuống vực sâu hoặc sông suối (thường có ở những chỗ ngoặt nguy hiểm).",
    image: require("../../assets/Bienbaonguyhiem/w215.jpg"),
  },
  {
    type: "W.216",
    name: "Đường ngầm",
    content: "Cảnh báo trước những vị trí có đường ngầm.",
    image: require("../../assets/Bienbaonguyhiem/w216.jpg"),
  },
  {
    type: "W.217",
    name: "Bến phà",
    content: "Báo trước sắp đến bến phà.",
    image: require("../../assets/Bienbaonguyhiem/w217.jpg"),
  },
  {
    type: "W.218",
    name: "Cửa chui",
    content:
      "Cảnh báo trước sắp đến đường có cổng chắn ngang, kiểu cổng như đường hầm, cổng thành, cầu vượt đường bộ dạng cầu vòm,..",
    image: require("../../assets/Bienbaonguyhiem/w218.jpg"),
  },
  {
    type: "W.219",
    name: "Dốc xuống nguy hiểm",
    content: "Cảnh báo trước sắp tới đoạn đường xuống dốc nguy hiểm.",
    image: require("../../assets/Bienbaonguyhiem/w219.jpg"),
  },
  {
    type: "W.220",
    name: "Dốc lên nguy hiểm",
    content: "Cảnh báo trước sắp tới đoạn đường lên dốc nguy hiểm.",
    image: require("../../assets/Bienbaonguyhiem/w220.jpg"),
  },
  {
    type: "W.221a",
    name: "Đường có ổ gà, lồi lõm",
    content:
      "Thuộc nhóm các biển báo nguy hiểm dùng cảnh báo những đoạn đường không tốt, trong trường hợp này là đường đang tốt, xe chạy nhanh, chuyển sang những đoạn lồi lõm, gập ghềnh, ổ gà, lượn sóng,…",
    image: require("../../assets/Bienbaonguyhiem/w221a.jpg"),
  },
  {
    type: "W.221b",
    name: "Đường có sóng mấp mô nhân tạo",
    content:
      "Thuộc nhóm các biển báo nguy hiểm dùng cảnh báo những đoạn đường không tốt. Trong trường hợp này là cảnh báo sắp tới đoạn đường có đường sóng, nên giảm tốc độ xe chạy.",
    image: require("../../assets/Bienbaonguyhiem/w221b.jpg"),
  },
  {
    type: "W.222a",
    name: "Đường trơn",
    content:
      "Cảnh báo trước sắp tới đoạn đường có thể xảy ra trơn trượt đặc biệt là khi thời tiết xấu, mưa phùn (hệ số bám của lốp với mặt đường < 0,3) cần tránh hãm phanh, tăng ga, sang số đột ngột hoặc cho xe chạy với tốc độ cao.",
    image: require("../../assets/Bienbaonguyhiem/w222a.jpg"),
  },
  {
    type: "W.222b",
    name: "Lề đường nguy hiểm",
    content:
      "Cảnh báo những nơi lề đường không ổn định, khi xe đi vào dễ gây văng đất đá hoặc bánh xe quay tại chỗ.",
    image: require("../../assets/Bienbaonguyhiem/w222b.jpg"),
  },
  {
    type: "W.223a",
    name: "Vách núi nguy hiểm",
    content:
      "Thuộc nhóm các biển báo nguy hiểm ở khu vực miền núi. Cảnh báo hiệu sắp đi vào đoạn đường đi sát vách núi nằm ở bên tay trái, đường vừa hẹp vừa hạn chế tầm nhìn, người lái xe phải cẩn thận.",
    image: require("../../assets/Bienbaonguyhiem/w223a.jpg"),
  },
  {
    type: "W.223b",
    name: "Vách núi nguy hiểm",
    content:
      "Thuộc nhóm các biển báo nguy hiểm ở khu vực miền núi. Cảnh báo hiệu sắp đi vào đoạn đường đi sát vách núi nằm ở bên tay phải, đường vừa hẹp vừa hạn chế tầm nhìn, người lái xe phải cẩn thận.",
    image: require("../../assets/Bienbaonguyhiem/w223b.jpg"),
  },
  {
    type: "W.224",
    name: "Đường người đi bộ cắt ngang",
    content:
      "Cảnh báo trước sắp tới phần đường dành cho người đi bộ sang qua đường. Gặp biển này các xe phải giảm tốc độ, nhường ưu tiên cho người đi bộ và chỉ được chạy xe khi không gây nguy hiểm cho người đi bộ.",
    image: require("../../assets/Bienbaonguyhiem/w224.jpg"),
  },
  {
    type: "W.225",
    name: "Trẻ em",
    content:
      "Cảnh báo trước là gần đến đoạn đường thường có trẻ em đi ngang qua hoặc tụ tập trên đường như ở vườn trẻ, trường học, câu lạc bộ.",
    image: require("../../assets/Bienbaonguyhiem/w225.jpg"),
  },
  {
    type: "W.226",
    name: "Đường người đi xe đạp cắt ngang",
    content:
      "Cảnh báo trước là gần tới vị trí thường có người đi xe đạp từ những đường nhỏ cắt ngang qua hoặc từ đường dành cho xe đạp đi nhập vào đường ôtô.",
    image: require("../../assets/Bienbaonguyhiem/w226.png"),
  },
  {
    type: "W.227",
    name: "Công trường",
    content:
      "Cảnh báo trước gần tới đoạn đường đang tiến hành thi công sửa chữa, cải tạo, nâng cấp có người và máy móc đang làm việc trên mặt đường. ",
    image: require("../../assets/Bienbaonguyhiem/w227.jpg"),
  },
  {
    type: "W.228a",
    name: "“Đá lở",
    content:
      "Thuộc nhóm các biển báo nguy hiểm có bất thường ở phía trước. Cảnh báo trước gần tới đoạn đường có hiện tượng đất đá từ trên cao sụt lở bất ngờ ở phía bên trái gây nguy hiểm cho xe cộ và người đi đường, đặc biệt là ở những đoạn đường miền núi. ",
    image: require("../../assets/Bienbaonguyhiem/w228a.jpg"),
  },
  {
    type: "W.228b",
    name: "Đá lở",
    content:
      "Thuộc nhóm các biển báo nguy hiểm có bất thường ở phía trước. Cảnh báo trước gần tới đoạn đường có hiện tượng đất đá từ trên cao sụt lở bất ngờ ở phía bên phải gây nguy hiểm cho xe cộ và người đi đường, đặc biệt là ở những đoạn đường miền núi.",
    image: require("../../assets/Bienbaonguyhiem/w228b.jpg"),
  },
  {
    type: "W.228c",
    name: "Sỏi đá bắn lên",
    content:
      "Thuộc nhóm các biển báo nguy hiểm có bất thường ở phía trước. Cảnh báo trước nơi có kết cấu mặt đường rời rạc, khi phương tiện đi qua, làm cho các viên đá, sỏi băng lên gây nguy hiểm và mất an toàn cho người và phương tiện tham gia giao thông.",
    image: require("../../assets/Bienbaonguyhiem/w228c.jpg"),
  },
  {
    type: "W.229",
    name: "Giải máy bay lên xuống",
    content:
      "Thuộc nhóm các biển báo nguy hiểm có bất thường ở phía trước. Cảnh báo đoạn đường ở vùng sát đường băng sân bay và cắt ngang qua hướng máy bay lên xuống ở độ cao không lớn.",
    image: require("../../assets/Bienbaonguyhiem/w229.png"),
  },
  {
    type: "W.230",
    name: "Gia súc",
    content:
      "Cảnh báo trước gần tới đoạn đường thường có gia súc thả rông hoặc lùa qua ngang đường, đường ở vùng đồng cỏ của nông trường chăn nuôi, vùng thảo nguyên,…",
    image: require("../../assets/Bienbaonguyhiem/w230.jpg"),
  },
  {
    type: "W.231",
    name: "Thú rừng vượt qua đường",
    content:
      "Cảnh báo trước gần tới đoạn đường thường có thú rừng qua đường như đường đi qua rừng hay khu vực bảo tồn thiên nhiên cấm săn bắn.",
    image: require("../../assets/Bienbaonguyhiem/w231.jpg"),
  },
  {
    type: "W.232",
    name: "Gió ngang",
    content:
      "Thuộc nhóm các biển báo nguy hiểm có bất thường ở phía trước. Cảnh báo trước gần tới đoạn đường thường có gió ngang thổi mạnh gây nguy hiểm.",
    image: require("../../assets/Bienbaonguyhiem/w232.jpg"),
  },
  {
    type: "W.233",
    name: "Nguy hiểm khác",
    content:
      "Cảnh báo trên đường có những nguy hiểm mà không thể vận dụng được các kiểu biển từ 201a đến 232.",
    image: require("../../assets/Bienbaonguyhiem/w233.png"),
  },
  {
    type: "W.234",
    name: "Giao nhau với đường hai chiều",
    content:
      "Đặt trên đường một chiều, cảnh báo sắp đến vị trí giao nhau với đường hai chiều.",
    image: require("../../assets/Bienbaonguyhiem/w234.png"),
  },
  {
    type: "W.235",
    name: "Đường đôi",
    content:
      "Cảnh báo sắp đến đoạn đường có chiều đi và chiều về phân biệt bằng giải phân cách cứng.",
    image: require("../../assets/Bienbaonguyhiem/w235.jpg"),
  },
  {
    type: "W.236",
    name: "Hết đường đôi",
    content:
      "Thông báo trước sắp kết thúc đoạn đường có chiều đi và chiều về phân biệt bằng giải phân cách cứng.",
    image: require("../../assets/Bienbaonguyhiem/w236.jpg"),
  },
  {
    type: "W.237",
    name: "Cầu vồng",
    content:
      "Đặt ở trên đoạn đường sắp đến công trình có độ vồng lớn ảnh hưởng tới tầm nhìn, nhắc nhở lái xe lái cẩn thận.",
    image: require("../../assets/Bienbaonguyhiem/w237.png"),
  },
  {
    type: "W.238",
    name: "Đường cao tốc phía trước",
    content:
      "Đặt trên đường nhánh nhập vào đường cao tốc để báo cho các phương tiện đi trên đường này biết có Đường cao tốc ở phía trước.",
    image: require("../../assets/Bienbaonguyhiem/w238.png"),
  },
  {
    type: "W.239",
    name: "Đường cáp điện ở phía trên",
    content:
      "Thuộc nhóm các biển báo nguy hiểm có bất thường ở phía trước. Đặt tại những nơi có đường dây điện cắt ngang phía trên tuyến đường.",
    image: require("../../assets/Bienbaonguyhiem/w239.jpg"),
  },
  {
    type: "W.240",
    name: "Đường hầm",
    content:
      "Biển đặt ở bên phải chiều đi trước khi vào hầm, báo lái xe chú ý chuẩn bị đi vào hầm đường bộ.",
    image: require("../../assets/Bienbaonguyhiem/w240.jpg"),
  },
  {
    type: "W.241",
    name: "Ùn tắc giao thông",
    content: "Cảnh báo đoạn đường hay xảy ra ùn tắc giao thông.",
    image: require("../../assets/Bienbaonguyhiem/w241.png"),
  },
  {
    type: "W.242a",
    name: "Nơi đường sắt giao vuông góc với đường bộ",
    content:
      "Dùng bổ sung cho  211 “Giao nhau với đường sắt không có rào chắn”, để chỉ chỗ đường sắt giao vuông góc đường bộ, và tại chỗ giao nhau đường sắt chỉ có một đường cắt ngang đường bộ.",
    image: require("../../assets/Bienbaonguyhiem/w242a.jpg"),
  },
  {
    type: "W.242b",
    name: "Nơi đường sắt giao vuông góc với đường bộ",
    content:
      "Dùng bổ sung cho  211 “Giao nhau với đường sắt không có rào chắn”, để chỉ chỗ đường sắt giao vuông góc đường bộ, và tại chỗ giao nhau đường sắt có từ hai đường cắt ngang đường bộ.",
    image: require("../../assets/Bienbaonguyhiem/w242b.jpg"),
  },
  {
    type: "W.243a",
    name: "Nơi đường sắt giao không vuông góc với đường bộ",
    content:
      "Đặt ở nơi cách ray ngoài cùng nơi giao đường sắt 50m, báo trước sắp đến vị trí giao cắt đường bộ với đường sắt cùng mức, không vuông góc và không có người gác, không có rào chắn.",
    image: require("../../assets/Bienbaonguyhiem/w243a.png"),
  },
  {
    type: "W.243b",
    name: "Nơi đường sắt giao không vuông góc với đường bộ",
    content:
      "Đặt ở nơi cách ray ngoài cùng nơi giao đường sắt 100m, báo trước sắp đến vị trí giao cắt đường bộ với đường sắt cùng mức, không vuông góc và không có người gác, không có rào chắn.",
    image: require("../../assets/Bienbaonguyhiem/w243b.jpg"),
  },
  {
    type: "W.243c",
    name: "Nơi đường sắt giao không vuông góc với đường bộ",
    content:
      "Đặt ở nơi cách ray ngoài cùng nơi giao đường sắt 150m, báo trước sắp đến vị trí giao cắt đường bộ với đường sắt cùng mức, không vuông góc và không có người gác, không có rào chắn.",
    image: require("../../assets/Bienbaonguyhiem/w243c.png"),
  },
  {
    type: "W.244",
    name: "Đoạn đường hay xảy ra tai nạn",
    content:
      "Cảnh báo nguy hiểm đoạn đường phía trước thường xảy ra tai nạn để lái xe cần đặc biệt chú ý.",
    image: require("../../assets/Bienbaonguyhiem/w244.png"),
  },
  {
    type: "W.245a",
    name: "Đi chậm",
    content:
      "Cảnh báo lái xe nên giảm tốc khi di chuyển ở đoạn đường phía trước.",
    image: require("../../assets/Bienbaonguyhiem/w245a.png"),
  },
  {
    type: "W.245b",
    name: "Đi chậm",
    content:
      "Nhắc lái xe giảm tốc độ đi chậm, đối với các tuyến đường đối ngoại.",
    image: require("../../assets/Bienbaonguyhiem/w245b.jpg"),
  },
  {
    type: "W.246a",
    name: "Chú ý chướng ngại vật – Vòng tránh ra hai bên",
    content:
      "Cảnh báo trước cho lái xe biết phía trước có chướng ngại vật, xe cần giảm tốc độ và đi vòng tránh ra hai bên.",
    image: require("../../assets/Bienbaonguyhiem/w246a.jpg"),
  },
  {
    type: "W.246b",
    name: "Chú ý chướng ngại vật – Vòng tránh sang bên trái",
    content:
      "Cảnh báo trước cho lái xe biết phía trước có chướng ngại vật, xe cần giảm tốc độ và đi vòng tránh sang bên trái.",
    image: require("../../assets/Bienbaonguyhiem/w246b.jpg"),
  },
  {
    type: "W.246c",
    name: "Chú ý chướng ngại vật – Vòng tránh sang bên phải",
    content:
      "Cảnh báo trước cho lái xe biết phía trước có chướng ngại vật, xe cần giảm tốc độ và đi vòng tránh sang bên phải.",
    image: require("../../assets/Bienbaonguyhiem/w246c.jpg"),
  },
  {
    type: "W.247",
    name: "Chú ý xe đỗ",
    content:
      "Cảnh báo có các loại xe ô tô; máy kéo; rơ moóc hoặc sơ mi rơ moóc được kéo bởi xe ô tô hoặc ôtô đầu kéo; xe máy chuyên dùng đang đỗ chiếm một phần đường xe chạy.Lưu ý: Biển này tương tự, chỉ lộn ngược đầu so với biển báo nguy hiểm số 208 “Giao nhau với đường ưu tiên”.",
    image: require("../../assets/Bienbaonguyhiem/w247.png"),
  },
];

const BienBaoNguyHiem = () => {
  const [visible, setVisible] = useState(false);
  const [selectedSign, setSelectedSign] = useState(null);

  const showDialog = (sign) => {
    setSelectedSign(sign);
    setVisible(true);
  };

  const hideDialog = () => {
    setVisible(false);
    setSelectedSign(null);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => showDialog(item)}
    >
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.type}</Text>
        <Text style={styles.type}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <PaperProvider>
      <FlatList
        data={rawData}
        renderItem={renderItem}
        keyExtractor={(item) => item.type}
      />

      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog} style={styles.dialog}>
          <Dialog.Title style={styles.dialogTitle}>
            {selectedSign?.type} : {selectedSign?.name}
          </Dialog.Title>
          <Dialog.Content style={styles.dialogContent}>
            <Image source={selectedSign?.image} style={styles.dialogImage} />
            <Paragraph>{selectedSign?.content}</Paragraph>
          </Dialog.Content>
          <Dialog.Actions style={styles.dialogActions}>
            <Button onPress={hideDialog}>Đóng</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginRight: 30,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  type: {
    fontSize: 14,
    color: "#666",
  },
  dialog: {
    backgroundColor: "white",
    borderRadius: 8,
  },
  dialogContent: {
    alignItems: "center",
  },
  dialogTitle: {
    marginTop: 10,
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 17,
  },
  dialogImage: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginBottom: 10,
  },
  dialogActions: {
    justifyContent: "center",
  },
});

export default BienBaoNguyHiem;
