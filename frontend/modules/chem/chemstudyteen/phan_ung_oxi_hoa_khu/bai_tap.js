const data = (() => {
  // === RAW DATA TỪ PROMPT ===
  const rawMCQ = `
Câu 1. Số oxi hóa là điện tích quy ước của nguyên tử trong phân tử khi coi tất cả các liên kết đều là:
A. Liên kết cộng hóa trị không cực
B. Liên kết ion
C. Liên kết hydrogen
D. Liên kết kim loại

Câu 2. Trong đơn chất, số oxi hóa của nguyên tử luôn bằng:
A. +1
B. -1
C. 0
D. +2

Câu 3. Trong các hợp chất, thông thường số oxi hóa của hydrogen (H) là:
A. -1
B. 0
C. +1
D. +2

Câu 4. Trong các hợp chất, thông thường số oxi hóa của oxygen (O) là:
A. -2
B. -1
C. +2
D. 0

Câu 5. Số oxi hóa của các kim loại kiềm (nhóm IA) trong hợp chất luôn là:
A. +2
B. +1
C. +3
D. -1

Câu 6. Số oxi hóa của Aluminium (Al) trong các hợp chất là:
A. +1
B. +2
C. +3
D. 0

Câu 7. Trong một phân tử, tổng số oxi hóa của các nguyên tử bằng:
A. +1
B. -1
C. 0
D. Điện tích của ion

Câu 8. Chất khử là chất:
A. Nhận electron
B. Nhường electron
C. Không thay đổi số oxi hóa
D. Có số oxi hóa giảm sau phản ứng

Câu 9. Chất oxi hóa là chất:
A. Nhường electron
B. Nhận electron
C. Có số oxi hóa tăng sau phản ứng
D. Là chất bị oxi hóa

Câu 10. Quá trình oxi hóa là quá trình:
A. Nhận electron
B. Nhường electron
C. Làm giảm số oxi hóa
D. Tạo ra đơn chất

Câu 11. Quá trình khử là quá trình:
A. Nhận electron
B. Nhường electron
C. Làm tăng số oxi hóa
D. Là sự oxi hóa

Câu 12. Phản ứng oxi hóa – khử là phản ứng có sự thay đổi:
A. Số khối của hạt nhân
B. Số oxi hóa của ít nhất một nguyên tố
C. Số lượng nguyên tử các nguyên tố
D. Trạng thái vật lí của các chất

Câu 13. Bản chất của phản ứng oxi hóa – khử là sự chuyển dịch:
A. Proton
B. Neutron
C. Electron
D. Nguyên tử

Câu 14. Dấu hiệu dễ nhận biết nhất của một phản ứng oxi hóa – khử là có sự tham gia của:
A. Nước
B. Acid
C. Đơn chất
D. Chất xúc tác

Câu 15. Số oxi hóa của Na trong đơn chất Na là:
A. +1
B. -1
C. 0
D. +11

Câu 16. Số oxi hóa của O trong phân tử O2 là:
A. -2
B. -1
C. 0
D. +2

Câu 17. Trong ion đơn nguyên tử, số oxi hóa bằng:
A. Số electron của nguyên tử
B. Điện tích của ion đó
C. Số hiệu nguyên tử
D. Luôn bằng 0

Câu 18. Số oxi hóa của Mg trong ion Mg 2+ là:
A. 0
B. +1
C. +2
D. -2

Câu 19. Số oxi hóa của Cl trong ion Cl - là:
A. 0
B. +1
C. -1
D. +7

Câu 20. Phản ứng của Mg với O2 tạo thành MgO thuộc loại phản ứng:
A. Phản ứng trao đổi
B. Phản ứng oxi hóa – khử
C. Phản ứng nhiệt phân
D. Phản ứng thủy phân

Câu 21. Hiện tượng đinh ốc sắt bị gỉ ngoài không khí minh họa cho quá trình:
A. Khử sắt
B. Oxi hóa sắt
C. Hòa tan sắt
D. Thăng hoa sắt

Câu 22. Quá trình đốt cháy nhiên liệu như than, củi là phản ứng:
A. Thu nhiệt
B. Oxi hóa – khử
C. Trao đổi ion
D. Phân hủy

Câu 23. Trong pin lithium-ion, năng lượng được lưu trữ thông qua phản ứng:
A. Axit - bazơ
B. Kết tủa
C. Oxi hóa – khử
D. Phân hạch

Câu 24. Sự quang hợp của cây xanh giúp tích trữ năng lượng dưới dạng:
A. Nhiệt năng
B. Tinh bột
C. Điện năng
D. Động năng

Câu 25. Chất bị khử là tên gọi khác của:
A. Chất khử
B. Chất oxi hóa
C. Môi trường
D. Chất xúc tác

Câu 26. Chất bị oxi hóa là tên gọi khác của:
A. Chất khử
B. Chất oxi hóa
C. Sản phẩm khử
D. Sản phẩm oxi hóa

Câu 27. Nguyên tắc thăng bằng electron là tổng số electron nhường phải:
A. Lớn hơn tổng số electron nhận
B. Nhỏ hơn tổng số electron nhận
C. Bằng tổng số electron nhận
D. Bằng số proton trong hạt nhân

Câu 28. Số oxi hóa thường được viết ở vị trí nào của kí hiệu nguyên tố?
A. Phía dưới, bên phải
B. Phía trên, chính giữa
C. Phía trên, bên trái
D. Phía dưới, bên trái

Câu 29. Trong hợp chất CaF2, số oxi hóa của Calcium (Ca) là:
A. +1
B. +2
C. -1
D. -2

Câu 30. Số oxi hóa của S trong đơn chất S8 là:
A. -2
B. +4
C. +6
D. 0

Câu 31. Quá trình quang hợp ở cây xanh là quá trình tích trữ năng lượng từ:
A. Phản ứng cháy
B. Ánh sáng mặt trời
C. Pin lithium
D. Sự gỉ sét

Câu 32. Ứng dụng nào sau đây của phản ứng oxi hóa – khử dùng trong giao thông?
A. Máy đo nồng độ cồn
B. Sản xuất phân bón
C. Luyện thép
D. Quang hợp

Câu 33. Phản ứng tỏa nhiệt là phản ứng:
A. Hấp thụ nhiệt lượng
B. Giải phóng nhiệt lượng
C. Không thay đổi nhiệt độ
D. Cần chất xúc tác

Câu 34. Trong ion đa nguyên tử, tổng số oxi hóa của các nguyên tử bằng:
A. 0
B. +1
C. Điện tích của ion
D. Tổng số electron

Câu 35. Số oxi hóa của Zn trong ion Zn 2+ là:
A. 0
B. +2
C. -2
D. +1

Câu 36. Sự gỉ sét của sắt là phản ứng có lợi hay có hại?
A. Có lợi vì tạo ra vật liệu mới
B. Có hại vì gây tổn thất kinh tế
C. Không có ảnh hưởng gì
D. Có lợi cho quá trình luyện kim

Câu 37. Trong máy đo nồng độ cồn, ethanol phản ứng với chất nào sau đây?
A. KMnO4
B. K2Cr2O7
C. NaOH
D. H2SO4 loãng

Câu 38. Màu của dung dịch trong máy đo nồng độ cồn chuyển từ da cam sang màu gì khi gặp ethanol?
A. Đỏ
B. Xanh lá cây
C. Tím
D. Không màu

Câu 39. Sản xuất gang, thép, nhôm dựa trên loại phản ứng nào?
A. Phản ứng thế
B. Phản ứng oxi hóa – khử (luyện kim)
C. Phản ứng hóa hợp
D. Phản ứng phân hủy

Câu 40. Clo dùng để khử trùng nước sinh hoạt dựa trên tính chất gì?
A. Tính khử mạnh
B. Tính oxi hóa mạnh
C. Tính axit mạnh
D. Tính bazơ mạnh

Câu 41. (Thông hiểu) Tại sao trong OF2, số oxi hóa của Oxygen lại là +2?
A. Vì Oxygen luôn là -2 trong mọi hợp chất
B. Vì Fluorine có độ âm điện lớn hơn Oxygen
C. Vì Fluorine có số oxi hóa là +1
D. Vì đây là đơn chất

Câu 42. (Thông hiểu) Xác định số oxi hóa của Mn trong hợp chất KMnO4.
A. +2
B. +4
C. +6
D. +7

Câu 43. (Thông hiểu) Xác định số oxi hóa của Cr trong hợp chất K2Cr2O7.
A. +3
B. +6
C. +7
D. +12

Câu 44. (Thông hiểu) Trong phản ứng: Zn + H2SO4 -> ZnSO4 + H2, chất khử là:
A. H2SO4
B. Zn
C. ZnSO4
D. H2

Câu 45. (Thông hiểu) Trong phản ứng: 2Ag + Cl2 -> 2AgCl, chất oxi hóa là:
A. Ag
B. Cl2
C. AgCl
D. Không có chất oxi hóa

Câu 46. (Thông hiểu) Quá trình: Fe 2+ -> Fe 3+ + 1e là quá trình:
A. Oxi hóa
B. Khử
C. Tự oxi hóa
D. Thủy phân

Câu 47. (Thông hiểu) Số oxi hóa của Nitrogen trong ion NH4+ là:
A. -3
B. +3
C. +5
D. -5

Câu 48. (Thông hiểu) Số oxi hóa của Phosphorus trong ion PO4 3- là:
A. +3
B. +5
C. -3
D. -5

Câu 49. (Thông hiểu) Trong phản ứng: Cl2 + 2NaOH -> NaClO + NaCl + H2O, Clo đóng vai trò là:
A. Chỉ là chất khử
B. Chỉ là chất oxi hóa
C. Vừa là chất khử, vừa là chất oxi hóa
D. Chất môi trường

Câu 50. (Thông hiểu) Phản ứng nào sau đây KHÔNG phải là phản ứng oxi hóa – khử?
A. 2H2 + O2 -> 2H2O
B. CaCO3 -> CaO + CO2
C. Mg + 2HCl -> MgCl2 + H2
D. Cu + 2AgNO3 -> Cu(NO3)2 + 2Ag

Câu 51. (Thông hiểu) Cho quá trình: N +5 + 3e -> N +2. Đây là:
A. Sự oxi hóa
B. Sự khử
C. Sự nhường electron
D. Quá trình tạo chất khử

Câu 52. (Thông hiểu) Trong phản ứng: Fe2O3 + 3CO -> 2Fe + 3CO2, chất bị khử là:
A. CO
B. Fe2O3
C. Fe
D. CO2

Câu 53. (Thông hiểu) Để bảo vệ vỏ tàu thủy bằng thép, người ta thường gắn các tấm kẽm (Zn) vào vỏ tàu. Đây là ứng dụng nhằm hạn chế:
A. Sự oxi hóa vỏ tàu (gỉ sét)
B. Sự quang hợp của rong rêu
C. Sự hòa tan của kẽm trong nước
D. Sự gãy vỡ của vỏ tàu

Câu 54. (Thông hiểu) Vai trò của H2SO4 trong phản ứng: Cu + 2H2SO4 đặc -> CuSO4 + SO2 + 2H2O là:
A. Chỉ là chất oxi hóa
B. Chỉ là môi trường
C. Vừa là chất oxi hóa, vừa là môi trường
D. Chỉ là chất khử

Câu 55. (Thông hiểu) Số oxi hóa của Carbon trong phân tử CH4 là:
A. +4
B. -4
C. 0
D. +2

Câu 56. (Thông hiểu) Trong ion đa nguyên tử SO4 2-, số oxi hóa của Sulfur là:
A. +4
B. +6
C. -2
D. 0

Câu 57. (Thông hiểu) Phản ứng tự oxi hóa - khử là phản ứng trong đó:
A. Có hai chất khử khác nhau
B. Một nguyên tố trong một chất vừa tăng vừa giảm số oxi hóa
C. Không có sự thay đổi số oxi hóa
D. Chỉ có quá trình oxi hóa diễn ra

Câu 58. (Thông hiểu) Thứ tự cân bằng một phương trình oxi hóa – khử thường là:
A. Nước -> Kim loại -> Gốc axit
B. Kim loại -> Gốc axit -> Môi trường -> Nước
C. Môi trường -> Nước -> Kim loại
D. Gốc axit -> Kim loại -> Nước

Câu 59. (Thông hiểu) Trong phản ứng hòa tan kẽm vào dung dịch axit, bọt khí thoát ra là:
A. O2
B. Cl2
C. H2
D. CO2

Câu 60. (Thông hiểu) Khi cân bằng phản ứng bằng phương pháp ion – electron trong môi trường axit, vế thừa oxygen được xử lý bằng cách thêm:
A. OH-
B. H+ để tạo H2O
C. H2O để tạo OH-
D. Electron trực tiếp

Câu 61. (Thông hiểu) Ý nghĩa của việc xác định số oxi hóa là:
A. Để biết khối lượng phân tử
B. Để thuận tiện trong tính toán và cân bằng phản ứng
C. Để xác định độ tan của chất
D. Để biết tên gọi quốc tế

Câu 62. (Thông hiểu) Chất oxi hóa là chất có số oxi hóa:
A. Tăng sau phản ứng
B. Giảm sau phản ứng
C. Không đổi
D. Luôn bằng 0

Câu 63. (Thông hiểu) Phản ứng cháy của ethanol (C2H5OH) tạo ra sản phẩm gồm:
A. C và H2
B. CO và H2O
C. CO2 và H2O
D. C2H4 và H2O

Câu 64. (Thông hiểu) Bản chất của sự hô hấp trong cơ thể người là:
A. Quá trình trao đổi chất không màu
B. Phản ứng oxi hóa – khử cung cấp năng lượng
C. Quá trình quang hợp ngược
D. Sự gỉ sét của phổi

Câu 65. (Thông hiểu) Trong phản ứng luyện gang: Fe2O3 + 3CO -> 2Fe + 3CO2, Carbon đóng vai trò gì trong CO?
A. Số oxi hóa tăng từ +2 lên +4
B. Số oxi hóa giảm từ +2 về 0
C. Là chất oxi hóa
D. Không thay đổi số oxi hóa

Câu 66. (Thông hiểu) Quy tắc 1 về số oxi hóa áp dụng cho trường hợp nào?
A. H2O
B. NaCl
C. Cu
D. H2SO4

Câu 67. (Thông hiểu) Số oxi hóa của Aluminium trong Al2O3 được xác định dựa trên quy tắc nào?
A. Quy tắc 1
B. Quy tắc 2 (Số electron hóa trị)
C. Quy tắc 3 (Tổng bằng 0)
D. Cả B và C

Câu 68. (Thông hiểu) Vì sao sự ăn mòn kim loại gây tổn thất kinh tế?
A. Vì làm tăng khối lượng máy móc
B. Vì phá hủy cấu trúc vật liệu, làm hỏng thiết bị
C. Vì tạo ra quá nhiều năng lượng
D. Vì làm kim loại trở nên quá cứng

Câu 69. (Thông hiểu) Phương pháp thăng bằng electron dựa trên nguyên tắc bảo toàn nào?
A. Bảo toàn khối lượng
B. Bảo toàn electron (nhường = nhận)
C. Bảo toàn nguyên tử
D. Bảo toàn thể tích

Câu 70. (Thông hiểu) Trong môi trường kiềm, khi dùng phương pháp ion – electron, vế thừa oxygen được xử lý bằng cách thêm:
A. H+
B. H2O để tạo OH-
C. OH- trực tiếp
D. Chất khử mạnh

Câu 71. (Vận dụng) Xác định số oxi hóa của nguyên tử Nitrogen trong NH4NO3.
A. -3 và +5
B. -3 và +3
C. +3 và +5
D. -5 và +3

Câu 72. (Vận dụng) Cân bằng phản ứng sau: Al + O2 -> Al2O3. Hệ số của Al và O2 lần lượt là:
A. 2 và 3
B. 4 và 3
C. 1 và 1
D. 2 và 1

Câu 73. (Vận dụng) Cho phản ứng: Cu + HNO3 loãng -> Cu(NO3)2 + NO + H2O. Tỉ lệ số phân tử HNO3 đóng vai trò môi trường và đóng vai trò chất oxi hóa là:
A. 1 : 3
B. 3 : 1
C. 3 : 2
D. 2 : 3

Câu 74. (Vận dụng) Trong phản ứng: KMnO4 + HCl -> KCl + MnCl2 + Cl2 + H2O, hệ số cân bằng của HCl là:
A. 8
B. 10
C. 14
D. 16

Câu 75. (Vận dụng) Cho sơ đồ quá trình: FeS2 -> Fe 3+ + SO2. Tổng số electron nhường của một phân tử FeS2 là:
A. 11
B. 15
C. 13
D. 14

Câu 76. (Vận dụng) Cần bao nhiêu kg Chlorine để khử trùng 10 000 m3 nước sinh hoạt với định mức 5 mg/L?
A. 5 kg
B. 50 kg
C. 500 kg
D. 0,5 kg

Câu 77. (Vận dụng) Xác định chất khử trong phản ứng: 3Hg 2+ + 2Fe -> 3Hg + 2Fe 3+.
A. Hg 2+
B. Fe
C. Hg
D. Fe 3+

Câu 78. (Vận dụng) Trong phản ứng: CrI3 + Cl2 + KOH -> K2CrO4 + KIO4 + KCl + H2O, tổng hệ số các chất sản phẩm là:
A. 45
B. 64
C. 102
D. 118

Câu 79. (Vận dụng) Xác định số oxi hóa của Carbon trong ion CO3 2-.
A. +2
B. +4
C. -2
D. +6

Câu 80. (Vận dụng) Phản ứng nào sau đây thể hiện tính chất của túi chườm lạnh khi hòa tan NH4Cl vào nước?
A. Phản ứng tỏa nhiệt mạnh
B. Phản ứng thu nhiệt (làm giảm nhiệt độ môi trường)
C. Phản ứng oxi hóa – khử mạnh
D. Phản ứng tạo ra chất nổ

Câu 81. (Vận dụng) Cân bằng phản ứng: M + HNO3 -> M(NO3)n + NO + H2O. Hệ số của HNO3 là:
A. 4n
B. 2n
C. 4
D. n+2

Câu 82. (Vận dụng) Số oxi hóa của Clo trong các chất: HCl, NaClO, KClO3, KClO4 lần lượt là:
A. -1, +1, +5, +7
B. -1, +1, +3, +5
C. +1, +3, +5, +7
D. -1, +2, +5, +8

Câu 83. (Vận dụng) Cho phản ứng: Fe 3+ + Ag -> Fe 2+ + Ag +. Trong phản ứng này:
A. Fe 3+ là chất khử
B. Ag là chất oxi hóa
C. Fe 3+ bị khử thành Fe 2+
D. Ag bị khử thành Ag +

Câu 84. (Vận dụng) Một pin lithium-ion cung cấp điện năng dựa trên dòng chuyển dịch của các:
A. Nguyên tử Lithium
B. Electron và ion Lithium
C. Phân tử nước
D. Ion H+

Câu 85. (Vận dụng) Tổng số oxi hóa của các nguyên tử trong ion Cr2O7 2- là:
A. 0
B. -2
C. +6
D. +12

Câu 86. (Vận dụng) Trong phản ứng của ethanol với K2Cr2O7 (máy đo nồng độ cồn), Carbon trong ethanol bị:
A. Khử
B. Oxi hóa
C. Thủy phân
D. Nhiệt phân

Câu 87. (Vận dụng) Để luyện được 1 mol sắt từ Fe2O3 bằng khí CO, cần tối thiểu bao nhiêu mol electron nhường từ CO?
A. 2 mol
B. 3 mol
C. 6 mol
D. 1 mol

Câu 88. (Vận dụng) Trong phản ứng: Cl2 + KOH -> KCl + KClO3 + H2O (ở nhiệt độ cao), tỉ lệ số nguyên tử Clo bị oxi hóa và bị khử là:
A. 1 : 5
B. 5 : 1
C. 1 : 1
D. 3 : 1

Câu 89. (Vận dụng) Xác định số oxi hóa của Mn trong ion MnO4 -.
A. +2
B. +4
C. +6
D. +7

Câu 90. (Vận dụng) Biện pháp nào sau đây KHÔNG giúp hạn chế sự gỉ sét của sắt?
A. Sơn phủ bề mặt
B. Bôi dầu mỡ
C. Ngâm trong dung dịch muối ăn (NaCl)
D. Mạ kẽm

Câu 91. (Vận dụng cao) Cân bằng phản ứng: M + HNO3 -> M(NO3)n + NxOy + H2O. Hệ số của kim loại M là:
A. (5x - 2y)
B. (x.n)
C. (5x - 2y) / n
D. (nx - y)

Câu 92. (Vận dụng cao) Cho phản ứng: FeS + HNO3 -> Fe(NO3)3 + H2SO4 + NO + H2O. Sau khi cân bằng với hệ số tối giản, tổng hệ số của các chất tham gia phản ứng là:
A. 10
B. 13
C. 15
D. 18

Câu 93. (Vận dụng cao) Đốt cháy hoàn toàn m gam Fe trong O2 dư thu được 23,2 gam oxit sắt từ (Fe3O4). Số mol electron mà Fe đã nhường là:
A. 0,3 mol
B. 0,8 mol
C. 0,9 mol
D. 1,2 mol

Câu 94. (Vận dụng cao) Hòa tan hết 12 gam hỗn hợp gồm Mg và Fe bằng dung dịch H2SO4 đặc nóng dư thu được 10,08 lít khí SO2 (đktc, sản phẩm khử duy nhất). Phần trăm khối lượng của Mg trong hỗn hợp là:
A. 20%
B. 40%
C. 50%
D. 60%

Câu 95. (Vận dụng cao) Hỗn hợp khí X gồm O2 và Cl2 có tỉ khối so với H2 là 25,75. Để phản ứng hết với 0,2 mol Mg và 0,1 mol Al cần V lít hỗn hợp khí X (đktc). Giá trị của V là:
A. 4,48
B. 5,60
C. 6,72
D. 8,96

Câu 96. (Vận dụng cao) Trong phản ứng tự oxi hóa - khử của Cl2 với KOH ở nhiệt độ thường tạo ra NaClO và NaCl. Nếu thu được 0,1 mol NaClO thì số mol electron đã chuyển dịch trong phản ứng là:
A. 0,1 mol
B. 0,2 mol
C. 0,05 mol
D. 0,5 mol

Câu 97. (Vận dụng cao) Cho m gam Cu tác dụng hết với dung dịch HNO3 thu được 0,2 mol khí NO và 0,1 mol khí NO2. Giá trị của m là:
A. 16,0
B. 19,2
C. 22,4
D. 25,6

Câu 98. (Vận dụng cao) Cho phương trình ion thu gọn: aFe 2+ + bMnO4 - + cH + -> dFe 3+ + eMn 2+ + fH2O. Tổng hệ số (a+b+c) là:
A. 12
B. 14
C. 16
D. 18

Câu 99. (Vận dụng cao) Một máy đo nồng độ cồn ghi nhận sự biến đổi màu sắc tương ứng với 0,23 mg ethanol. Biết 1 mol ethanol nhường 12 mol electron trong phản ứng này. Số mol electron đã chuyển dịch là:
A. 5.10 -6 mol
B. 6.10 -5 mol
C. 1,2.10 -4 mol
D. 2,4.10 -3 mol

Câu 100. (Vận dụng cao) Phản ứng giữa FeS2 và HNO3 đặc nóng tạo ra Fe(NO3)3, H2SO4, NO2 và H2O. Tỉ lệ hệ số của FeS2 và NO2 trong phương trình cân bằng là:
A. 1 : 10
B. 1 : 15
C. 1 : 18
D. 2 : 15
`;

  const rawTF = `
Câu 1. Về khái niệm số oxi hóa:
a) Số oxi hóa là điện tích thực của các nguyên tử trong mọi loại hợp chất.
b) Trong đơn chất, số oxi hóa của nguyên tố luôn bằng 0.
c) Khi viết số oxi hóa, dấu được viết trước, số viết sau.
d) Trong phân tử H2O, số oxi hóa của Oxygen là -2.

Câu 2. Về quy tắc xác định số oxi hóa:
a) Trong ion đơn nguyên tử, số oxi hóa bằng điện tích ion.
b) Tổng số oxi hóa của các nguyên tử trong ion đa nguyên tử luôn bằng 0.
c) Hydrogen trong mọi hợp chất luôn có số oxi hóa là +1.
d) Kim loại nhóm IIA trong hợp chất có số oxi hóa là +2.

Câu 3. Về chất khử và chất oxi hóa:
a) Chất khử là chất nhường electron.
b) Chất oxi hóa là chất có số oxi hóa tăng sau phản ứng.
c) Chất bị khử chính là chất oxi hóa.
d) Trong phản ứng oxi hóa – khử, chất khử và chất oxi hóa có thể là cùng một chất.

Câu 4. Về quá trình oxi hóa và quá trình khử:
a) Quá trình oxi hóa là quá trình nhường electron.
b) Quá trình khử là sự nhận electron.
c) Sự oxi hóa và sự khử luôn xảy ra đồng thời.
d) Quá trình: Mn +7 + 5e -> Mn +2 là quá trình oxi hóa.

Câu 5. Về dấu hiệu và bản chất phản ứng oxi hóa – khử:
a) Phản ứng có sự thay đổi số oxi hóa là phản ứng oxi hóa – khử.
b) Bản chất là sự trao đổi proton giữa các chất.
c) Phản ứng trao đổi ion trong dung dịch luôn là phản ứng oxi hóa – khử.
d) Có sự chuyển dịch electron giữa các chất phản ứng.

Câu 6. Về cân bằng phương trình oxi hóa – khử:
a) Nguyên tắc là tổng số electron nhường bằng tổng số electron nhận.
b) Phải xác định số oxi hóa của tất cả các nguyên tử trong phương trình.
c) Hệ số cân bằng luôn là các số nguyên tối giản.
d) Trình tự cân bằng thường là kim loại, gốc axit, môi trường, nước.

Câu 7. Về phương pháp ion – electron:
a) Áp dụng cho các phản ứng xảy ra trong dung dịch.
b) Trong môi trường axit, dùng H+ và H2O để cân bằng Oxygen.
c) Trong môi trường bazơ, dùng OH- và H2O để cân bằng Oxygen.
d) Phương pháp này không cần quan tâm đến điện tích của các ion.

Câu 8. Về ứng dụng của phản ứng oxi hóa – khử:
a) Đốt cháy xăng dầu cung cấp năng lượng cho động cơ.
b) Pin điện thoại hoạt động dựa trên phản ứng oxi hóa – khử.
c) Sự hô hấp là quá trình khử hoàn toàn khí Oxygen.
d) Luyện gang, thép là ứng dụng trong ngành luyện kim.

Câu 9. Về sự ăn mòn kim loại:
a) Sự gỉ sét của đinh sắt là phản ứng oxi hóa – khử có hại.
b) Độ ẩm và oxygen là các tác nhân gây gỉ sắt.
c) Sơn, mạ là các biện pháp hạn chế sự ăn mòn.
d) Ăn mòn kim loại làm tăng giá trị sử dụng của máy móc.

Câu 10. Về máy đo nồng độ cồn:
a) Dựa trên phản ứng của ethanol với K2Cr2O7.
b) Dung dịch đổi từ màu xanh lá cây sang màu da cam.
c) Ethanol đóng vai trò là chất khử trong phản ứng này.
d) Phản ứng xảy ra trong môi trường axit.

Câu 11. Cho phản ứng: Cu + 2AgNO3 -> Cu(NO3)2 + 2Ag:
a) Cu là chất khử.
b) Ag+ là chất oxi hóa.
c) Đây là phản ứng oxi hóa – khử.
d) Số oxi hóa của Nitrogen thay đổi sau phản ứng.

Câu 12. Cho phản ứng: 2KMnO4 -> K2MnO4 + MnO2 + O2:
a) Mn vừa tăng vừa giảm số oxi hóa.
b) O trong KMnO4 đóng vai trò chất khử.
c) Đây là phản ứng nhiệt phân đồng thời là phản ứng oxi hóa – khử.
d) KMnO4 vừa là chất oxi hóa, vừa là chất khử.

Câu 13. Về số oxi hóa của Carbon:
a) Trong CH4 là -4.
b) Trong CO2 là +4.
c) Trong C đơn chất là 0.
d) Trong các hợp chất hữu cơ, Carbon luôn có số oxi hóa là -4.

Câu 14. Về phản ứng luyện gang (Fe2O3 + CO -> Fe + CO2):
a) Fe2O3 là chất oxi hóa.
b) CO là chất khử.
c) Số oxi hóa của Carbon tăng từ +2 lên +4.
d) Đây là quá trình khử oxit sắt bằng khí CO.

Câu 15. Về vai trò của Clo trong thực tiễn:
a) Clo được dùng để khử trùng nước vì có tính oxi hóa mạnh.
b) Phản ứng của Clo với nước tạo ra axit có tính tẩy màu.
c) Clo luôn đóng vai trò chất khử trong mọi phản ứng.
d) Lượng Clo dư trong nước sinh hoạt quá mức có thể gây hại.

Câu 16. (Thông hiểu) Về tính chất nhiệt hóa học:
a) Phản ứng đốt cháy ethanol tỏa ra nhiệt lượng lớn.
b) Phản ứng oxi hóa – khử luôn là phản ứng thu nhiệt.
c) Túi chườm lạnh hoạt động dựa trên quá trình thu nhiệt khi hòa tan muối.
d) Năng lượng giải phóng từ xăng dầu phục vụ cho giao thông vận tải.

Câu 17. (Thông hiểu) Về các ion đa nguyên tử:
a) Trong MnO4 -, số oxi hóa của Mn là +7.
b) Trong SO4 2-, số oxi hóa của S là +4.
c) Trong Cr2O7 2-, mỗi nguyên tử Cr có số oxi hóa là +6.
d) Trong NO3 -, số oxi hóa của N là +5.

Câu 18. (Thông hiểu) Về Chlorine trong phản ứng với NaOH:
a) Tạo ra nước Javel (NaCl, NaClO, H2O).
b) Clo vừa là chất khử, vừa là chất oxi hóa.
c) Số oxi hóa của Clo thay đổi từ 0 sang -1 và +1.
d) Đây là phản ứng trao đổi đơn thuần.

Câu 19. (Thông hiểu) Về pin Lithium-ion:
a) Lưu trữ năng lượng dưới dạng hóa năng.
b) Hoạt động dựa trên sự di chuyển của ion Li+.
c) Là một hệ thống phản ứng oxi hóa – khử thuận nghịch.
d) Chỉ sử dụng một lần, không thể sạc lại.

Câu 20. (Thông hiểu) Về quang hợp và hô hấp:
a) Quang hợp là quá trình oxi hóa nước và khử CO2.
b) Hô hấp giải phóng năng lượng cho cơ thể.
c) Hai quá trình này có bản chất là phản ứng oxi hóa – khử.
d) Cây xanh chỉ thực hiện quang hợp, không hô hấp.

Câu 21. (Thông hiểu) Về các kim loại nhóm IA, IIA và Al:
a) Luôn có số oxi hóa dương trong các hợp chất.
b) Số oxi hóa tương ứng là +1, +2, +3.
c) Trong đơn chất, số oxi hóa của chúng là 0.
d) Chúng thể hiện tính oxi hóa mạnh trong các phản ứng.

Câu 22. (Thông hiểu) Về thí nghiệm Zn + H2SO4:
a) Zn nhường electron cho ion H+.
b) Khí thoát ra là Hydrogen (H2).
c) Số oxi hóa của kẽm tăng từ 0 lên +2.
d) Dung dịch sau phản ứng có tính khử mạnh hơn.

Câu 23. (Thông hiểu) Về các cách tính số oxi hóa:
a) Có thể tính dựa vào công thức cấu tạo.
b) Tính dựa vào quy tắc điện tích phân tử bằng 0.
c) Hai cách tính này luôn cho kết quả khác nhau.
d) Dựa vào độ âm điện để giả định điện tích.

Câu 24. (Thông hiểu) Về việc sử dụng Chlorine khử trùng nước:
a) Định mức 5 mg/L nghĩa là 5 gam Clo cho 1 lít nước.
b) Clo tiêu diệt vi khuẩn nhờ tính oxi hóa mạnh.
c) Phản ứng của Clo với các tạp chất hữu cơ có thể tạo sản phẩm phụ.
d) 40 000 m3 nước cần 200 kg Clo (với định mức 5 mg/L).

Câu 25. (Vận dụng) Cho phản ứng: KMnO4 + HCl -> KCl + MnCl2 + Cl2 + H2O:
a) HCl vừa là chất khử, vừa là môi trường.
b) KMnO4 là chất oxi hóa.
c) Hệ số cân bằng của Cl2 là 5.
d) Có 10 phân tử HCl bị oxi hóa trong tổng số 16 phân tử phản ứng.

Câu 26. (Vận dụng) Cho quá trình: M -> M n+ + ne:
a) Đây là quá trình oxi hóa kim loại.
b) n có thể nhận các giá trị 1, 2, 3.
c) Kim loại M đóng vai trò là chất oxi hóa.
d) Xảy ra trong phản ứng của kim loại với axit.

Câu 27. (Vận dụng) Về phản ứng: FeS2 + O2 -> Fe2O3 + SO2:
a) Cả Fe và S trong FeS2 đều tăng số oxi hóa.
b) O2 là chất oxi hóa.
c) FeS2 là chất khử.
d) Sau khi cân bằng, hệ số của O2 là 11.

Câu 28. (Vận dụng) Trong môi trường axit (H+), cân bằng quá trình: NO3 - -> NO:
a) Cần thêm 3 electron vào vế trái.
b) Cần thêm 4 ion H+ vào vế trái.
c) Tạo ra 2 phân tử H2O ở vế phải.
d) Đây là quá trình khử ion nitrate.

Câu 29. (Vận dụng) Về phản ứng của ethanol trong máy đo nồng độ cồn:
a) Ethanol (C2H5OH) bị oxi hóa thành axit tương ứng hoặc aldehyde.
b) Cr từ +6 bị khử về +3.
c) Màu da cam của ion Cr2O7 2- biến mất.
d) Sự đổi màu giúp định lượng nồng độ cồn.

Câu 30. (Vận dụng) Cho phản ứng: Cu + NaNO3 + HCl -> CuCl2 + NO + NaCl + H2O:
a) Cu là chất khử.
b) Ion NO3 - trong môi trường H+ đóng vai trò chất oxi hóa.
c) Sản phẩm khử khí thu được là khí không màu, hóa nâu trong không khí.
d) Đây là phản ứng trao đổi ion.

Câu 31. (Vận dụng cao) Về phản ứng thăng bằng electron với hệ số ẩn:
a) M + HNO3 -> M(NO3)n + NO + H2O có hệ số của M là 3.
b) M + HNO3 -> M(NO3)n + N2O + H2O có hệ số của M là 8.
c) Các hệ số này phụ thuộc vào giá trị hóa trị n của kim loại.
d) Tổng hệ số các chất tham gia luôn là một hằng số không đổi.

Câu 32. (Vận dụng cao) Về phản ứng ion – electron trong môi trường kiềm (OH-):
a) CrI3 + Cl2 + KOH -> K2CrO4 + KIO4 + KCl + H2O.
b) Một phân tử CrI3 nhường tổng cộng 27 electron.
c) Cl2 nhận 2 electron.
d) Hệ số của KOH sau khi cân bằng là 64.

Câu 33. (Vận dụng cao) Về hiệu suất và lượng chất:
a) Để khử trùng 40 000 m3 nước cần đúng 200 kg Clo nếu hiệu suất 100%.
b) Nếu Clo bị thất thoát 10%, cần dùng 222,2 kg Clo.
c) Phản ứng của Clo trong nước là phản ứng oxi hóa – khử hoàn toàn.
d) Nồng độ Clo dư giúp ngăn chặn sự tái nhiễm khuẩn.

Câu 34. (Vận dụng cao) Về bài toán bảo toàn electron:
a) Tổng số mol electron nhường luôn bằng tổng số mol electron nhận.
b) Có thể giải bài toán mà không cần viết phương trình phản ứng đầy đủ.
c) Chỉ cần xác định trạng thái đầu và trạng thái cuối của các nguyên tố thay đổi số oxi hóa.
d) Bảo toàn electron không áp dụng được cho phản ứng tự oxi hóa - khử.

Câu 35. (Vận dụng cao) Về quá trình sinh học và năng lượng:
a) 1 mol Glucose (C6H12O6) oxi hóa hoàn toàn nhường 24 mol electron.
b) Năng lượng này được lưu trữ trong các phân tử vận chuyển năng lượng của tế bào.
c) Hô hấp là quá trình oxi hóa chậm.
d) Quang hợp tạo ra oxy giúp duy trì sự sống.

Câu 36. (Vận dụng cao) Về cấu tạo và số oxi hóa:
a) Trong phân tử hữu cơ, số oxi hóa của Carbon có thể là số lẻ.
b) Số oxi hóa trung bình của các nguyên tử Carbon có thể tính dựa trên tổng số oxi hóa chia cho số nguyên tử.
c) Cách tính dựa trên công thức cấu tạo chính xác hơn về mặt bản chất điện tích.
d) Trong CH3-CH3, mỗi Carbon có số oxi hóa là -3.

Câu 37. (Vận dụng cao) Về luyện kim hiện đại:
a) Sản xuất nhôm bằng cách điện phân nóng chảy Al2O3.
b) Đây là một quá trình oxi hóa – khử dưới tác động của dòng điện.
c) Tại cực âm, ion Al 3+ bị khử thành Al.
d) Tại cực dương, ion O 2- bị khử thành O2.

Câu 38. (Vận dụng cao) Về sự ăn mòn điện hóa:
a) Là một dạng đặc biệt của phản ứng oxi hóa – khử.
b) Cần có hai kim loại khác nhau tiếp xúc với nhau trong môi trường điện li.
c) Kim loại hoạt động mạnh hơn đóng vai trò chất khử và bị ăn mòn.
d) Gắn kẽm vào vỏ tàu là biện pháp bảo vệ bằng phương pháp điện hóa.

Câu 39. (Vận dụng cao) Về các phản ứng phức tạp:
a) Fe3O4 + HNO3 -> Fe(NO3)3 + NO + H2O.
b) Trong Fe3O4, số oxi hóa trung bình của Fe là +8/3.
c) Cứ 3 phân tử Fe3O4 nhường 1 electron.
d) Hệ số của HNO3 là 28.

Câu 40. (Vận dụng cao) Về Chlorine và môi trường:
a) Xử lý nước thải nitrate bằng bột nhôm là phản ứng oxi hóa – khử.
b) Nhôm đóng vai trò chất khử mạnh.
c) Nitrate (NO3 -) bị khử về các hợp chất có số oxi hóa thấp hơn (như N2, NH3).
d) Quá trình này giúp làm giảm ô nhiễm môi trường nước.
`;

  const rawSA = `
Câu 1. Số oxi hóa của nguyên tử trong đơn chất bằng bao nhiêu?

Câu 2. Trong các hợp chất, số oxi hóa của hydrogen thường bằng bao nhiêu?

Câu 3. Trong các hợp chất, số oxi hóa của oxygen thường bằng bao nhiêu?

Câu 4. Kim loại nhóm IA luôn có số oxi hóa bằng bao nhiêu trong hợp chất?

Câu 5. Kim loại nhóm IIA luôn có số oxi hóa bằng bao nhiêu trong hợp chất?

Câu 6. Theo quy tắc 3, trong một phân tử, tổng số oxi hóa của các nguyên tử bằng bao nhiêu?

Câu 7. Có bao nhiêu quy tắc cơ bản để xác định số oxi hóa của nguyên tố?

Câu 8. Số oxi hóa của ion đơn nguyên tử bằng bao nhiêu lần điện tích của ion đó?

Câu 9. Số oxi hóa của nguyên tử Al trong hợp chất Al2O3 là bao nhiêu?

Câu 10. Số oxi hóa của nguyên tử O trong hợp chất Al2O3 là bao nhiêu?

Câu 11. Số oxi hóa của nguyên tử Ca trong hợp chất CaF2 là bao nhiêu?

Câu 12. Số oxi hóa của nguyên tử F trong hợp chất CaF2 là bao nhiêu?

Câu 13. Số oxi hóa của nguyên tử O trong hợp chất NO là bao nhiêu?

Câu 14. Số oxi hóa của nguyên tử N trong hợp chất NO là bao nhiêu?

Câu 15. Số oxi hóa của nguyên tử H trong hợp chất CH4 là bao nhiêu?

Câu 16. Số oxi hóa của nguyên tử C trong hợp chất CH4 là bao nhiêu?

Câu 17. Số oxi hóa của nguyên tử O trong hợp chất H2SO4 là bao nhiêu?

Câu 18. Số oxi hóa của nguyên tử H trong hợp chất H2SO4 là bao nhiêu?

Câu 19. Số oxi hóa của nguyên tử O trong hợp chất Fe2O3 là bao nhiêu?

Câu 20. Số oxi hóa của nguyên tử Fe trong hợp chất Fe2O3 là bao nhiêu?

Câu 21. Số oxi hóa của nguyên tử Na trong hợp chất Na2CO3 là bao nhiêu?

Câu 22. Số oxi hóa của nguyên tử K trong hợp chất KMnO4 là bao nhiêu?

Câu 23. Số oxi hóa của nguyên tử O trong hợp chất KMnO4 là bao nhiêu?

Câu 24. Số oxi hóa của nguyên tử Al trong ion AlO2 - là bao nhiêu?

Câu 25. Số oxi hóa của nguyên tử O trong ion PO4 3- là bao nhiêu?

Câu 26. Số oxi hóa của nguyên tử O trong ion ClO3 - là bao nhiêu?

Câu 27. Số oxi hóa của nguyên tử O trong ion SO4 2- là bao nhiêu?

Câu 28. Có bao nhiêu cách chính để xác định số oxi hóa của một nguyên tử?

Câu 29. Quá trình nhường electron được gọi là sự gì? (trả lời 1 nếu là oxi hóa còn 2 là khử)

Câu 30. Quá trình nhận electron được gọi là sự gì? (trả lời 1 nếu là oxi hóa còn 2 là khử)

Câu 31. (Thông hiểu) Tổng số oxi hóa của các nguyên tử trong ion đa nguyên tử HPO4 2- bằng bao nhiêu?

Câu 32. (Thông hiểu)  Tổng số oxi hóa của các nguyên tử trong ion đa nguyên tử NO3 - bằng bao nhiêu?

Câu 33. (Thông hiểu)  Tổng số oxi hóa của các nguyên tử trong ion đa nguyên tử NH4 + bằng bao nhiêu?

Câu 34. (Thông hiểu)  Tổng số oxi hóa của các nguyên tử trong ion đa nguyên tử MnO4 - bằng bao nhiêu?

Câu 35.(Thông hiểu)   Xác định số oxi hóa của nguyên tử Cr trong hợp chất K2Cr2O7.

Câu 36. (Thông hiểu)  Xác định số oxi hóa của nguyên tử Mn trong hợp chất KMnO4.

Câu 37. (Thông hiểu)  Xác định số oxi hóa của nguyên tử Cl trong hợp chất KClO4.

Câu 38. (Thông hiểu)  Xác định số oxi hóa của nguyên tử P trong ion PO4 3-.

Câu 39. (Thông hiểu)  Xác định số oxi hóa của nguyên tử Cl trong ion ClO3 -.

Câu 40. (Thông hiểu)  Xác định số oxi hóa của nguyên tử S trong ion SO4 2-.

Câu 41. (Thông hiểu)  Cho phản ứng: 2Ag + Cl2 -> 2AgCl. Có bao nhiêu nguyên tố thay đổi số oxi hóa?

Câu 42. (Thông hiểu)  Trong phản ứng: Mg + O2 -> 2MgO, mỗi nguyên tử Mg đã nhường bao nhiêu electron?

Câu 43. (Thông hiểu)  Trong phản ứng: Zn + H2SO4 -> ZnSO4 + H2, mỗi nguyên tử Zn đã nhường bao nhiêu electron?

Câu 44. (Thông hiểu)  Hệ số tối giản của O2 khi cân bằng phản ứng: Al + O2 -> Al2O3 là bao nhiêu?

Câu 45. (Thông hiểu)  Hệ số tối giản của Al khi cân bằng phản ứng: Al + O2 -> Al2O3 là bao nhiêu?

Câu 46. (Vận dụng)  Xác định số oxi hóa của nguyên tử C trong hợp chất Na2CO3.

Câu 47.(Vận dụng)   Xác định số oxi hóa của nguyên tử S trong hợp chất H2SO4.

Câu 48. (Vận dụng)  Xác định số oxi hóa của nguyên tử N trong ion NO3 -.

Câu 49. (Vận dụng)  Xác định số oxi hóa của nguyên tử N trong nhóm NH4 của hợp chất NH4NO3.

Câu 50. (Vận dụng)  Xác định số oxi hóa của nguyên tử N trong nhóm NO3 của hợp chất NH4NO3.

Câu 51. (Vận dụng)  Tính tổng hệ số các chất (số nguyên tối giản) trong phương trình: Al + O2 -> Al2O3.

Câu 52. (Vận dụng)  Tính tổng hệ số các chất (số nguyên tối giản) trong phương trình: Cl2 + NaOH -> NaCl + NaClO + H2O.

Câu 53. (Vận dụng)  Cho phản ứng: 3Cu + 8HNO3 -> 3Cu(NO3)2 + 2NO + 4H2O. Tổng hệ số của các chất tham gia là bao nhiêu?

Câu 54.(Vận dụng)   Cho phản ứng: 3Cu + 8HNO3 -> 3Cu(NO3)2 + 2NO + 4H2O. Tổng hệ số của các chất sản phẩm là bao nhiêu?

Câu 55. (Vận dụng)  Để khử trùng 40000 m3 nước với định mức 5 mg/L, cần bao nhiêu kg Chlorine?

Câu 56. (Vận dụng cao)  Tính tổng hệ số các chất (số nguyên tối giản) trong phương trình: KMnO4 + HCl -> KCl + MnCl2 + Cl2 + H2O.

Câu 57. (Vận dụng cao)  Trong phản ứng: FeS2 + H2SO4 đặc -> Fe2(SO4)3 + SO2 + H2O, một phân tử FeS2 đã nhường bao nhiêu electron?

Câu 58. (Vận dụng cao)  Trong phản ứng tự oxi hóa - khử: 3Cl2 + 6KOH -> 5KCl + KClO3 + 3H2O, tỉ lệ giữa số nguyên tử Cl bị oxi hóa và số nguyên tử Cl bị khử là bao nhiêu (viết dưới dạng số thập phân)?

Câu 59. (Vận dụng cao)  Trong phân tử KAl(SO4)2, xác định số oxi hóa của nguyên tử S.

Câu 60. (Vận dụng cao)  Trong phản ứng đốt cháy ethanol: C2H5OH + 3O2 -> 2CO2 + 3H2O, tổng số electron mà một phân tử ethanol đã nhường là bao nhiêu?
`;

  // Đáp án trích xuất chính xác từ phần IV
  const ansMCQList =
    "B,C,C,A,B,C,C,B,B,B,A,B,C,C,0,0,B,C,C,B,B,B,C,B,B,A,C,B,B,0,B,A,B,C,B,B,B,B,B,B,B,D,B,B,A,C,D,B,C,B,B,B,B,A,B,B,B,B,B,B,C,B,B,A,A,C,B,C,B,D,B,B,B,A,B,C,D,B,B,B,B,B,B,A,A,C,B,D,C,C,D,B,B,B,A,B,C,B,B".split(
      ",",
    );
  const ansTFList = [
    "SĐĐĐ",
    "ĐSSĐ",
    "ĐSĐĐ",
    "ĐĐĐS",
    "ĐSSĐ",
    "ĐSSĐ",
    "ĐĐĐS",
    "ĐĐSĐ",
    "ĐĐĐS",
    "ĐSĐĐ",
    "ĐĐĐS",
    "SĐĐĐ",
    "ĐĐĐS",
    "ĐĐĐĐ",
    "ĐĐSĐ",
    "ĐSĐĐ",
    "ĐSĐĐ",
    "ĐĐĐS",
    "ĐĐĐS",
    "ĐĐĐS",
    "ĐĐĐS",
    "ĐĐĐS",
    "ĐĐSĐ",
    "SĐĐĐ",
    "ĐĐĐĐ",
    "ĐĐSĐ",
    "ĐĐĐĐ",
    "ĐSĐĐ",
    "ĐĐSĐ",
    "ĐĐĐS",
    "ĐĐĐS",
    "ĐĐĐS",
    "ĐĐSĐ",
    "ĐĐĐS",
    "ĐĐĐĐ",
    "ĐĐĐĐ",
    "ĐĐĐS",
    "SĐĐĐ",
    "ĐĐĐS",
    "ĐĐĐĐ",
  ];
  const ansSAList =
    "0|1|-2|1|2|0|4|1|3|-2|2|-1|-2|2|1|-4|-2|1|-2|3|1|1|-2|3|-2|-2|-2|2|1|2|-2|-1|1|-1|6|7|7|5|5|6|2|2|2|3|4|4|6|5|-3|5|9|5|11|9|200|35|11|0.2|6|12".split(
      "|",
    );

  // Hàm phân loại Level (dựa vào từ khóa hoặc theo chỉ số như yêu cầu)
  const getLevel = (text, idx, type) => {
    if (text.includes("(Thông hiểu)")) return "thonghieu";
    if (text.includes("(Vận dụng cao)")) return "vandungcao";
    if (text.includes("(Vận dụng)")) return "vandung";
    if (type === "mcq")
      return idx < 40
        ? "nhanbiet"
        : idx < 70
          ? "thonghieu"
          : idx < 90
            ? "vandung"
            : "vandungcao";
    if (type === "tf")
      return idx < 20
        ? "nhanbiet"
        : idx < 30
          ? "thonghieu"
          : idx < 35
            ? "vandung"
            : "vandungcao";
    if (type === "sa")
      return idx < 30
        ? "nhanbiet"
        : idx < 45
          ? "thonghieu"
          : idx < 55
            ? "vandung"
            : "vandungcao";
    return "nhanbiet";
  };

  const clean = (t) =>
    t.replace(/\(Thông hiểu\)|\(Vận dụng cao\)|\(Vận dụng\)/g, "").trim();

  // Parser MCQ
  let multipleChoice = [];
  rawMCQ
    .split(/Câu \d+\./)
    .filter((b) => b.trim())
    .forEach((block, idx) => {
      let lines = block
        .trim()
        .split("\n")
        .map((l) => l.trim())
        .filter((l) => l);
      let qText = lines[0];
      let options = lines.slice(1, 5).map((l) => l.substring(3).trim());
      let correctIdx = ["A", "B", "C", "D"].indexOf(ansMCQList[idx]);
      multipleChoice.push({
        id: `mcq_${idx + 1}`,
        q: clean(qText),
        opts: options,
        ansText: options[correctIdx], // Lưu chuỗi chuẩn xác thay vì index vì sẽ shuffle array opts
        lvl: getLevel(qText, idx, "mcq"),
      });
    });

  // Parser TF
  let trueFalse = [];
  rawTF
    .split(/Câu \d+\./)
    .filter((b) => b.trim())
    .forEach((block, idx) => {
      let lines = block
        .trim()
        .split("\n")
        .map((l) => l.trim())
        .filter((l) => l);
      let qText = lines[0];
      let stmts = lines.slice(1, 5).map((l) => l.substring(2).trim());
      let ans = ansTFList[idx];
      trueFalse.push({
        id: `tf_${idx + 1}`,
        q: clean(qText),
        stmts: stmts.map((s, i) => ({ text: s, ans: ans[i] })),
        lvl: getLevel(qText, idx, "tf"),
      });
    });

  // Parser SA
  let shortAnswer = [];
  rawSA
    .split(/Câu \d+\./)
    .filter((b) => b.trim())
    .forEach((block, idx) => {
      let qText = block.trim().replace(/\n/g, " ");
      shortAnswer.push({
        id: `sa_${idx + 1}`,
        q: clean(qText),
        ans: ansSAList[idx],
        lvl: getLevel(qText, idx, "sa"),
      });
    });

  return { multipleChoice, trueFalse, shortAnswer };
})();

/**
 * BƯỚC 2: CORE LOGIC & STATE
 */
let selectedExam = { p1: [], p2: [], p3: [] };
let userAnswers = {}; // Lưu đáp án người dùng
let isSubmitted = false;

// Hàm shuffle mảng (Fisher-Yates)
function shuffle(array) {
  let arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Lấy ngẫu nhiên câu hỏi theo cấu trúc Level yêu cầu
function getQuestionsByRatio(sourceArray, total, ratios) {
  let result = [];
  const counts = {
    nb: Math.round(total * ratios.nb),
    th: Math.round(total * ratios.th),
    vd: Math.round(total * ratios.vd),
    vdc: Math.round(total * ratios.vdc),
  };

  // Đảm bảo tổng số lượng khớp tuyệt đối bằng cách điều chỉnh phần dư
  let sum = counts.nb + counts.th + counts.vd + counts.vdc;
  while (sum < total) {
    counts.nb++;
    sum++;
  }
  while (sum > total) {
    counts.nb--;
    sum--;
  }

  const pick = (level, count) => {
    let pool = sourceArray.filter((q) => q.lvl === level);
    pool = shuffle(pool);
    return pool.slice(0, count);
  };

  result = result.concat(pick("nhanbiet", counts.nb));
  result = result.concat(pick("thonghieu", counts.th));
  result = result.concat(pick("vandung", counts.vd));
  result = result.concat(pick("vandungcao", counts.vdc));

  return shuffle(result); // Shuffle lần cuối để không theo thứ tự độ khó
}

// Khởi tạo bài thi mới
function initExam() {
  // Tỉ lệ: 50%, 30%, 15%, 5%
  const ratio = { nb: 0.5, th: 0.3, vd: 0.15, vdc: 0.05 };

  selectedExam.p1 = getQuestionsByRatio(data.multipleChoice, 16, ratio);
  selectedExam.p2 = getQuestionsByRatio(data.trueFalse, 4, ratio);
  selectedExam.p3 = getQuestionsByRatio(data.shortAnswer, 4, ratio);

  renderUI();
}

/**
 * BƯỚC 3: RENDER GIAO DIỆN
 */
function renderUI() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";

  let globalQIndex = 1;
  let navHTML = { p1: "", p2: "", p3: "" };

  // --- RENDER PHẦN 1 ---
  container.innerHTML += `<div class="part-header">Phần 1: Trắc Nghiệm Nhiều Phương Án (16 câu)</div>`;
  selectedExam.p1.forEach((q, idx) => {
    let opts = shuffle(q.opts); // Random thứ tự A B C D
    let labels = ["A", "B", "C", "D"];

    let html = `
        <div class="question-card" id="q-block-${globalQIndex}">
            <div class="q-title">Câu ${globalQIndex}: ${q.q} <span class="level-badge">${q.lvl}</span></div>
            <div class="options-list">`;

    opts.forEach((opt, i) => {
      html += `
                <label class="option-item" id="lbl-${globalQIndex}-${i}">
                    <input type="radio" name="p1_${globalQIndex}" value="${opt}" onchange="markAnswered(${globalQIndex})">
                    <b>${labels[i]}.</b> ${opt}
                </label>`;
    });

    html += `</div>
            <div class="explanation" id="exp-${globalQIndex}">Đáp án đúng: <b>${q.ansText}</b></div>
        </div>`;
    container.innerHTML += html;
    navHTML.p1 += `<div class="nav-btn" id="nav-${globalQIndex}" onclick="scrollToQ(${globalQIndex})">${globalQIndex}</div>`;

    // Lưu data tham chiếu ngầm để chấm điểm
    q.renderId = globalQIndex;
    globalQIndex++;
  });

  // --- RENDER PHẦN 2 ---
  container.innerHTML += `<div class="part-header">Phần 2: Trắc Nghiệm Đúng / Sai (4 câu)</div>`;
  selectedExam.p2.forEach((q, idx) => {
    let html = `
        <div class="question-card" id="q-block-${globalQIndex}">
            <div class="q-title">Câu ${globalQIndex}: ${q.q} <span class="level-badge">${q.lvl}</span></div>
            <table class="tf-table">
                <tr><th>Phát biểu</th><th>Đúng</th><th>Sai</th></tr>`;

    q.stmts.forEach((stmt, i) => {
      let label = String.fromCharCode(97 + i); // a, b, c, d
      html += `
                <tr>
                    <td id="tf-lbl-${globalQIndex}-${i}"><b>${label})</b> ${stmt.text}</td>
                    <td><input type="radio" class="tf-radio" name="p2_${globalQIndex}_${i}" value="Đ" onchange="markAnswered(${globalQIndex})"></td>
                    <td><input type="radio" class="tf-radio" name="p2_${globalQIndex}_${i}" value="S" onchange="markAnswered(${globalQIndex})"></td>
                </tr>`;
    });

    html += `</table>
            <div class="explanation" id="exp-${globalQIndex}">Đáp án đúng: ${q.stmts.map((s) => s.ans).join(" - ")}</div>
        </div>`;
    container.innerHTML += html;
    navHTML.p2 += `<div class="nav-btn" id="nav-${globalQIndex}" onclick="scrollToQ(${globalQIndex})">${globalQIndex}</div>`;

    q.renderId = globalQIndex;
    globalQIndex++;
  });

  // --- RENDER PHẦN 3 ---
  container.innerHTML += `<div class="part-header">Phần 3: Trắc Nghiệm Trả Lời Ngắn (4 câu)</div>`;
  selectedExam.p3.forEach((q, idx) => {
    let html = `
        <div class="question-card" id="q-block-${globalQIndex}">
            <div class="q-title">Câu ${globalQIndex}: ${q.q} <span class="level-badge">${q.lvl}</span></div>
            <input type="text" class="sa-input" id="sa-input-${globalQIndex}" placeholder="Nhập câu trả lời của bạn..." oninput="markAnswered(${globalQIndex})">
            <div class="explanation" id="exp-${globalQIndex}">Đáp án đúng: <b>${q.ans}</b></div>
        </div>`;
    container.innerHTML += html;
    navHTML.p3 += `<div class="nav-btn" id="nav-${globalQIndex}" onclick="scrollToQ(${globalQIndex})">${globalQIndex}</div>`;

    q.renderId = globalQIndex;
    globalQIndex++;
  });

  // Gắn Nav
  document.getElementById("nav-p1").innerHTML = navHTML.p1;
  document.getElementById("nav-p2").innerHTML = navHTML.p2;
  document.getElementById("nav-p3").innerHTML = navHTML.p3;

  setupScrollSpy();
}

/**
 * BƯỚC 4: TƯƠNG TÁC UX/UI
 */
function scrollToQ(id) {
  document
    .getElementById(`q-block-${id}`)
    .scrollIntoView({ behavior: "smooth", block: "center" });
}

function markAnswered(id) {
  if (isSubmitted) return;

  // Kiểm tra xem đã điền đủ chưa (Đặc biệt cho P2 cần chọn đủ 4 ý)
  let isFullyAnswered = true;

  if (id <= 16) {
    // P1
    let checked = document.querySelector(`input[name="p1_${id}"]:checked`);
    if (!checked) isFullyAnswered = false;
  } else if (id <= 20) {
    // P2
    for (let i = 0; i < 4; i++) {
      if (!document.querySelector(`input[name="p2_${id}_${i}"]:checked`)) {
        isFullyAnswered = false;
        break;
      }
    }
  } else {
    // P3
    let val = document.getElementById(`sa-input-${id}`).value.trim();
    if (val === "") isFullyAnswered = false;
  }

  const navBtn = document.getElementById(`nav-${id}`);
  if (isFullyAnswered) {
    navBtn.classList.add("answered");
  } else {
    navBtn.classList.remove("answered");
  }
}

// Theo dõi cuộn trang để highlight nút Navigation (Vàng)
function setupScrollSpy() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Xóa active cũ
          document
            .querySelectorAll(".nav-btn")
            .forEach((btn) => btn.classList.remove("active"));
          // Thêm active mới
          let id = entry.target.id.split("-")[2];
          document.getElementById(`nav-${id}`).classList.add("active");
        }
      });
    },
    { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
  );

  document
    .querySelectorAll(".question-card")
    .forEach((card) => observer.observe(card));
}

/**
 * BƯỚC 5: CHẤM ĐIỂM (Logic lõi khắt khe)
 */
// Hàm so sánh chuỗi số (chấp nhận sai số +-0.01)
function compareSA(userAns, trueAns) {
  userAns = userAns.replace(/,/g, ".").trim().toLowerCase();
  trueAns = trueAns.replace(/,/g, ".").trim().toLowerCase();

  let uNum = parseFloat(userAns);
  let tNum = parseFloat(trueAns);

  if (!isNaN(uNum) && !isNaN(tNum)) {
    return Math.abs(uNum - tNum) <= 0.01;
  }
  return userAns === trueAns;
}

function submitQuiz() {
  if (isSubmitted) return;
  if (!confirm("Bạn có chắc chắn muốn nộp bài?")) return;

  isSubmitted = true;
  document.getElementById("btn-submit").style.display = "none";

  let scoreP1 = 0;
  let scoreP2 = 0;
  let scoreP3 = 0;

  // Chấm P1
  selectedExam.p1.forEach((q) => {
    let id = q.renderId;
    let checked = document.querySelector(`input[name="p1_${id}"]:checked`);
    let isCorrect = false;

    if (checked && checked.value === q.ansText) {
      scoreP1 += 0.25;
      isCorrect = true;
      checked.parentElement.classList.add("correct-ans");
    } else if (checked) {
      checked.parentElement.classList.add("wrong-ans");
    }

    document.getElementById(`nav-${id}`).className =
      `nav-btn ${isCorrect ? "answered" : "wrong-nav"}`;
    document.getElementById(`exp-${id}`).style.display = "block";
  });

  // Chấm P2
  selectedExam.p2.forEach((q) => {
    let id = q.renderId;
    let correctCount = 0;

    q.stmts.forEach((stmt, i) => {
      let checked = document.querySelector(
        `input[name="p2_${id}_${i}"]:checked`,
      );
      let tdObj = document.getElementById(`tf-lbl-${id}-${i}`);

      if (checked && checked.value === stmt.ans) {
        correctCount++;
        tdObj.classList.add("correct-ans");
      } else if (checked) {
        tdObj.classList.add("wrong-ans");
      } else {
        tdObj.classList.add("wrong-ans"); // Không tick coi như sai
      }
    });

    if (correctCount === 1) scoreP2 += 0.1;
    else if (correctCount === 2) scoreP2 += 0.25;
    else if (correctCount === 3) scoreP2 += 0.5;
    else if (correctCount === 4) scoreP2 += 1.0;

    document.getElementById(`nav-${id}`).className =
      `nav-btn ${correctCount === 4 ? "answered" : "wrong-nav"}`;
    document.getElementById(`exp-${id}`).style.display = "block";
  });

  // Chấm P3
  selectedExam.p3.forEach((q) => {
    let id = q.renderId;
    let inputObj = document.getElementById(`sa-input-${id}`);
    let userVal = inputObj.value;
    let isCorrect = compareSA(userVal, q.ans);

    if (isCorrect) {
      scoreP3 += 0.5;
      inputObj.classList.add("correct-ans");
    } else {
      inputObj.classList.add("wrong-ans");
    }

    document.getElementById(`nav-${id}`).className =
      `nav-btn ${isCorrect ? "answered" : "wrong-nav"}`;
    document.getElementById(`exp-${id}`).style.display = "block";
  });

  // Khóa form
  document.querySelectorAll("input").forEach((i) => (i.disabled = true));

  // Hiển thị điểm
  let total = scoreP1 + scoreP2 + scoreP3;
  document.getElementById("score-p1").innerText = scoreP1.toFixed(2);
  document.getElementById("score-p2").innerText = scoreP2.toFixed(2);
  document.getElementById("score-p3").innerText = scoreP3.toFixed(2);
  document.getElementById("total-score").innerText = `${total.toFixed(2)} / 10`;
  document.getElementById("result-panel").style.display = "block";

  // Cuộn lên đầu xem kết quả
  document.querySelector(".sidebar").scrollTo({ top: 0, behavior: "smooth" });
}

// Chạy ngay khi mở file
window.onload = initExam;
function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".overlay");

  sidebar.classList.toggle("active");
  overlay.classList.toggle("show");
}
