import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

const MeoghinhoTab = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Cấp phép</Text>
          <Text style={styles.contentText}>
            - Đường cấm dừng, cấm đỗ, cấm đi do UBND cấp tỉnh cấp.
          </Text>
          <Text style={styles.contentText}>
            - Xe quá khổ, quá tải do cơ quan quản lý đường bộ có thẩm quyền cấp
            phép.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Nồng độ cồn</Text>
          <Text style={styles.contentText}>
            - Người điều khiển xe mô tô, ô tô, máy kéo trên đường mà trong máu
            hoặc hơi thở có nồng độ cồn: Bị nghiêm cấm.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>
            Khoảng cách an toàn tối thiểu
          </Text>
          <Text style={styles.contentText}>
            - 35m nếu vận tốc lưu hành (V) = 60 (km/h).
          </Text>
          <Text style={styles.contentText}>
            - 55m nếu 60 {"<"} {"V"} {"<="} 80.
          </Text>
          <Text style={styles.contentText}>
            - 70m nếu 80 {"<"} {"V"} {"<="} 100.
          </Text>
          <Text style={styles.contentText}>
            - 100m nếu 100 {"<"} {"V"} {"<="} 120.
          </Text>
          <Text style={styles.contentText}>
            - Dưới 60 km/h: Chủ động và đảm bảo khoảng cách.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Hỏi về tuổi (T)</Text>
          <Text style={styles.contentText}>
            - Tuổi tối đa hạng E: nam 55, nữ 50
          </Text>
          <Text style={styles.contentText}>
            - Tuổi lấy bằng lái xe (cách nhau 3 tuổi)
          </Text>
          <Text style={styles.contentText}>- Gắn máy: 16T (dưới 50cm3)</Text>
          <Text style={styles.contentText}>- Mô tô + B1 + B2: 18T</Text>
          <Text style={styles.contentText}>- C, FB: 21T</Text>
          <Text style={styles.contentText}>- D, FC: 24T</Text>
          <Text style={styles.contentText}>- E, FD: 27T</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>
            Trên đường cao tốc, trong đường hầm, đường vòng, đầu dốc, nơi tầm
            nhìn hạn chế
          </Text>
          <Text style={styles.contentText}>
            - Không được quay đầu xe, không lùi, không vượt
          </Text>
          <Text style={styles.contentText}>
            - Không được vượt trên cầu hẹp có một làn xe.
          </Text>
          <Text style={styles.contentText}>
            - Không được phép quay đầu xe ở phần đường dành cho người đi bộ qua
            đường.
          </Text>
          <Text style={styles.contentText}>
            - Cấm lùi xe ở khu vực cấm dừng và nơi đường bộ giao nhau.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>
            Tại nơi giao nhau không có tín hiệu đèn
          </Text>
          <Text style={styles.contentText}>
            - Có vòng xuyến: Nhường đường bên trái
          </Text>
          <Text style={styles.contentText}>
            - Không có vòng xuyến nhường bên phải
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>
            Niên hạn sử dụng (tính từ năm sx)
          </Text>
          <Text style={styles.contentText}>- 25 năm: ô tô tải</Text>
          <Text style={styles.contentText}>
            - 20 năm: ô tô chở người trên 9 chỗ
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Biển báo cấm</Text>
          <Text style={styles.contentText}>
            Cấm ô tô (Gồm: mô tô 3 bánh, Xe Lam, xe khách) --{">"} Cấm xe tải --
            {">"} Cấm Máy kéo --{">"} Cấm rơ moóc, sơ mi rơ moóc
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>
            Nhất chớm, nhì ưu, tam đường, tứ hướng
          </Text>
          <Text style={styles.contentText}>
            1. Nhất chớm: Xe nào chớm tới vạch trước thì được đi trước
          </Text>
          <Text style={styles.contentText}>
            2. Nhì ưu: Xe ưu tiên được đi trước. Thứ tự xe ưu tiên:
            Hỏa-Sự-An-Thương (Cứu hỏa - Quân sự - Công an - Cứu thương - Hộ đê -
            Đoàn xe tang).
          </Text>
          <Text style={styles.contentText}>
            3. Tam đường: Xe ở đường chính, đường ưu tiên.
          </Text>
          <Text style={styles.contentText}>
            4. Tứ hướng: Thứ tự hướng: Bên phải trống - Rẽ phải - Đi thẳng - Rẽ
            trái.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>
            Thứ tự ưu tiên với xe ưu tiên: Hỏa-Sự-An-Thương
          </Text>
          <Text style={styles.contentText}>- Hỏa: Xe Cứu hỏa</Text>
          <Text style={styles.contentText}>- Sự : Xe Quân sự</Text>
          <Text style={styles.contentText}>- An: Xe Công an</Text>
          <Text style={styles.contentText}>- Thương: Xe cứu thương</Text>
          <Text style={styles.contentText}>
            - Xe hộ đê, xe đi làm nhiệm vụ khẩn cấp
          </Text>
          <Text style={styles.contentText}>- Đoàn xe tang</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Các hạng GPLX</Text>
          <Text style={styles.contentText}>
            - A1 mô tô dưới 175 cm3 và xe 3 bánh của người khuyết tật
          </Text>
          <Text style={styles.contentText}>- A2 mô tô 175 cm3 trở lên</Text>
          <Text style={styles.contentText}>- A3 xe mô tô 3 bánh</Text>
          <Text style={styles.contentText}>- B1 không hành nghề lái xe</Text>
          <Text style={styles.contentText}>
            - B1, B2 đến 9 chỗ ngồi, xe tải dưới 3.500kg
          </Text>
          <Text style={styles.contentText}>
            - C đến 9 chỗ ngồi, xe trên 3.500kg
          </Text>
          <Text style={styles.contentText}>- D chở đến 30 người</Text>
          <Text style={styles.contentText}>- E chở trên 30 người.</Text>
          <Text style={styles.contentText}>
            - FC: C + kéo (ô tô đầu kéo, kéo sơ mi rơ moóc)
          </Text>
          <Text style={styles.contentText}>
            - FE: E + kéo (ô tô chở khách nối toa)
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>
            Phân nhóm biển báo hiệu: bao gồm
          </Text>
          <Text style={styles.contentText}>
            - Biển nguy hiểm (hình tam giác vàng)
          </Text>
          <Text style={styles.contentText}>- Biển cấm (vòng tròn đỏ)</Text>
          <Text style={styles.contentText}>
            - Biển hiệu lệnh (vòng tròn xanh)
          </Text>
          <Text style={styles.contentText}>
            - Biển chỉ dẫn (vuông hoặc hình chữ nhật xanh)
          </Text>
          <Text style={styles.contentText}>
            - Biển phụ (vuông, chữ nhật trắng đen): Hiệu lực nằm ở biển phụ khi
            có đặt biển phụ
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>
            Tốc độ tối đa TRONG khu vực đông dân cư
          </Text>
          <Text style={styles.contentText}>
            - 60km/h: Đối với đường đôi hoặc đường 1 chiều có từ 2 làn xe cơ
            giới trở lên
          </Text>
          <Text style={styles.contentText}>
            - 50km/h: Đối với đường 2 chiều hoặc đường 1 chiều có 1 làn xe cơ
            giới
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>
            Tốc độ tối đa NGOÀI khu vực đông dân cư (trừ đường cao tốc)
          </Text>
          <Text style={styles.contentText}>
            1. Đối với đường đôi hoặc đường 1 chiều có từ 2 làn xe cơ giới trở
            lên
          </Text>
          <Text style={styles.contentSmall}>
            + 90km/h: Xe ô tô con, xe ô tô chở người đến 30 chỗ (trừ xe buýt), ô
            tô tải có trọng tải ≤3.5 tấn.
          </Text>
          <Text style={styles.contentSmall}>
            + 80km/h: Xe ô tô chở người trên 30 chỗ (trừ xe buýt), ô tô tải có
            trọng tải {">"} 3.5 tấn (trừ ô tô xitec).
          </Text>
          <Text style={styles.contentSmall}>
            + 70km/h: Ô tô buýt, ô tô đầu kéo kéo sơ mi rơ mooc, xe mô tô, ô tô
            chuyên dùng (trừ ô tô trộn vữa, trộn bê tông).
          </Text>
          <Text style={styles.contentSmall}>
            + 60km/h: Ô tô kéo rơ mooc, ô tô kéo xe khác, ô tô trộn vữa, ô tô
            trộn bê tông, ô tô xi téc.
          </Text>
          <Text style={styles.contentText}>
            2. Đối với đường 2 chiều hoặc đường 1 chiều có 1 làn xe cơ giới
          </Text>
          <Text style={styles.contentSmall}>
            + 80km/h: Xe ô tô con, xe ô tô chở người đến 30 chỗ (trừ xe buýt), ô
            tô tải có trọng tải ≤ 3.5 tấn.
          </Text>
          <Text style={styles.contentSmall}>
            + 70km/h: Xe ô tô chở người trên 30 chỗ (trừ xe buýt), ô tô tải có
            trọng tải {">"} 3.5 tấn (trừ ô tô xitec).
          </Text>
          <Text style={styles.contentSmall}>
            + 60km/h: Ô tô buýt, ô tô đầu kéo kéo sơ mi rơ mooc, xe mô tô, ô tô
            chuyên dùng (trừ ô tô trộn vữa, trộn bê tông).
          </Text>
          <Text style={styles.contentSmall}>
            + 50km/h: Ô tô kéo rơ mooc, ô tô kéo xe khác, ô tô trộn vữa, ô tô
            trộn bê tông, ô tô xi téc.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>
            Tốc độ tối đa cho phép đối với
          </Text>
          <Text style={styles.contentText}>
            - Xe máy chuyên dùng, xe gắn máy (kể cả xe máy điện) và các loại xe
            tương tự trên đường bộ (trừ đường cao tốc): 40km/h
          </Text>
          <Text style={styles.contentText}>
            - Tốc độ tối đa cho phép của các loại xe cơ giới, xe máy chuyên dùng
            trên đường cao tốc phải tuân thủ tốc độ tối đa, tốc độ tối thiểu và
            không vượt quá: 120km/h
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Tăng số, giảm số</Text>
          <Text style={styles.contentText}>
            - Tăng 1 Giảm 2 (giảm số chọn ý có từ “vù ga”)
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>
            Phương tiện giao thông đường bộ
          </Text>
          <Text style={styles.contentText}>
            - Bao gồm phương tiện giao thông cơ giới đường bộ và phương tiện
            giao thông thô sơ đường bộ
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>
            Phương tiện tham gia giao thông đường bộ
          </Text>
          <Text style={styles.contentText}>
            - Gồm phương tiện giao thông đường bộ và xe máy chuyên dùng
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Xe máy chuyên dùng</Text>
          <Text style={styles.contentText}>
            - Gồm xe máy thi công, xe máy nông nghiệp, lâm nghiệp và các loại xe
            đặc chủng khác sử dụng và mục đích quốc phòng, an ninh có tham gia
            giao thông đường bộ
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>
            Hiệu lệnh người điều khiển giao thông
          </Text>
          <Text style={styles.contentText}>
            - Giơ tay thẳng đứng: Tất cả dừng, trừ xe đã ở trong ngã tư được
            phép đi
          </Text>
          <Text style={styles.contentText}>
            - Giang ngang tay: Trái phải đi; Trước sau dừng
          </Text>
          <Text style={styles.contentText}>
            - Tay phải giơ trước: Sau, phải dừng, trước rẽ phải, trái đi các
            hướng, người đi bộ qua đường đi sau người điều khiển.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Khái niệm và quy tắc</Text>
          <Text style={styles.contentText}>
            - Tất cả các câu có đáp án bị nghiêm cấm, không cho phép hoặc không
            được phép thì chọn đáp án đó.
          </Text>
          <Text style={styles.contentText}> - Tốc độ chậm đi về bên phải.</Text>
          <Text style={styles.contentText}>
            {" "}
            - Chỉ sử dụng còi từ 5 giờ sáng đến 22 giờ tối.
          </Text>
          <Text style={styles.contentText}>
            {" "}
            - Trong đô thị sử dụng đèn chiếu gần.
          </Text>
          <Text style={styles.contentText}>
            - Không được phép lắp đặt còi đèn không đúng thiết kế, trừ phi được
            chấp thuận của cơ quan có thẩm quyền.
          </Text>
          <Text style={styles.contentText}>
            {" "}
            - Xe mô tô không được kéo xe khác.
          </Text>
          <Text style={styles.contentText}>
            {" "}
            - 05 năm không cấp lại nếu sử dụng bằng lái đã khai báo mất.
          </Text>
          <Text style={styles.contentText}>
            {" "}
            - Chuyển làn đường phải có tín hiệu báo trước.
          </Text>
          <Text style={styles.contentText}>
            {" "}
            - Xe thô sơ phải đi làn đường nên phải trong cùng.
          </Text>
          <Text style={styles.contentText}>
            {" "}
            - Tránh xe ngược chiều thì nhường đường qua đường hẹp và nhường xe
            lên dốc.
          </Text>
          <Text style={styles.contentText}> - Đứng cách ray đường sắt 5m.</Text>
          <Text style={styles.contentText}>
            {" "}
            - Vào cao tốc phải nhường đường cho xe đang chạy trên đường.
          </Text>
          <Text style={styles.contentText}>
            {" "}
            - Xe thiết kế nhỏ hơn 70km/h không được vào cao tốc.
          </Text>
          <Text style={styles.contentText}>
            {" "}
            - Trên cao tốc chỉ được dừng xe, đỗ xe ở nơi quy định.
          </Text>
          <Text style={styles.contentText}>
            {" "}
            - Trong hầm chỉ được dừng xe, đỗ xe ở nơi quy định.
          </Text>
          <Text style={styles.contentText}>
            {" "}
            - Xe quá tải trọng phải do cơ quan quản lý đường bộ cấp phép.
          </Text>
          <Text style={styles.contentText}>
            {" "}
            - Trọng lượng xe kéo rơ moóc phải lớn hơn rơ moóc.
          </Text>
          <Text style={styles.contentText}>
            {" "}
            - Kéo xe không hệ thống hãm phải dùng thanh nối cứng.
          </Text>
          <Text style={styles.contentText}> - Xe gắn máy tối đa 40km/h.</Text>
          <Text style={styles.contentText}>
            {" "}
            - Xe cơ giới không bao gồm xe gắn máy.
          </Text>
          <Text style={styles.contentText}>
            {" "}
            - Đường có giải phân cách được xem là đường đôi.
          </Text>
          <Text style={styles.contentText}>
            - Giảm tốc độ, chú ý quan sát khi gặp biển báo nguy hiểm.
          </Text>
          <Text style={styles.contentText}>
            - Giảm tốc độ, đi sát về bên phải khi xe sau xin vượt.
          </Text>
          <Text style={styles.contentText}>
            - Điểm giao cắt đường sắt thì ưu tiên đường sắt.
          </Text>
          <Text style={styles.contentText}>
            - Nhường đường cho xe ưu tiên có tín hiệu còi, cờ, đèn.
          </Text>
          <Text style={styles.contentText}>
            - Không vượt xe khác trên đường vòng, khuất tầm nhìn.
          </Text>
          <Text style={styles.contentText}>
            - Nơi có vạch kẻ đường dành cho người đi bộ thì nhường đường.
          </Text>
          <Text style={styles.contentText}>
            - Dừng xe, đỗ xe cách lề đường, hè phố không quá 0,25 mét.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Nghiệp vụ vận tải</Text>
          <Text style={styles.contentText}>
            - Không lái xe liên tục quá 4 giờ.
          </Text>
          <Text style={styles.contentText}>
            - Không làm việc 1 ngày của lái xe quá 10 giờ.
          </Text>
          <Text style={styles.contentText}>
            - Người kinh doanh vận tải không được tự ý thay đổi vị trí đón trả
            khách.
          </Text>
          <Text style={styles.contentText}>
            - Vận chuyển hàng nguy hiểm phải có giấy phép.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Kỹ thuật lái xe</Text>
          <Text style={styles.contentText}>
            - Xe mô tô xuống dốc dài cần sử dụng cả phanh trước và phanh sau để
            giảm tốc độ.
          </Text>
          <Text style={styles.contentText}>
            {" "}
            - Khởi hành xe ô tô số tự động cần đạp phanh chân hết hành trình.
          </Text>
          <Text style={styles.contentText}>
            {" "}
            - Thực hiện phanh tay cần phải bóp khóa hãm đẩy cần phanh tay về
            phía trước.
          </Text>
          <Text style={styles.contentText}>
            {" "}
            - Khởi hành ô tô sử dụng hộp số đạp côn hết hành trình.
          </Text>
          <Text style={styles.contentText}>
            - Thực hiện quay đầu xe với tốc độ thấp.
          </Text>
          <Text style={styles.contentText}>
            {" "}
            - Lái xe ô tô qua đường sắt không rào chắn thì cách 5 mét hạ kính
            cửa, tắt âm thanh, quan sát.
          </Text>
          <Text style={styles.contentText}>
            {" "}
            - Mở cửa xe thì quan sát rồi mới mở hé cánh cửa.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Cấu tạo và sữa chữa</Text>
          <Text style={styles.contentText}>
            - Yêu cầu của kính chắn gió, chọn "Loại kính an toàn"
          </Text>
          <Text style={styles.contentText}>
            - Âm lượng của còi là từ 90dB đến 115 dB.
          </Text>
          <Text style={styles.contentText}>
            - Động cơ diesel không nổ do nhiên liệu lẫn tạp chất.
          </Text>
          <Text style={styles.contentText}>
            - Dây đai an toàn có cơ cấu hãm giữ chặt dây khi giật dây đột ngột.
          </Text>
          <Text style={styles.contentText}>
            - Động cơ 4 kỳ thì pít tông thực hiện 4 hành trình.
          </Text>
          <Text style={styles.contentText}>
            - Hệ thống bôi trơn giảm ma sát.
          </Text>
          <Text style={styles.contentText}>
            - Niên hạn ô tô trên 9 chỗ ngồi là 20 năm.
          </Text>
          <Text style={styles.contentText}>- Niên hạn ô tô tải là 25 năm.</Text>
          <Text style={styles.contentText}>
            - Động cơ ô tô biến nhiệt năng thành cơ năng.
          </Text>
          <Text style={styles.contentText}>
            - Hệ thống truyền lực truyền mô men quay từ động cơ tới bánh xe.
          </Text>
          <Text style={styles.contentText}>
            - Ly hợp (côn) truyền hoặc ngắt truyền động từ động cơ đến hộp số.
          </Text>
          <Text style={styles.contentText}>
            - Hộp số ô tô đảm bảo chuyển động lùi.
          </Text>
          <Text style={styles.contentText}>
            - Hệ thống lái dùng để thay đổi hướng.
          </Text>
          <Text style={styles.contentText}>
            - Hệ thống phanh giúp giảm tốc độ.
          </Text>
          <Text style={styles.contentText}>
            - Ắc quy để tích trữ điện năng.
          </Text>
          <Text style={styles.contentText}>
            - Khởi động xe tự động phải đạp phanh.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Các quy tắc sa hình khác</Text>
          <Text style={styles.contentText}>
            - Thứ tự ưu tiên không vòng xuyến: Xe vào ngã ba, ngã tư trước - Xe
            ưu tiên - Đường ưu tiên - Đường cùng cấp theo thứ tự bên phải trống
            - rẽ phải - đi thẳng - rẽ trái.
          </Text>
          <Text style={styles.contentText}>
            - Giao nhau cùng cấp có vòng xuyến: Chưa vào vòng xuyến thì ưu tiên
            xe bên phải; đã vào vòng xuyến ưu tiên xe từ bên trái tới.
          </Text>
          <Text style={styles.contentText}>
            - Xe xuống dốc phải nhường đường cho xe đang lên dốc
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const MeoghinhoStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MeoghinhoTab"
        component={MeoghinhoTab}
        options={({ navigation }) => ({
          title: "Mẹo ôn thi GPLX",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#2F95DC" },
          headerTintColor: "#FFFFFF",
          headerTitleStyle: { fontWeight: "bold" },
          headerLeft: () => (
            <Icon
              name="chevron-left"
              size={15}
              onPress={() => navigation.goBack()}
              style={{ color: "#FFFFFF", marginLeft: 10 }}
            >
              Back
            </Icon>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flex: 1,
    fontSize: 15,
    marginTop: 5,
    fontWeight: "bold",
    color: "#fff",
  },
  contentContainer: {
    padding: 16,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007bff",
    marginBottom: 8,
  },
  contentText: {
    fontSize: 15,
    color: "#333",
    padding: 5,
  },
  contentSmall: {
    marginLeft: 20,
    padding: 5,
  },
});

export default MeoghinhoStack;
