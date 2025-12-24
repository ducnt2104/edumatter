const apiKey = "AIzaSyDU3PCpYHtDl2ZPbkCkgluAcBM2RH1Dj_8";
const chatWindow = document.getElementById("chat-window");
const chatForm = document.getElementById("chat-form");
const userInput = document.getElementById("user-input");
const imageInput = document.getElementById("image-input");
const imagePreview = document.getElementById("image-preview");
const previewImg = document.getElementById("preview-img");

let currentImageData = null;

// --- System Prompt with the knowledge base you provided ---
const SYSTEM_PROMPT = `Bạn là "EduMatter AI", chuyên gia tư vấn giáo dục chuyên sâu về Hóa học tại Việt Nam. 
    Nhiệm vụ: Giải đáp kiến thức hóa học, giải bài tập, cân bằng phản ứng.
    Tài liệu tham khảo (RAG): Bạn nắm rõ kiến thức hóa học lớp 7, 8, 9 theo chương trình GDPT mới (nguyên tử, bảng tuần hoàn, acid, base, pH, kim loại, hợp kim...).
    
    Quy tắc quan trọng:
    1. Chỉ trả lời các nội dung liên quan đến Hóa học. Nếu câu hỏi không liên quan, hãy từ chối khéo léo: "Tôi là trợ lý chuyên sâu về Hóa học của EduMatter, vui lòng đặt câu hỏi liên quan đến lĩnh vực này."
    2. Sử dụng LaTeX cho công thức ($...$ cho inline, $$...$$ cho block). Ví dụ: $H_2SO_4$.
    3. Trả lời bằng tiếng Việt, thân thiện, sư phạm.
    4. Nếu người dùng hỏi về EduMatter: "EduMatter là nền tảng giáo dục Hóa học hàng đầu (https://edumatter.netlify.app/)."
	
	Hãy luôn tuân thủ các quy tắc trên để mang lại trải nghiệm tốt nhất cho người dùng.
Nhiệm vụ:
- Giải thích, phân tích và giải bài tập Hóa học CHÍNH XÁC TUYỆT ĐỐI.
- Phạm vi: Hóa THCS, THPT, nâng cao, học sinh giỏi, thi tuyển, Olympic cơ bản.
- Trình bày logic, ngắn gọn, không lan man, không kể chuyện.

Quy tắc bắt buộc:
1. Mọi phản ứng hóa học phải viết ĐÚNG – ĐỦ – CÂN BẰNG.
2. Khi giải bài tập:
   - Ghi rõ dữ kiện
   - Lập phương trình
   - Tính toán từng bước
   - Kết luận rõ ràng
3. Nếu có nhiều cách giải → chọn cách NGẮN NHẤT, THÔNG MINH NHẤT.
4. Không bịa kiến thức, không đoán mò. Không chắc thì nói “chưa đủ dữ kiện”.
5. Ưu tiên cách tư duy bản chất, mẹo nhanh, bảo toàn, suy luận hóa học.

Cách trả lời:
- Dùng gạch đầu dòng, bảng, công thức khi cần.
- Ngôn ngữ rõ ràng, đúng thuật ngữ hóa học.
- Mặc định trình độ: học sinh khá–giỏi THPT (có thể nâng/hạ khi yêu cầu).

Luôn sẵn sàng giải đáp mọi câu hỏi hóa học.
Bắt đầu ngay khi tôi gửi câu hỏi.

	NỘI DUNG KIẾN THỨC CẦN NHỚ:
	Tổng hợp toàn bộ kiến thức hóa học từ lớp 7 đến lớp 12
	Lớp 7
CHỦ ĐỀ 1: NGUYÊN TỬ – NGUYÊN TỐ HÓA HỌC – BẢNG TUẦN HOÀN
I. NGUYÊN TỬ
1. Mô hình nguyên tử Rutherford
a. Khái niệm nguyên tử
	Nguyên tử là hạt nhỏ nhất của một nguyên tố hóa học, không bị chia nhỏ hơn trong phản ứng hóa học, và giữ nguyên tính chất của nguyên tố đó.
b. Mô hình Rutherford
Năm 1911, Ernest Rutherford đề xuất mô hình nguyên tử gồm:
	Hạt nhân mang điện dương, nằm ở tâm nguyên tử.
	Electron mang điện âm, chuyển động rất nhanh xung quanh hạt nhân tạo thành vỏ nguyên tử.
	Nguyên tử trung hòa điện → số proton = số electron.
c. Hình dung đơn giản
	Hạt nhân nhỏ như “quả bóng bàn ở sân vận động”.
	Electron chuyển động xung quanh như “những chú ong bay quanh tổ”.
d. Thành phần hạt nhân
	Proton (p): mang điện +1.
	Neutron (n): không mang điện.
	Số khối:
A=p+n
Ví dụ
	Nguyên tử Oxi (O) có:
p = 8, e = 8.
Nếu số khối A = 16 → n = 16 – 8 = 8.
2. Khối lượng nguyên tử
a. Khối lượng nguyên tử là gì?
	Là khối lượng tương đối của nguyên tử so với 1/12 khối lượng nguyên tử Cacbon-12 hay 1 amu.
	Kí hiệu: Aᵣ (relative atomic mass).
b. Đặc điểm
	Không có đơn vị vì là đại lượng tương đối.
	Gần bằng tổng số proton và neutron.
c. Ví dụ
	Cacbon: Aᵣ = 12
	Oxi: Aᵣ = 16
	Natri: Aᵣ = 23
Bài tập luyện tập
	Một nguyên tử X có 11 proton và số khối 23. Tính neutron?
	Nguyên tử Y có p = 7, n = 7. Khối lượng nguyên tử ~ bao nhiêu?
	Hãy xác định proton, neutron của Mg có Aᵣ = 24 và số hiệu nguyên tử = 12.
II. NGUYÊN TỐ HÓA HỌC
1. Nguyên tố hóa học
a. Khái niệm
	Nguyên tố hóa học là tập hợp những nguyên tử có cùng số proton trong hạt nhân.
→ Số proton quyết định nguyên tố.
b. Ví dụ
	Tất cả nguyên tử có 8 proton → đều là nguyên tố Oxi.
	1 proton → Hidro.
	6 proton → Cacbon.
Em có biết?
	Có hơn 118 nguyên tố đã được biết đến.
	Khoảng 90 nguyên tố có tự nhiên, còn lại do con người điều chế.
2. Kí hiệu hóa học
a. Khái niệm
	Mỗi nguyên tố được biểu diễn bằng 1–2 chữ cái, trong đó chữ đầu viết hoa, chữ sau viết thường.
Ví dụ
Nguyên tố	Kí hiệu
Hidro	H
Oxi	O
Cacbon	C
Natri	Na
Sắt	Fe
Đồng	Cu
b. Ghi số lượng nguyên tử
	Ví dụ:
	O₂: 2 nguyên tử oxi
	H₂O: 2 H và 1 O
	CO₂: 1 C và 2 O
Bài tập luyện tập
	Ghi các kí hiệu hóa học của: Lưu huỳnh, Clo, Canxi, Nhôm, Nito.
	Cho công thức CaCO₃. Hãy xác định số nguyên tử từng nguyên tố.
	Nguyên tố X có kí hiệu là Al. Hãy nêu số lượng nguyên tử trong Al₂O₃.
III. BẢNG TUẦN HOÀN HÓA HỌC
1. Sơ lược về bảng tuần hoàn
a. Bảng tuần hoàn là gì?
	Bảng sắp xếp các nguyên tố hóa học theo tăng dần số proton và theo chu kì – nhóm.
b. Tác dụng
	Giúp dự đoán:
	Tính chất nguyên tố
	Sự biến đổi tính chất
	Cấu tạo nguyên tử
Em có biết?
	Dmitri Mendeleev là người đầu tiên xây dựng bảng tuần hoàn (1869).
	Ông dự đoán chính xác nhiều nguyên tố chưa tìm thấy thời bấy giờ!
2. Cấu tạo bảng tuần hoàn
a. Thành phần
	Chu kì: hàng ngang (7 chu kì).
	Nhóm: cột dọc (18 nhóm).
	Các nguyên tố trong cùng nhóm có:
	Cấu hình electron lớp ngoài cùng giống nhau
	Tính chất hóa học gần giống nhau
b. Số hiệu nguyên tử
	Số proton → xác định vị trí nguyên tố trong bảng.
3. Kim loại
a. Đặc điểm
	Dẫn điện, dẫn nhiệt tốt
	Dễ uốn, dát mỏng
	Thường có ánh kim
	Hóa học: dễ nhường electron, tạo ion dương (cation)
b. Ví dụ
	Na, K, Ca, Mg, Fe, Cu, Al,…
Ví dụ thực tế
	Nhôm làm vỏ lon, máy bay
	Đồng làm dây điện
	Sắt làm khung nhà, cầu,…
4. Phi kim
a. Đặc điểm
	Không dẫn điện, không dẫn nhiệt
	Thường giòn, không có ánh kim
	Dễ nhận electron
b. Ví dụ
	O, N, C, S, Cl, P,…
Ứng dụng
	O₂ cho hô hấp
	Clo dùng khử trùng nước
	Cacbon tạo than chì, kim cương, than đá
5. Khí hiếm
a. Gồm những nguyên tố
	Nhóm 18: He, Ne, Ar, Kr, Xe, Rn.
b. Đặc điểm
	Hầu như không tham gia phản ứng hóa học
	Tồn tại dạng nguyên tử riêng lẻ
	Tính trơ – bền vững
c. Ứng dụng
	He dùng trong khinh khí cầu
	Ne dùng làm đèn Neon
	Ar dùng trong đèn huỳnh quang
PHẦN MỞ RỘNG – TÌM HIỂU THÊM
1. Đồng vị
	Những nguyên tử cùng số proton, khác số neutron.
Ví dụ: C-12, C-13, C-14.
2. Ion
	Nguyên tử nhường hoặc nhận electron → mang điện.
	Na → Na⁺
	Cl → Cl⁻
3. Hợp chất
	Chất tạo từ 2 hay nhiều nguyên tố kết hợp theo tỉ lệ xác định.
TỔNG HỢP BÀI TẬP THEO CHỦ ĐỀ
I. Nguyên tử
	Cho nguyên tử X có số khối 40 và neutron 20. Hãy tính proton?
	Viết cấu tạo nguyên tử Na (p = 11).
II. Nguyên tố – kí hiệu hóa học
	Viết kí hiệu cho: Nito, Silic, Kẽm, Helium.
	Phân tích công thức Mg(OH)₂.
III. Bảng tuần hoàn
	O thuộc chu kì nào? nhóm nào?
	Hãy liệt kê 3 kim loại – 3 phi kim – 3 khí hiếm.
CHỦ ĐỀ 2: PHÂN TỬ
I. PHÂN TỬ – ĐƠN CHẤT – HỢP CHẤT
1. Phân tử
a. Khái niệm
	Phân tử là hạt nhỏ nhất của một chất giữ nguyên tính chất hóa học của chất đó.
	Phân tử được tạo bởi một hay nhiều nguyên tử liên kết với nhau.
b. Đặc điểm
	Các nguyên tử trong phân tử được ghép lại bằng liên kết hóa học.
	Phân tử có khối lượng phân tử (M) = tổng khối lượng nguyên tử của các nguyên tố tạo nên nó.
Ví dụ
	Phân tử nước: H₂O
	Phân tử oxi: O₂
	Phân tử cacbon đioxit: CO₂
	Phân tử amoniac: NH₃
Em có biết?
	1 giọt nước chứa khoảng 10²¹ phân tử nước – con số khổng lồ vượt xa số hạt cát trên Trái Đất!
2. Đơn chất
a. Khái niệm
	Đơn chất là chất được tạo bởi 1 nguyên tố hóa học.
b. Ví dụ
	O₂ (đơn chất oxi)
	N₂ (đơn chất nitơ)
	Fe (sắt)
	Cu (đồng)
	S₈ (lưu huỳnh)
3. Hợp chất
a. Khái niệm
	Hợp chất là chất được tạo bởi hai hay nhiều nguyên tố hóa học liên kết với nhau theo tỉ lệ xác định.
b. Ví dụ
	H₂O (2 H + 1 O)
	CO₂ (1 C + 2 O)
	NaCl (1 Na + 1 Cl)
	CaCO₃ (Ca – C – O)
Bài tập luyện tập
	Hãy phân loại các chất sau thành đơn chất và hợp chất:
O₂, Fe, CO₂, Cu, NH₃, Cl₂.
	Phân tử H₂SO₄ có bao nhiêu nguyên tử? Bao nhiêu nguyên tố?
	So sánh phân tử đơn chất O₂ và phân tử hợp chất H₂O.
II. LIÊN KẾT HÓA HỌC
1. Vỏ nguyên tử khí hiếm
a. Lớp electron bền vững
	Các nguyên tử khí hiếm (He, Ne, Ar,…) có:
	Lớp electron ngoài cùng đã bão hòa (2 hoặc 8 e)
	→ rất bền vững, khó phản ứng.
b. Quy tắc bền vững
	Nguyên tử có xu hướng:
	Nhường e (kim loại) hoặc
	Nhận e (phi kim) hoặc
	Chung e (phi kim với phi kim)
→ để đạt cấu hình giống khí hiếm.
2. Liên kết ion
a. Khái niệm
Liên kết ion là liên kết được hình thành do sự hút tĩnh điện giữa ion dương và ion âm.
b. Cách hình thành
	Kim loại nhường e → ion dương (cation)
	Phi kim nhận e → ion âm (anion)
c. Ví dụ
	Na + Cl → Na⁺ + Cl⁻ → NaCl
	Ca + O → Ca²⁺ + O²⁻ → CaO
3. Liên kết cộng hóa trị (liên kết + hoá trị)
a. Khái niệm
Liên kết cộng hóa trị là loại liên kết được hình thành do sự dùng chung một hay nhiều cặp electron giữa hai nguyên tử phi kim.
b. Ví dụ
	H₂: 2 H dùng chung 1 cặp electron
	O₂: 2 O dùng chung 2 cặp electron
	H₂O: O dùng chung electron với 2 H
	CO₂: C dùng chung với hai nguyên tử O
4. Chất ion – chất cộng hóa trị
a. Chất ion (chất có liên kết ion)
	Gồm các ion dương và ion âm liên kết mạng tinh thể.
Ví dụ: NaCl, KCl, CaO, MgCl₂.
b. Chất cộng hóa trị
	Các nguyên tử phi kim liên kết với nhau bằng liên kết cộng hóa trị.
Ví dụ: H₂O, CO₂, NH₃, O₂.
5. Một số tính chất của chất ion và chất cộng hóa trị
a. Chất ion
	Trạng thái: rắn tinh thể
	Nóng chảy cao, dễ tan trong nước
	Dẫn điện khi nóng chảy hoặc tan trong nước
→ Vì khi tan, các ion tự do → dẫn điện.
b. Chất cộng hóa trị
	Trạng thái: có thể rắn, lỏng, khí
	Ít tan trong nước
	Không dẫn điện
→ Vì không có ion tự do.
Bài tập luyện tập
	Hoàn thành quá trình tạo NaCl từ Na và Cl.
	Hãy cho biết H₂O thuộc loại chất gì? Vì sao?
	Trong các chất: CO₂, KCl, CaO, CH₄, O₂ – chất nào là chất ion?
III. HÓA TRỊ VÀ CÔNG THỨC HÓA HỌC
1. Hóa trị
a. Khái niệm
	Hóa trị biểu thị khả năng liên kết của nguyên tử nguyên tố này với nguyên tử nguyên tố khác.
b. Quy ước
	Hóa trị của H = I
	Hóa trị của O = II
→ Các nguyên tố khác so sánh theo H và O.
Ví dụ
	NaCl ⇒ Na hoá trị I, Cl hoá trị I
	H₂O ⇒ O hoá trị II
	CO₂ ⇒ C hoá trị IV (vì gắn với 2 O hóa trị II)
2. Quy tắc hóa trị
Quy tắc:
Tổng hoˊa trị của nguyeˆn toˆˊ naˋy=Tổng hoˊa trị của nguyeˆn toˆˊ kia\text{Tổng hóa trị của nguyên tố này} = \text{Tổng hóa trị của nguyên tố kia}Tổng hoˊa trị của nguyeˆn toˆˊ naˋy=Tổng hoˊa trị của nguyeˆn toˆˊ kia 
Hoặc dùng dạng chéo:
Nguyên tố	Hóa trị	Chéo xuống
Ca	II	2 (sang O)
O	II	2 (sang Ca)
→ Ca₂O₂ → rút gọn → CaO.
3. Công thức hóa học
a. Công thức hóa học thể hiện:
	Nguyên tố tạo nên chất
	Số nguyên tử mỗi nguyên tố
	Tỉ lệ các nguyên tử
b. Ví dụ
	NaCl: 1 Na – 1 Cl
	CaCl₂: Ca (II), Cl (I) → chéo xuống: Ca₁Cl₂
	Al₂O₃: Al (III), O (II) → Al₂O₃
4. Tính % nguyên tố trong hợp chất
Công thức:
%X = (M_nguyên_tử * số_lượng / M_hợp_chất) * 100%
Trong đó:
	Aᵣ(X): khối lượng nguyên tử nguyên tố X
	n: số nguyên tử X trong phân tử chất
	M chất: khối lượng phân tử
Ví dụ
Tính % khối lượng của H và O trong H₂O.
	M(H₂O) = 2×1 + 16 = 18
	%H = 2×1 / 18 × 100% = 11,1%
	%O = 16 / 18 × 100% = 88,9%
Bài tập luyện tập
	Xác định hóa trị của N trong NH₃.
	Lập công thức hóa học của:
	Ca (II) và Cl (I)
	Al (III) và O (II)
	Tính % nguyên tố trong CO₂.
	Tính M của CaCO₃ và % khối lượng Ca.
	Cho Mg(OH)₂. Xác định số nguyên tử và tính M phân tử.
MỞ RỘNG – TÌM HIỂU THÊM
	Liên kết kim loại: dùng chung electron chung của mạng lưới kim loại → tạo độ dẻo, dẫn điện.
	Phân tử phân cực – không phân cực (dành cho HS khá giỏi).
	Liên kết đôi, liên kết ba trong phân tử O₂ và N₂.
	Lớp 8
CHỦ ĐỀ 1: PHẢN ỨNG HÓA HỌC
I. BIẾN ĐỔI VẬT LÍ VÀ BIẾN ĐỔI HÓA HỌC
1. Sự biến đổi chất
Khái niệm
	Chất có thể trải qua biến đổi vật lí hoặc biến đổi hóa học.
a. Biến đổi vật lí
	Chỉ thay đổi trạng thái, hình dạng, kích thước mà không tạo chất mới.
Ví dụ: nước đóng băng → băng, giấy xé, kim loại dát mỏng.
b. Biến đổi hóa học
	Chất biến thành chất mới với tính chất khác.
Ví dụ: Fe + O₂ → Fe₂O₃, H₂ + Cl₂ → 2HCl
2. Phân biệt vật lí và hóa học
Tiêu chí	Vật lí	Hóa học
Tính chất	Không thay đổi	Thay đổi
Chất tạo thành	Không	Có
Dấu hiệu	Thay đổi hình dạng, trạng thái	Nhiệt độ, màu sắc, khí thoát ra, kết tủa

Em có biết?
	Dù biến đổi vật lí hay hóa học, số lượng nguyên tử không thay đổi, tức là khối lượng nguyên tử vẫn bảo toàn.
II. PHẢN ỨNG HÓA HỌC VÀ NĂNG LƯỢNG PHẢN ỨNG
1. Phản ứng hóa học
Khái niệm
	Quá trình chất này biến thành chất khác với biến đổi hóa học xảy ra trên nguyên tử.
Ví dụ
	Zn + HCl → ZnCl₂ + H₂
	C + O₂ → CO₂
2. Diễn biến của phản ứng
	Nguyên tử tái sắp xếp để tạo thành phân tử mới.
	Nguyên tử không tự mất đi.
3. Dấu hiệu phản ứng xảy ra
	Thay đổi màu sắc
	Tạo kết tủa
	Tạo khí
	Thay đổi nhiệt độ (tỏa nhiệt/thu nhiệt)
	Có thể có ánh sáng, mùi.
4. Phản ứng tỏa nhiệt và thu nhiệt
Loại phản ứng	Năng lượng
Tỏa nhiệt	Tỏa nhiệt → xung quanh nóng lên
Thu nhiệt	Hấp thụ nhiệt → xung quanh lạnh đi
Ví dụ:
	Tỏa nhiệt: CH₄ + 2O₂ → CO₂ + 2H₂O + nhiệt
	Thu nhiệt: N₂ + O₂ → 2NO (ở nhiệt độ cao)
III. ĐỊNH LUẬT BẢO TOÀN KHỐI LƯỢNG, PHƯƠNG TRÌNH HÓA HỌC
1. Định luật bảo toàn khối lượng
	Trong phản ứng hóa học, tổng khối lượng các chất trước phản ứng = tổng khối lượng các chất sau phản ứng.
2. Phương trình hóa học (PTHH)
	Cách biểu diễn phản ứng hóa học bằng công thức và tỉ lệ số mol.
Ví dụ: 2H₂ + O₂ → 2H₂O
IV. MOL VÀ TỈ KHỐI CỦA CHẤT KHÍ
1. Khái niệm mol
	1 mol = 6,022 × 10²³ hạt (Nguyên tử, phân tử, ion,…).
2. Khối lượng mol
	Khối lượng của 1 mol chất (g) bằng khối lượng phân tử (M).
	Ví dụ:
	H₂: M = 2 g/mol
	O₂: M = 32 g/mol
	H₂O: M = 18 g/mol
3. Chuyển đổi giữa số mol và khối lượng
 n=m/M
4. Thể tích mol của chất khí
	Ở đktc (25°C, 1 atm): 1 mol khí chiếm 24,79L.
5. Chuyển đổi giữa lượng chất và chất khí
	Số mol → thể tích:
 n = V/24.79
6. Tỉ khối của chất khí
D(x/y)=M(x)/M(y)
Ví dụ: D(O₂/H₂) = 32/2 = 16
V. TÍNH THEO PTHH
1. Xác định khối lượng, số mol của chất phản ứng và sản phẩm
	Bước 1: Viết phương trình hóa học
	Bước 2: Tính số mol chất đã biết
	Bước 3: Dựa tỉ lệ phản ứng → tính chất còn lại
2. Hiệu suất
H = m(tt)/m(lt)
VI. NỒNG ĐỘ DUNG DỊCH
1. Độ tan của chất trong nước
	Lượng tối đa chất tan trong 100 g nước ở điều kiện nhất định.
2. Nồng độ dung dịch
	Nồng độ mol:
C(M)=n/V
	Nồng độ phần trăm:
C%=m(ct)/m(dd)*100
VII. TỐC ĐỘ PHẢN ỨNG VÀ CHẤT XÚC TÁC
1. Tốc độ phản ứng hóa học
	Tốc độ phản ứng: nồng độ chất phản ứng thay đổi theo thời gian.
2. Các yếu tố ảnh hưởng
	Nhiệt độ ↑ → tốc độ ↑
	Nồng độ chất phản ứng ↑ → tốc độ ↑
	Diện tích bề mặt ↑ → tốc độ ↑
	Chất xúc tác: tăng tốc phản ứng mà không tham gia phản ứng.
Bài tập luyện tập
	Viết PTHH và xác định số mol H₂O khi H₂ phản ứng với O₂ 5 mol H₂.
	Tính khối lượng NaCl tạo ra từ 20 g Na + Cl₂ dư.
	Tính nồng độ mol của dung dịch khi hòa tan 58,5 g NaCl trong 1 L nước.
	Tính thể tích khí O₂ (ở đktc) cần thiết để đốt cháy hoàn toàn 2 mol CH₄.
	Xác định tốc độ phản ứng nếu nhiệt độ tăng từ 25°C → 50°C.
Chủ đề 2: Acid – Base – pH – Oxide – Muối – Phân bón hóa học
I. ACID (AXIT)
1. Khái niệm
	Hợp chất có nguyên tử H liên kết với gốc axit.
	Khi tan trong nước, phân li tạo ion H⁺.
	Công thức chung: HₙA (A = gốc axit).
2. Tính chất vật lí
	Thường không màu, một số có màu (HNO₃ cô đặc → vàng nhạt).
	Có vị chua (không nếm trong thực tế).
	Hầu hết tan tốt trong nước.
3. Tính chất hóa học
	Làm quỳ tím → đỏ.
	Tác dụng với kim loại hoạt động (trước H trong dãy điện hoá):
→ Muối + H₂.
	Tác dụng với bazơ → muối + nước.
	Tác dụng với oxit bazơ → muối + nước.
	Tác dụng với muối → tạo muối mới (nếu có chất kết tủa/khí).
4. Phân loại acid
	Theo độ mạnh:
	Acid mạnh: HCl, HNO₃, H₂SO₄.
	Acid yếu: CH₃COOH, H₂CO₃.
	Theo số H có thể phân li:
	1 nấc: HCl, HNO₃.
	2 nấc: H₂SO₄, H₂CO₃.
	3 nấc: H₃PO₄.
5. Ví dụ
	Vô cơ: HCl, H₂SO₄, HNO₃.
	Hữu cơ: CH₃COOH (axit axetic).
II. BASE (BAZƠ)
1. Khái niệm
	Hợp chất gồm kim loại liên kết với nhóm OH.
	Khi tan trong nước, tạo ion OH⁻ (bazơ tan gọi là kiềm).
2. Tính chất vật lí
	Thường rắn, có dạng tinh thể.
	Nhiều bazơ không tan → bazơ không bền trong nước.
3. Tính chất hóa học
	Quỳ tím → xanh.
	Phenolphthalein không màu → hồng trong môi trường kiềm.
	Tác dụng với acid → muối + nước (phản ứng trung hòa).
	Tác dụng với oxit axit → muối + nước.
	Bazơ tan tác dụng với muối (tạo kết tủa hydroxide).
4. Phân loại bazơ
	Theo tính tan:
	Tan: NaOH, KOH, Ba(OH)₂.
	Không tan: Mg(OH)₂, Fe(OH)₃, Cu(OH)₂ (kết tủa).
	Theo số nhóm OH:
	Một nấc: NaOH.
	Hai nấc: Ca(OH)₂.
	Ba nấc: Al(OH)₃.
5. Ví dụ
	NaOH, KOH, Ba(OH)₂, Ca(OH)₂.
III. pH
1. Khái niệm
	pH biểu thị độ axit – bazơ của dung dịch dựa trên nồng độ H⁺.
2. Thang pH
	pH = 7 → trung tính.
	pH < 7 → axit (càng nhỏ càng mạnh).
	pH > 7 → bazơ (càng lớn càng mạnh).
3. Cách đo
	Giấy quỳ
	Giấy chỉ thị vạn năng
	Dung dịch chỉ thị (quỳ tím, phenolphthalein, methyl cam)
	Máy đo pH điện tử
4. Vai trò của pH
	Ảnh hưởng đến độ phì nhiêu của đất.
	Ảnh hưởng đến hoạt động enzyme trong cơ thể.
	Kiểm soát chất lượng nước ao hồ, nước sinh hoạt.
	Ứng dụng trong sản xuất thực phẩm, mỹ phẩm.
IV. OXIDE (OXIT)
1. Khái niệm
	Hợp chất gồm oxi và một nguyên tố khác.
	Công thức dạng: XₐOᵦ.
2. Phân loại
a. Oxit bazơ
	Thường của kim loại.
	Tác dụng với acid → muối + nước.
	Ví dụ: Na₂O, CaO, BaO.
b. Oxit axit
	Thường của phi kim.
	Tác dụng với bazơ → muối + nước.
	Ví dụ: CO₂, SO₂, P₂O₅.
c. Oxit lưỡng tính
	Tác dụng với cả acid và bazơ.
	Ví dụ: ZnO, Al₂O₃.
d. Oxit trung tính
	Không tác dụng với acid hoặc bazơ.
	Ví dụ: CO, NO, N₂O.
3. Tính chất chung
	Một số khí → không màu (CO₂), mùi sốc (SO₂).
	Một số oxit rắn → trắng (ZnO), đen (CuO).
	Nhiều oxit tan/không tan tùy từng loại.
V. MUỐI
1. Khái niệm
	Hợp chất gồm cation kim loại hoặc NH₄⁺ và anion gốc axit.
	Hình thành khi H⁺ trong acid bị thay thế.
2. Phân loại
	Muối trung hòa: NaCl, K₂SO₄.
	Muối axit: NaHCO₃, NaHSO₄.
	Muối bazơ: Mg(OH)Cl (ít gặp).
	Muối kép: KAl(SO₄)₂.
3. Tính chất
	Thường tan trong nước (NaCl, KNO₃).
	Một số ít tan/không tan (AgCl, BaSO₄).
4. Phản ứng tạo muối
	Acid + Bazơ → Muối + Nước
	Acid + Oxit bazơ → Muối + Nước
	Bazơ + Oxit axit → Muối + Nước
	Muối + Muối → Muối + Muối (trao đổi ion)
5. Ví dụ
	NaCl, CaCO₃, BaSO₄, NH₄NO₃.
VI. PHÂN BÓN HÓA HỌC
1. Khái niệm
	Chất cung cấp dinh dưỡng thiết yếu cho cây trồng.
2. Các loại phân bón
a. Phân đa lượng (N – P – K)
	Đạm (N): thúc đẩy sinh trưởng, phát triển lá.
	Lân (P): kích rễ, hoa, quả.
	Kali (K): tăng sức đề kháng, cứng cây.
b. Phân trung lượng & vi lượng
	Ca, Mg, S, Fe, Zn, Cu, Mn…
c. Phân hỗn hợp – phức hợp
	Chứa ≥ 2 nguyên tố (ví dụ NPK 16-16-8).
3. Tính chất – vai trò
	Giúp cây tăng năng suất.
	Bổ sung dưỡng chất cho đất bị bạc màu.
	Hỗ trợ sinh trưởng nhanh, khỏe.
4. Nguyên tắc sử dụng
	Đúng loại – đúng liều – đúng lúc – đúng cách.
	Không bón quá nhiều → gây chua hóa đất, ô nhiễm nước.
	Bảo quản nơi khô ráo, tránh vón cục.

	Lớp 9
CHỦ ĐỀ 1: KIM LOẠI & SỰ KHÁC NHAU GIỮA KIM LOẠI – PHI KIM
I. TÍNH CHẤT CHUNG CỦA KIM LOẠI
1. Tính chất vật lí
a. Khái niệm
Kim loại là nhóm nguyên tố có tính dẫn điện, dẫn nhiệt tốt, ánh kim và tính dẻo, chiếm khoảng 80% số nguyên tố trong bảng tuần hoàn.
b. Các tính chất vật lí đặc trưng
	Ánh kim
	Bề mặt sáng bóng khi mới cắt hoặc đánh sạch.
	Ví dụ: Nhôm, đồng, vàng.
	Dẫn điện tốt
	Nhờ có electron tự do.
	Mức độ dẫn: Ag > Cu > Au > Al > Fe.
	Dẫn nhiệt tốt
	Lí do tương tự như dẫn điện.
	Tính dẻo
	Có thể dát mỏng, kéo sợi, uốn dẻo mà không gãy.
	Vàng có thể dát thành lá mỏng đến vài micromet.
	Khác nhau giữa các kim loại
	Mỗi kim loại có khối lượng riêng, độ cứng, nhiệt độ nóng chảy khác nhau.
c. Ví dụ
	Nhôm nhẹ, mềm, dẫn điện tốt.
	Sắt cứng, nặng, có từ tính.
	Vàng mềm, dễ dát mỏng, không bị ăn mòn.
2. Tính chất hóa học của kim loại
a. Kim loại có tính khử
	Mất electron dễ → tạo ion M⁺.
	Mức độ mất electron khác nhau → liên quan dãy hoạt động hóa học.
b. Các phản ứng hóa học cơ bản
	Kim loại + O₂ → Oxit bazơ
Ví dụ: 4Fe + 3O₂ → 2Fe₂O₃
	Kim loại + phi kim (halogen) → Muối
Ví dụ: 2Na + Cl₂ → 2NaCl
	Kim loại mạnh + nước → Bazơ + H₂
Ví dụ: 2Na + 2H₂O → 2NaOH + H₂↑
	Kim loại + nước (khi đun nóng) → Oxit + H₂
Ví dụ: Mg + H₂O (hơi) → MgO + H₂
	Kim loại + acid loãng → Muối + H₂
Ví dụ: Zn + 2HCl → ZnCl₂ + H₂
	Kim loại + muối → Kim loại mới + muối mới
	Chỉ xảy ra khi kim loại đứng trước trong dãy hoạt động.
Ví dụ: Fe + CuSO₄ → FeSO₄ + Cu
3. Tính chất của một số kim loại thông dụng
a. Điểm giống nhau
	Đều có ánh kim.
	Đều dẫn điện và nhiệt tốt.
	Đều có tính dẻo nhất định.
	Hầu hết phản ứng với acid (trừ Au, Cu…).
b. Bảng tính chất riêng
Kim loại	Màu sắc	Klg riêng (g/cm³)	Nhiệt độ nóng chảy (°C)	Tác dụng O₂	Tác dụng Cl₂	Tác dụng HCl	Tác dụng CuSO₄
Al	Trắng bạc	2,70	660	Tạo Al₂O₃	Tạo AlCl₃	Tạo H₂	Tạo Al₂(SO₄)₃ + Cu
Fe	Trắng xám	7,87	1535	Tạo Fe₃O₄	Tạo FeCl₃	Tạo FeCl₂ + H₂	Tạo FeSO₄ + Cu
Au	Vàng	19,29	1065	Không phản ứng	Không phản ứng	Không phản ứng	Không phản ứng
Cu	Đỏ ánh kim	8,96	1085	Oxi hóa chậm	Tạo CuCl₂ chậm	Rất yếu	Không phản ứng
Zn	Trắng xanh	7,14	419	Tạo ZnO	Tạo ZnCl₂	Tạo H₂	Tạo ZnSO₄ + Cu

II. DÃY HOẠT ĐỘNG HÓA HỌC CỦA KIM LOẠI
1. Dãy hoạt động hoá học
K > Na > Ba > Ca > Mg > Al > Zn > Fe > Ni > Sn > Pb > (H) > Cu > Hg > Ag > Pt > Au
Ý nghĩa
	Kim loại đứng trước mạnh hơn, dễ mất electron hơn.
	KL đứng trước Mg: phản ứng mãnh liệt với nước.
	KL đứng trước H: đẩy H khỏi acid loãng.
	KL đứng trước KL khác → đẩy KL đó ra khỏi muối.
2. Một số phương pháp tách kim loại
a. Phương pháp điện phân nóng chảy
	Áp dụng cho kim loại rất hoạt động: K, Na, Ca, Mg, Al.
	Ví dụ: Điện phân Al₂O₃ → nhôm.
b. Phương pháp nhiệt luyện
	Dùng C, CO, H₂ hoặc Al làm chất khử.
	Áp dụng cho: Fe, Zn, Pb,…
	Ví dụ: Fe₂O₃ + 3CO → 2Fe + 3CO₂.
c. Phương pháp thủy luyện
	Dùng dung dịch & kim loại mạnh đẩy kim loại yếu.
	Áp dụng: Cu, Ag, Hg, Au.
Bảng tóm tắt:
Nhóm kim loại	Phương pháp tách
Hoạt động mạnh (K → Al)	Điện phân nóng chảy
Hoạt động trung bình (Zn → Pb)	Nhiệt luyện
Hoạt động yếu (Cu → Au)	Thủy luyện

III. HỢP KIM
1. Khái niệm
Hợp kim là vật liệu kim loại gồm một kim loại chính + kim loại khác hoặc phi kim.
2. Một số hợp kim quan trọng
	Gang: Fe + 3–5% C
	Thép: Fe + < 2% C
	Hợp kim nhôm: Al + Cu/Mg/Si (nhẹ, bền)
IV. SẢN XUẤT GANG – THÉP
1. Sản xuất gang
Nguyên liệu
	Quặng sắt: Fe₂O₃, Fe₃O₄
	Than cốc (C)
	Đá vôi (CaCO₃)
Thiết bị: Lò cao
Các phản ứng chính
	Tạo chất khử:
C + O₂ → CO₂
CO₂ + C → 2CO
	Khử oxit sắt:
Fe₂O₃ + 3CO → 2Fe + 3CO₂
	Khử tạp chất:
CaCO₃ → CaO + CO₂
CaO + SiO₂ → CaSiO₃ (xỉ)
Sản phẩm
	Gang
	Xỉ
2. Sản xuất thép
Nguyên liệu
	Gang lỏng
	Sắt vụn
	Chất điều chỉnh
Thiết bị
	Lò chuyển – lò điện – lò thổi oxy.
Phản ứng
Oxi hóa tạp chất:
C + O₂ → CO₂
Si + O₂ → SiO₂
Mn + O₂ → MnO
P + O₂ → P₂O₅
So sánh
Tiêu chí	Gang	Thép
Hàm lượng C	3–5%	< 2%
Độ cứng	Giòn	Dẻo, bền
Ứng dụng	Nguyên liệu sản xuất thép	Cơ khí, xây dựng

V. PHI KIM – ỨNG DỤNG & SO SÁNH
1. Ứng dụng của một số phi kim
Clo (Cl₂)
	Khử trùng nước
	Sản xuất PVC
	Tẩy trắng
Lưu huỳnh (S)
	Sản xuất H₂SO₄
	Lưu hóa cao su
	Thuốc nổ, thuốc pháo
Photpho (P)
	Sản xuất phân bón
	Diêm, thuốc nổ
Cacbon (C)
	Than hoạt tính: lọc nước
	Than chì: bút chì, điện cực
	Kim cương: cắt kính, khoan đá
Nitơ (N₂)
	Khí trơ bảo quản
	Sản xuất NH₃ → phân đạm
2. So sánh kim loại – phi kim
Tiêu chí	Kim loại	Phi kim
Vị trí	Trái & giữa BTH	Phải BTH
Cấu tạo	Dễ mất e → M⁺	Dễ nhận e → X⁻
Hóa học	Tính khử	Tính oxi hóa
Trạng thái	Chủ yếu rắn	Rắn – lỏng – khí
Dẫn điện	Tốt	Không dẫn (trừ C-graphit)
Phản ứng O₂	Tạo oxit bazơ	Tạo oxit axit
Phản ứng acid	KL trước H: giải phóng H₂	Ít phản ứng
Phản ứng nước	KL mạnh: tạo H₂	Ít phản ứng

CHỦ ĐỀ 2: HỢP CHẤT HỮU CƠ – HYDROCACBON – NGUỒN NHIÊN LIỆU
I. GIỚI THIỆU HỢP CHẤT HỮU CƠ
1. Khái niệm hợp chất hữu cơ
	Hợp chất hữu cơ là những hợp chất của nguyên tố C (carbon), trừ:
	CO
	CO₂
	Các muối carbonate: CaCO₃, Na₂CO₃,…
	Các cyanua, cacbua kim loại
	Đa số hợp chất hữu cơ có trong: cơ thể sống, thực phẩm, dầu mỏ, khí thiên nhiên,…
Ví dụ:
	Glucose C₆H₁₂O₆
	Ethanol C₂H₅OH
	Metan CH₄
2. Hoá học hữu cơ
	Hoá học hữu cơ: ngành hoá học chuyên nghiên cứu:
	Cấu tạo
	Tính chất
	Điều chế
	Ứng dụng
của các hợp chất hữu cơ.
3. Công thức phân tử – công thức cấu tạo
a. Công thức phân tử (CTPT)
Cho biết:
	Số nguyên tử mỗi nguyên tố trong phân tử
	Không biểu diễn được cách liên kết
VD: C₂H₆O
b. Công thức cấu tạo (CTCT)
Cho biết:
	Trật tự liên kết giữa các nguyên tử
	Bản chất nhóm chức
VD:
Ethanol: CH₃–CH₂–OH
Ete: CH₃–O–CH₃
→ CTPT giống nhau nhưng CTCT khác nhau ⇒ hiện tượng đồng phân.
4. Phân loại hợp chất hữu cơ
Có nhiều cách phân loại:
a. Theo khung carbon
	Hợp chất mạch hở: ankan, anken, axit, ancol…
	Hợp chất vòng: vòng xiclo, vòng benzen…
b. Theo thành phần nguyên tố
	Hydrocacbon: chỉ chứa C và H
	Hợp chất tạp chức: chứa thêm O, N, halogen,…
c. Theo nhóm chức
	Ancol – Phenol – Ete – Aldehyde – Axit cacboxylic – Este – Amin – Amide…
5. Luyện tập nhanh
	Chất nào không phải hợp chất hữu cơ?
a) CH₄
b) C₂H₆O
c) CO₂
d) C₆H₁₂O₆
	Viết CTPT và CTCT của ethanol.
6. Em có biết?
	Urea (phân đạm) là hợp chất hữu cơ đầu tiên được tổng hợp nhân tạo (Wöhler, 1828), mở ra ngành hoá học hữu cơ hiện đại.
7. Mở rộng – Tìm hiểu thêm
	Trên 90% hợp chất đã biết của hoá học là hữu cơ.
	Nguyên nhân: nguyên tử C có khả năng tạo chuỗi dài, vòng, liên kết đơn – đôi – ba, tạo ra số lượng cấu trúc khổng lồ.
II. ANKAN (ALKAN)
Hydrocacbon no – chỉ có liên kết đơn C–C
1. Khái niệm
	Ankan: hydrocacbon mạch hở, công thức chung: CₙH₂ₙ₊₂
	Liên kết trong phân tử: liên kết đơn (σ).
	Tên gọi: dựa theo số nguyên tử C
	CH₄: Metan
	C₂H₆: Etan
	C₃H₈: Propan
2. Tính chất
a. Tính chất vật lí
	Nhẹ hơn nước
	Tan kém trong nước
	Dễ cháy
b. Tính chất hoá học
	Phản ứng cháy
CH₄ + 2O₂ → CO₂ + 2H₂O
	Phản ứng thế (khi có ánh sáng)
CH₄ + Cl₂ → CH₃Cl + HCl
3. Ứng dụng
	Metan là thành phần chính của khí thiên nhiên, biogas
	Propan & butan → khí LPG trong bếp gas
	Là nguyên liệu sản xuất nhựa, hoá chất,…
4. Luyện tập
	Viết PTHH: Propan cháy hoàn toàn.
5. Em có biết?
	Khi cháy không hoàn toàn, metan tạo CO – khí độc gây tử vong trong các vụ rò rỉ gas.
III. ANKEN (ALKENE)
Hydrocacbon không no – chứa 1 liên kết đôi C=C
1. Khái niệm
	Công thức chung: CₙH₂ₙ
	Ví dụ:
	C₂H₄: Etilen
	C₃H₆: Propilen
2. Tính chất
a. Vật lí
	Khí hoặc lỏng nhẹ
	Tan kém trong nước
b. Hoá học
	Phản ứng cộng (đặc trưng)
C₂H₄ + Br₂ → C₂H₄Br₂
	Phản ứng trùng hợp
nC₂H₄ → (C₂H₄)ₙ (polyetylen – PE)
3. Ứng dụng
	Etilen dùng ép chín trái cây
	Sản xuất nhựa PE
	Nguyên liệu công nghiệp hoá dầu
4. Luyện tập
	Gọi tên C₄H₈.
	Trình bày phản ứng đặc trưng của anken.
5. Mở rộng
	Một số anken có thể tạo đồng phân hình học cis – trans.
IV. ANKIN (ALKYNE)
Hydrocacbon không no – chứa liên kết ba C≡C
1. Khái niệm
	Công thức chung: CₙH₂ₙ₋₂
	Ví dụ:
	C₂H₂: Axetilen
	C₃H₄: Propin
2. Tính chất
a. Vật lí
	Khí (ankin nhỏ)
	Ít tan trong nước
b. Hoá học
	Phản ứng cháy
C₂H₂ cháy sáng, toả nhiều nhiệt
	Phản ứng cộng
C₂H₂ + Br₂ → C₂H₂Br₂ (cộng 1 lần)
	Phản ứng với AgNO₃/NH₃
C₂H₂ + Ag⁺ → Ag₂C₂↓
3. Ứng dụng
	Axetilen dùng để:
	Hàn cắt kim loại (ngọn lửa ~ 3000°C)
	Sản xuất nhựa PVC
	Tổng hợp cao su, dung môi công nghiệp
4. Luyện tập
	Viết CTPT ankin có 4 nguyên tử carbon.
	Nêu một ứng dụng của axetilen.
5. Em có biết?
	Axetilen rất dễ nổ nếu bị nén mạnh hoặc tiếp xúc kim loại đồng ⇒ phải bảo quản trong chai chứa dung môi đặc biệt.
V. NGUỒN NHIÊN LIỆU TỪ HỢP CHẤT HỮU CƠ
1. Các nguồn nhiên liệu chính
	Than đá
	Dầu mỏ
	Khí thiên nhiên
	Biogas (sinh học)
	Nhiên liệu sinh học (biofuel) – ethanol, biodiesel
2. Thành phần chính
	Chủ yếu là hydrocacbon
	Dầu mỏ chứa: ankan, xicloankan, anken,…
3. Chưng cất phân đoạn dầu mỏ
Tách thành các sản phẩm:
	Khí hoá lỏng (LPG)
	Xăng
	Dầu hoả
	Dầu diesel
	Nhựa đường
4. Ứng dụng trong đời sống
	Nhiên liệu đốt – giao thông – phát điện
	Sản xuất nhựa, phân bón, dung môi
5. Bảo vệ môi trường
	Giảm khí CO₂, SO₂, NOₓ
	Phát triển năng lượng tái tạo
	Sử dụng xăng sinh học E5, E10
6. Luyện tập
	Dầu mỏ được tách thành nhiều sản phẩm bằng phương pháp gì?
	Nêu 2 nhiên liệu sinh học.

CHỦ ĐỀ 3: C₂H₅OH – CH₃COOH
I. RƯỢU ETHANOL – C₂H₅OH
1. Khái niệm – Công thức
a. Công thức phân tử (CTPT)
	C₂H₆O, thường viết dạng rút gọn: C₂H₅OH
b. Công thức cấu tạo (CTCT)
	CH₃ – CH₂ – OH
→ Thuộc loại ancol (rượu), có nhóm chức –OH gắn vào carbon no.
2. Tính chất vật lí
	Chất lỏng, không màu, mùi rượu đặc trưng
	Tan vô hạn trong nước
	Nhẹ hơn nước
	Dễ cháy → tạo ngọn lửa màu xanh nhạt
Độ cồn
	Thể hiện % thể tích ethanol trong dung dịch
	VD: Rượu 40° → 40% thể tích là ethanol
	Độ cồn càng cao → rượu càng mạnh
3. Tính chất hoá học
a. Tính cháy
C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O
b. Tác dụng với Na (giống ancol)
2C₂H₅OH + 2Na → 2C₂H₅ONa + H₂↑
c. Oxi hoá tạo CH₃CHO (ở mức THCS chỉ cần nêu hiện tượng)
	Sản phẩm là aldehyde → rượu bị "hôi"
4. Ứng dụng
	Sát trùng y tế (cồn 70°, 90°)
	Nguyên liệu chế mỹ phẩm, dược phẩm
	Là nhiên liệu sinh học (bio-ethanol)
	Dùng sản xuất giấm ăn, đồ uống có cồn
5. Luyện tập
	Điền CTCT của ethanol.
	Rượu 40° có bao nhiêu ml etanol trong 500 ml dung dịch?
6. Em có biết?
	Cồn 70° sát khuẩn tốt hơn 90°, vì 70° thấm tốt hơn vào màng tế bào vi khuẩn.
7. Mở rộng
	Ethanol có thể được lên men từ tinh bột hoặc đường:
C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂
II. AXIT AXETIC – CH₃COOH (GIẤM)
1. Khái niệm – Công thức
a. CTPT: CH₄O₂
Thường viết dạng gốc axit: CH₃COOH
b. Công thức cấu tạo (CTCT)
H – C(=O) – OH gắn với nhóm CH₃.
Thuộc loại axit cacboxylic.
2. Tính chất vật lí
	Chất lỏng, mùi chua gắt
	Tan vô hạn trong nước
	Dạng đặc (99%) đông lại ở nhiệt độ thấp → gọi là giấm băng
	Là axit yếu nhưng mạnh hơn CO₂, H₂CO₃
3. Tính chất hoá học
a. Tính axit (đặc trưng)
	Tác dụng với kim loại đứng trước H
2CH₃COOH + Mg → (CH₃COO)₂Mg + H₂↑
	Tác dụng với bazơ
CH₃COOH + NaOH → CH₃COONa + H₂O
	Tác dụng với oxit bazơ
2CH₃COOH + CuO → (CH₃COO)₂Cu + H₂O
	Tác dụng với muối (bị axit có tính mạnh hơn đẩy ra)
2CH₃COOH + Na₂CO₃ → 2CH₃COONa + CO₂↑ + H₂O
4. Ứng dụng
	Gia vị giấm ăn (3–5%)
	Chất bảo quản thực phẩm
	Nguyên liệu sản xuất:
	Cao su tổng hợp
	Nhựa
	Thuốc nhuộm
	Dược phẩm
	Tẩy rửa cặn vôi CaCO₃ (vì tạo muối tan + CO₂ bay hơi)
5. Luyện tập
	Viết phương trình: CH₃COOH + Na₂CO₃
	Nêu 2 ứng dụng của axit axetic trong đời sống.
6. Em có biết?
	Giấm ăn có vị chua là do CH₃COOH, không phải do CO₂.
	Axit axetic có thể sản xuất từ ethanol nhờ vi khuẩn giấm Acetobacter.
7. Mở rộng
	Nhóm COOH quyết định tính axit.
	Các axit hữu cơ khác: HCOOH (axit fomic), C₂H₅COOH (propionic)…
	Giấm công nghiệp thường sản xuất bằng oxi hoá ethanol, không phải lên men tự nhiên.

CHỦ ĐỀ 4: LIPID – CARBOHYDRATE – PROTEIN – POLYMER
I. LIPID (CHẤT BÉO)
1. Khái niệm
	Lipid là nhóm hợp chất hữu cơ không tan trong nước nhưng tan trong dung môi hữu cơ (benzen, ete…).
	Chất béo là este của axit béo + glixerol:
→ CT chung: (RCOO)₃C₃H₅
2. Tính chất
a. Tính chất vật lí
	Không tan trong nước
	Nhẹ hơn nước
	Dạng lỏng hoặc rắn (tùy acid béo bão hòa/hay không bão hòa)
b. Tính chất hóa học
	Phản ứng xà phòng hóa
(RCOO)₃C₃H₅ + 3NaOH → 3RCOONa + C₃H₅(OH)₃
	Hydro hóa chất béo lỏng → rắn
(ứng dụng trong sản xuất bơ thực vật)
3. Vai trò
	Dự trữ năng lượng cho cơ thể
	Thành phần màng tế bào
	Giữ ấm, bảo vệ cơ quan nội tạng
	Tăng hấp thụ vitamin A, D, E, K
4. Ứng dụng
	Sản xuất xà phòng, mỹ phẩm, bơ thực vật, dầu ăn
	Làm nhiên liệu sinh học
	Dược phẩm, thực phẩm
II. CARBOHYDRATE (C₆H₁₂O₆ – C₁₂H₂₂O₁₁)
1. Thành phần nguyên tố – CT chung
	Gồm C, H, O
	Công thức chung: Cₙ(H₂O)ₘ
→ Gọi là “hydrat carbon”.
2. CTPT – CTCT một số chất
a. Glucozơ – C₆H₁₂O₆
	Đơn đường (monosaccharide)
	Có nhiều nhóm OH → Tan tốt trong nước
b. Saccarozơ – C₁₂H₂₂O₁₁
	Đường mía (disaccharide)
	Không có nhóm aldehyde → không tráng bạc
3. Trạng thái tự nhiên – Tính chất vật lí
a. Glucozơ
	Có trong quả chín, máu, mật ong
	Dạng tinh thể, ngọt, tan nhiều trong nước
b. Saccarozơ
	Có trong mía, củ cải đường, thốt nốt
	Tinh thể không màu, tan trong nước
4. Tính chất hoá học
a. Glucozơ (có nhóm –CHO)
	Tính khử: tráng bạc
	Lên men rượu:
C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂
b. Saccarozơ
	Thuỷ phân:
C₁₂H₂₂O₁₁ + H₂O → C₆H₁₂O₆ + C₆H₁₂O₆
5. Vai trò – Ứng dụng
	Cung cấp năng lượng (đường glucozơ hấp thu nhanh)
	Nguyên liệu thực phẩm, bánh kẹo, công nghiệp lên men
	Dược phẩm, gốm sứ
III. TINH BỘT & CELLULOSE
1. CTPT – Trạng thái tự nhiên – Tính chất
a. Tinh bột – (C₆H₁₀O₅)ₙ
	Có trong hạt (gạo, ngô), củ (khoai), thân cây
	Dạng bột trắng, không tan trong nước lạnh → hồ tinh bột trong nước nóng
b. Xenlulozơ – (C₆H₁₀O₅)ₙ
	Có trong thành tế bào thực vật, gỗ, bông
	Chất rắn dạng sợi, không tan trong nước & dung môi thường
2. Tính chất hoá học
Tinh bột
	Thủy phân → maltose → glucozơ
	Phản ứng với iodine → xanh tím
Cellulose
	Thủy phân → glucozơ (khó hơn tinh bột)
	Phản ứng với HNO₃ tạo xenlulozơ nitrat (làm thuốc súng, phim ảnh)
3. Vai trò – Ứng dụng
Tinh bột
	Nguồn năng lượng chính của con người
	Làm thực phẩm, bánh kẹo, hồ dán
Cellulose
	Làm giấy, vải (cotton), tơ nhân tạo (tơ visco, tơ axetat)
	Thành phần chính cấu tạo thực vật → giúp cây đứng vững
IV. PROTEIN
1. Khái niệm – cấu tạo
	Protein là polymer tự nhiên cấu tạo từ axit amin
	Chứa các nguyên tố: C, H, O, N, S
	Khối lượng phân tử rất lớn (hàng nghìn đến hàng triệu)
2. Vai trò
	Xây dựng cơ, mô
	Cấu tạo enzyme, hormon
	Vận chuyển chất (hemoglobin)
	Cung cấp năng lượng khi cần thiết
3. Tính chất hóa học
	Bị thủy phân → amino acid
	Bị đông tụ khi đun nóng (lòng trắng trứng đông)
	Phản ứng màu biure: màu tím khi gặp Cu(OH)₂
4. Phân biệt protein với chất khác
	Tác dụng với Cu(OH)₂ → màu tím (cacbohydrat → xanh)
	Khi đun nóng: protein bị đông tụ, đường tan chảy nhưng không đông
	Không tráng bạc như glucozơ
V. POLYMER – CHẤT DẺO – TƠ – CAO SU – COMPOSITE
1. Khái niệm
	Polymer: chất có phân tử rất lớn, do nhiều mắc xích (monomer) nối lại.
VD: (CH₂=CH₂)ₙ → polietilen (PE)
2. Công thức hoá học – phân loại
a. Theo nguồn gốc
	Tự nhiên: tinh bột, cellulose, protein
	Nhân tạo: tơ visco, tơ axetat
	Tổng hợp: PE, PVC, PP, PS, cao su tổng hợp
b. Theo tính chất
	Nhiệt dẻo
	Nhiệt rắn
	Đàn hồi
3. Tính chất vật lí
	Nhẹ
	Bền hoá học
	Cách điện, cách nhiệt
	Dẻo hoặc đàn hồi
4. Điều chế
	Trùng hợp:
nCH₂=CH₂ → (–CH₂–CH₂–)ₙ (PE)
	Trùng ngưng:
Acid + rượu → polymer + nước
5. Các vật liệu polymer quan trọng
a. Chất dẻo
	PE, PP, PVC
	Dùng làm bao bì, ống nước, vật dụng
b. Tơ
	Tơ nilon, tơ visco
	Dùng may mặc, lưới, dây cáp
c. Cao su
	Cao su thiên nhiên
	Cao su tổng hợp (SBR, neoprene)
	Ứng dụng: lốp xe, dây điện, băng tải
d. Vật liệu composite
	Sợi + polymer
	Bền – nhẹ → làm máy bay, tàu vũ trụ, ván thể thao
6. Ứng dụng chung
	Bao bì, nhựa, đồ gia dụng
	Xây dựng, ô tô, máy bay
	Điện – điện tử
	Công nghiệp dệt may
7. Ô nhiễm và hạn chế
	Nhựa khó phân huỷ gây ô nhiễm đất – biển
	Vi nhựa vào chuỗi thức ăn
	Cháy nhựa tạo khí độc (dioxin)
Hướng khắc phục
	Dùng bio-plastic, phân hủy sinh học
	Tăng cường tái chế
	Hạn chế dùng đồ nhựa một lần

	Lớp 10
CHỦ ĐỀ 1: CẤU TẠO NGUYÊN TỬ
I. THÀNH PHẦN CỦA NGUYÊN TỬ
1. Thành phần cấu tạo nguyên tử
Nguyên tử gồm 2 phần chính:
	Hạt nhân: mang điện dương, gồm proton (p) và neutron (n).
	Vỏ electron (e): các electron mang điện âm chuyển động xung quanh hạt nhân.
Tổng thể trung hòa điện:
Số p = Số e
2. Electron
	Hạt mang điện tích âm: qₑ = –1,6 × 10⁻¹⁹ C. Được quy ước là -1
	Khối lượng cực nhỏ: mₑ ≈ 1/1836 mₚ = 9,11*10-28g (gần như bỏ qua khi tính khối lượng nguyên tử).
	Chuyển động rất nhanh trong vùng không gian gọi là orbital e.
Điểm cốt lõi: electron quyết định tính chất hóa học của nguyên tử.
3. Hạt nhân
	Mang điện dương → quyết định danh tính của nguyên tố.
	Điện tích hạt nhân = Z · (+1), với Z là số proton.
	Gồm:
	proton (p): mang điện +1
	neutron (n): không mang điện
Hạt nhân nặng và chiếm gần toàn bộ khối lượng nguyên tử.
4. Cấu tạo hạt nhân nguyên tử
Hạt nhân được đặc trưng bởi:
	Số proton (Z)
	Số neutron (N)
	Số khối: A = Z + N
Hai nguyên tử cùng Z nhưng khác N → đồng vị (phần sau sẽ nói).
________________________________________
5. Kích thước và khối lượng nguyên tử
	Đường kính nguyên tử: khoảng 10⁻¹⁰ m.
	Đường kính hạt nhân: khoảng 10⁻¹⁵ m.
→ Nguyên tử rỗng gần như hoàn toàn.
Khối lượng nguyên tử ≈ khối lượng hạt nhân (vì mₑ rất nhỏ).
Đơn vị: u, trong đó
1 u = 1/12 khối lượng nguyên tử C-12.
hạt	điện tích	khối lượng (amu)	khối lượng(g)
p	+1	1	1.673*10-24
n	0	1	1.673*10-25
e	-1	1/1840	9,11*10-28 

II. NGUYÊN TỐ HÓA HỌC
1. Hạt nhân nguyên tử
Hạt nhân quyết định:
	Số hiệu nguyên tử Z
	Tên và tính chất hóa học của nguyên tố
2. Nguyên tố hóa học
Khái niệm:
Nguyên tố hóa học là tập hợp các nguyên tử có cùng số proton Z.
Dù số neutron thay đổi → vẫn là 1 nguyên tố.
3. Đồng vị
Đồng vị = các nguyên tử:
	cùng Z
	khác số neutron N
→ khác số khối A.
Đặc điểm:
	Tính chất hóa học giống nhau (do e giống).
	Tính chất vật lí khác (do khối lượng khác).
4. Nguyên tử khối và nguyên tử khối trung bình
Nguyên tử khối
Là khối lượng tương đối của 1 nguyên tử so với 1/12 khối lượng C-12.
Nguyên tử khối trung bình
Dùng cho nguyên tố có nhiều đồng vị:
\bar{A}=\frac{aA+bB+cC+\ldots}{100}\ 
A là nguyên tử khối trung bình
a,b,c,... là tỉ lệ % mỗi đồng vị
A,B,C... là khối lượng mỗi đồng vị
III. CẤU TRÚC VỎ NGUYÊN TỬ
1. Sự chuyển động electron trong nguyên tử
Electron không chạy theo quỹ đạo tròn (Kiểu Bohr) trong thực tế.
Chúng tồn tại trong orbital – vùng xác suất cao nhất tìm thấy electron.
Chuyển động của e tuân theo:
	Cơ học lượng tử
	Nguyên lý Pauli
	Quy tắc Hund
	Quy tắc Aufbau (xếp e theo mức năng lượng tăng dần)
2. Lớp và phân lớp electron
Vỏ e chia thành lớp n = 1(K),2(L),3(M),4(N),5(O),6(P),7(Q).
Mỗi lớp chứa các phân lớp (s, p, d, f).
Dung lượng electron:
	s: 2
	p: 6
	d: 10
	f: 14
Các phân lớp khác nhau về hình dạng orbital:
	s: hình cầu
	p: hình số 8
	d: dạng cánh hoa
	f: dạng phức tạp, không cố định như s,p,d
3. Cấu hình electron
Nguyên tắc viết:
	Theo thứ tự mức năng lượng:
1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p < 5s < 4d < 5p < 6s < 4f < 5d < 6p < 7s < 5f < 6d < 7p
	Nguyên lý Pauli: mỗi orbital tối đa 2 e, trái chiều spin.
	Quy tắc Hund: điền e đơn lẻ trước, ghép đôi sau.
Mẹo: 4s luôn điền trước 3d nhưng khi mất e, kim loại dãy chuyển tiếp mất 4s trước.
	Đặc điểm cấu hình e lớp ngoài cùng:
- các nguyên tử có 1-3 e ở lớp ngoài cùng là kim loại
- các nguyên tử có 4e ở lớp ngoài cùng  là kim loại hoặc phi kim(thường là phi kim)
-  các nguyên tử có 5-7e ở lớp ngoài cùng là phi kim
- các nguyên tử có 8e ở lớp ngoài cùng là khí hiếm
CHỦ ĐỀ 2 — BẢNG TUẦN HOÀN CÁC NGUYÊN TỐ HÓA HỌC
I. CẤU TẠO BẢNG TUẦN HOÀN
1. Lịch sử hình thành
Cơ bản
	Thế kỉ 19: hàng chục nguyên tố được phát hiện, nhưng rời rạc – khó nhớ – khó hệ thống.
	Nhiều nhà khoa học cố gắng sắp xếp (Dobereiner, Newlands…), nhưng đột phá chỉ đến với Dmitri Mendeleev (Nga) năm 1869.
	Mendeleev sắp xếp nguyên tố theo khối lượng nguyên tử tăng dần và tính chất lặp lại theo chu kì → gọi là “tuần hoàn”.
Sâu hơn
	Điều gây sốc: Mendeleev để trống những ô chưa có nguyên tố, tự tin dự đoán:
vị trí – tính chất – khối lượng – oxide tương ứng.
	Sau này, khi Gallium (Ga), Germanium (Ge) xuất hiện đúng y dự đoán → bảng của Mendeleev được công nhận.
	Năm 1913, Mosley tìm ra điện tích hạt nhân Z → bảng tuần hoàn hiện đại sắp theo số hiệu nguyên tử, không theo khối lượng.
2. Bảng tuần hoàn hiện đại
A. Ô nguyên tố
Cơ bản
	Mỗi ô biểu diễn 1 nguyên tố.
	Chứa:
	Số hiệu nguyên tử Z
	Kí hiệu hóa học
	Tên nguyên tố
	Nguyên tử khối A
	Cấu hình e (ở bảng nâng cao)
Sâu
	Z quyết định bản chất nguyên tố. Đổi Z → đổi nguyên tố → phá vỡ vật chất (nên trong thực tế không tồn tại phản ứng “biến chì thành vàng” bằng hoá học).
B. Chu kì
Cơ bản
	Chu kì = hàng ngang.
	Có 7 chu kì.
	Nguyên tố trong một chu kì:
	Cùng số lớp electron.
	Từ trái sang phải: số e hóa trị tăng, tính chất đổi dần.
Sâu
	Chu kì 1 đặc biệt: chỉ có 2 nguyên tố → do lớp K chỉ chứa tối đa 2 e.
	Chu kì 6 và 7 đứt đoạn vì có dãy lanthanide – actinide (f-block) kéo xuống.
C. Nhóm
Cơ bản
	Nhóm = cột dọc, gồm các nguyên tố có tính chất hóa học gần giống.
	Có 18 nhóm chính.
	Nhóm A (1–8A): p-block, s-block → phổ biến.
	Nhóm B: d-block (kim loại chuyển tiếp).
Sâu
	Nhóm quyết định: hoá trị tối đa, cấu hình e hoá trị, kiểu oxide – hydroxide.
	Kim loại chuyển tiếp có nhiều mức oxi hóa, tạo phức → đặc trưng d-block.
D. Phân loại nguyên tố
Theo khối:
	s-block: Nhóm 1, 2 → kim loại mạnh.
	p-block: Nhóm 13–18 → đa dạng: kim loại – phi kim – khí hiếm.
	d-block: Nhóm 3–12 → kim loại chuyển tiếp.
	f-block: Lanthanide, Actinide.
Theo tính chất:
	Kim loại
	Phi kim
	Khí hiếm
	Á kim (B, Si, Ge, As, Sb, Te)
E. Nguyên tắc sắp xếp
	Theo số hiệu nguyên tử Z tăng dần.
	Nguyên tố có cấu hình electron tương tự → xếp vào cùng nhóm.
	Số lớp e → xác định chu kì.
	Tính chất biến đổi theo định luật tuần hoàn.
II. XU HƯỚNG BIẾN ĐỔI TÍNH CHẤT
1. Bán kính nguyên tử
Trong một chu kì (← sang →): giảm
	Vì số proton tăng → hút e mạnh → nguyên tử “co lại”.
Trong một nhóm (↑ xuống ↓): tăng
	Thêm lớp e → nguyên tử phình ra.
Bản chất sâu
	Tương quan giữa lực hút hạt nhân và hiệu ứng chắn e (shielding).
2. Độ âm điện (Electronegativity)
Trong một chu kì: tăng
	Hạt nhân hút mạnh hơn, muốn nhận e.
Trong nhóm: giảm
	Nguyên tử lớn → lực hút e yếu.
Đỉnh cao: Flo (F) – mạnh nhất.
Thấp nhất: Cs, Fr – cực yếu.
3. Tính kim loại – phi kim
Tính kim loại
	Dễ mất e, tạo ion dương.
	Tăng khi:
	Đi xuống nhóm
	Đi về bên trái bảng
Tính phi kim
	Dễ nhận e, tạo ion âm.
	Tăng khi:
	Đi lên nhóm
	Đi về bên phải bảng
Góc kim loại – phi kim (Metal–nonmetal diagonal)
	Một đường chéo chia bảng: bên trái – kim loại, bên phải – phi kim.
4. Tính acid – base của oxide & hydroxide
Oxide của kim loại → base
Ví dụ:
Na₂O, CaO → tạo dung dịch kiềm mạnh.
Oxide của phi kim → acid
SO₂, CO₂, P₂O₅ → tạo acid.
Oxide lưỡng tính (vừa acid vừa base):
Al₂O₃, ZnO, SnO, PbO.
Xu hướng:
	Trái → phải: Tính acid tăng, tính base giảm.
	Trên → dưới trong nhóm: tính base tăng.
III. ĐỊNH LUẬT TUẦN HOÀN – Ý NGHĨA
1. Định luật tuần hoàn
Phát biểu
Tính chất của các nguyên tố và hợp chất của chúng biến đổi tuần hoàn theo điện tích hạt nhân Z.
Diễn giải dễ hiểu
	Khi tăng dần số proton, cấu hình electron thay đổi có quy luật → tính chất lặp lại theo chu kì.
2. Ý nghĩa của định luật tuần hoàn
Thực tế – quan trọng
	Dự đoán tính chất của nguyên tố mới hoặc chưa nghiên cứu đủ.
	Giải thích quy luật biến đổi tính chất.
	Xác định vị trí nguyên tố dựa vào tính chất, hoặc ngược lại.
	Dự đoán công thức oxide, hydroxide, hợp chất.
	Cấu trúc – xu hướng phản ứng trong hóa vô cơ.
Áp dụng nhanh
	Nhìn vị trí → biết ngay:
	Kim loại hay phi kim?
	Mạnh hay yếu?
	Oxide acid hay base?
	Bán kính to hay nhỏ?
	Độ âm điện cao hay thấp?
CHƯƠNG 3 — LIÊN KẾT HÓA HỌC
I. QUY TẮC OCTET
1. Liên kết hoá học
Cơ bản
	Liên kết hoá học là lực hút giữa các nguyên tử → giúp tạo thành phân tử hay tinh thể bền vững.
	Nguyên tử liên kết vì tự thân nó không bền, cần đạt cấu hình bền như khí hiếm.
Sâu
	Tính bền của khí hiếm đến từ:
8 electron lớp ngoài cùng (trừ He – 2e) → trạng thái năng lượng thấp.
2. Quy tắc octet
Cơ bản
	Nguyên tử có xu hướng nhận, nhường hoặc chia sẻ electron để đạt 8 electron ở lớp ngoài cùng.
Sâu
	Quy tắc này không tuyệt đối.
	Thiếu octet: BeCl₂, BF₃
	Mở rộng octet: PCl₅, SF₆ (nguyên tử trung tâm có d-orbital trống)
	Hợp chất số lẻ e: NO, NO₂
	Bản chất: bền vững đạt được khi vùng electron hoá trị ổn định, không chỉ “đúng 8 e”.
II. LIÊN KẾT ION
1. Ion và sự hình thành liên kết ion
Cơ bản
	Khi kim loại nhường e → tạo cation.
	Phi kim nhận e → tạo anion.
	Lực hút tĩnh điện giữa ion trái dấu → liên kết ion.
Ví dụ
	Na → Na⁺ + 1e
	Cl + 1e → Cl⁻
	Na⁺ + Cl⁻ → NaCl
Sâu
	Liên kết ion mạnh hay yếu phụ thuộc:
(1) điện tích ion, (2) bán kính ion, (3) hằng số điện môi môi trường.
2. Tinh thể ion
Cơ bản
	Tồn tại không phải thành “phân tử” mà là mạng tinh thể.
	Ion sắp xếp tối ưu để lực hút lớn – lực đẩy nhỏ nhất.
Đặc điểm
	Rắn, điểm nóng chảy cao
	Giòn
	Tan trong dung môi phân cực (H₂O)
	Dẫn điện khi nóng chảy hoặc hòa tan (ion tự do)
Sâu
	Năng lượng mạng tinh thể (lattice energy) là thước đo độ bền liên kết ion.
III. LIÊN KẾT CỘNG HOÁ TRỊ
1. Sự hình thành liên kết
Cơ bản
	Hai nguyên tử chia sẻ electron để đạt octet.
	Một cặp e chung = 1 liên kết đơn.
Sâu
	Liên kết cộng hóa trị hình thành khi orbital nguyên tử xen phủ (overlap).
	Xen phủ càng mạnh → liên kết càng bền.
2. Liên kết cho – nhận (coordinate bond)
Cơ bản
	Một nguyên tử cho cả cặp electron liên kết, nguyên tử kia nhận, nhưng sau đó cả hai dùng chung.
Ví dụ
	NH₃ + H⁺ → NH₄⁺
	O trong H₂O cho e → tạo liên kết trong ion H₃O⁺
Sâu
	Về bản chất năng lượng → giống liên kết cộng hoá trị bình thường, khác ở nguồn gốc cặp e.
3. Phân biệt loại liên kết dựa vào độ âm điện
Dựa trên độ chênh độ âm điện (ΔEN) giữa hai nguyên tử:
	ΔEN ≥ 1.7 → Liên kết ion (NaCl)
	0 < ΔEN < 1.7 → cộng hoá trị phân cực (H–Cl)
	ΔEN = 0 → cộng hoá trị không phân cực (Cl₂, O₂)
	Đây là giá trị xấp xỉ, có ngoại lệ nhưng đủ dùng 99% trường hợp phổ thông.
4. Liên kết σ (sigma), π (pi) và năng lượng liên kết
Liên kết sigma (σ)
	Tạo ra do xen phủ trục (đối đầu).
	Xuất hiện ở tất cả: liên kết đơn, đôi, ba.
	Đặc điểm: mạnh, linh động → phân tử có thể quay quanh trục liên kết.
Liên kết pi (π)
	Tạo từ xen phủ bên (song song) của orbital p.
	Chỉ có trong liên kết đôi và ba.
	Mỏng manh hơn σ, cản trở chuyển động quay → dẫn đến định hướng không gian cố định (ví dụ: liên kết đôi C=C phẳng).
Năng lượng liên kết
	Mạnh nhất: liên kết 3 > 2 > 1
	Nhưng không phải bội số:
	Năng lượng (C–C):
	đơn: ~350 kJ/mol
	đôi: ~610 kJ/mol (không phải 2×350)
	ba: ~840 kJ/mol
IV. LIÊN KẾT HYDROGEN & TƯƠNG TÁC VAN DER WAALS
1. Liên kết hydrogen (H-bond)
Cơ bản
	Xảy ra khi H liên kết với nguyên tử có độ âm điện lớn: F, O, N.
	H mang δ⁺ sẽ hút cặp e tự do của nguyên tử âm điện ở phân tử bên cạnh.
Ví dụ mạnh nhất
HF, H₂O, NH₃
Tính chất
	Làm nhiệt độ sôi tăng mạnh (nước sôi cao bất thường so với khối lượng phân tử).
	Tạo mạng lưới trong nước và DNA.
Sâu
	Không phải “liên kết hoá trị yếu”, mà là tương tác tĩnh điện định hướng, nằm giữa lực Van der Waals và liên kết hoá học.
2. Tương tác Van der Waals
Gồm 3 loại chính
	Lực định hướng (dipole–dipole)
	Lực cảm ứng (dipole – induced dipole)
	Lực khuếch tán (London dispersion)
Cơ bản
	Xuất hiện giữa mọi phân tử, kể cả khí hiếm.
	Nhỏ, nhưng khi có nhiều (như trong polymer, protein) → rất quan trọng.
Sâu
	Lực London tăng khi:
	Phân tử lớn
	Dễ phân cực
	Nhiều e → đám mây electron dễ “nhảy”, tạo dipole tạm thời.
CHƯƠNG 4 — PHẢN ỨNG OXI HOÁ – KHỬ
I. SỐ OXI HOÁ (SỐ OXH)
1. Khái niệm
	Số oxi hoá là số điện tích giả định mà nguyên tử mang khi xem các liên kết đều là ion hoàn toàn.
	Giúp theo dõi sự chuyển electron trong phản ứng.
2. Quy tắc xác định số oxi hoá
Cơ bản
	Nguyên tố tự do → số oxh = 0
(H₂, O₂, Na, Fe, S₈…)
	Ion đơn nguyên tử → số oxh = điện tích của ion
(Na⁺: +1, O²⁻: –2)
	O trong hợp chất → thường là –2
Ngoại lệ:
	Trong peroxit: –1 (H₂O₂)
	Trong OF₂: +2
	H trong hợp chất → thường là +1
Ngoại lệ:
	Hidrua kim loại (NaH, CaH₂): –1
	Các nguyên tố nhóm IA: +1, IIA: +2, IIIA: +3.
	Tổng số oxh của các nguyên tử trong phân tử bằng 0, trong ion bằng điện tích của ion.
Sâu
	Số oxi hoá không phải điện tích thật.
	Là một công cụ kế toán electron, dùng để “check” quá trình cho – nhận e.
II. PHẢN ỨNG OXI HOÁ – KHỬ
1. Định nghĩa
Oxi hoá:
	Mất electron
	Số oxh tăng
Khử:
	Nhận electron
	Số oxh giảm
Phản ứng oxi hoá – khử:
	Xảy ra đồng thời quá trình oxi hoá và khử.
	Electron dịch chuyển từ chất khử → chất oxi hoá.
2. Chất oxi hoá – chất khử
	Chất oxi hoá: nhận electron, làm chất khác bị oxi hoá
(KMnO₄, Cl₂, O₂, Fe³⁺,…)
	Chất khử: nhường electron, làm chất khác bị khử
(H₂, CO, Zn, Fe²⁺,…)
3. Nhận dạng phản ứng oxi hoá – khử
	Có sự thay đổi số oxi hoá.
	Thường đi kèm: tách khí, đổi màu, chuyển sản phẩm hoàn toàn mới.
	Các phản ứng nổi bật:
	Kim loại + acid
	Phi kim + kim loại
	Nhiều phản ứng vô cơ quan trọng: MnO₄⁻, Cr₂O₇²⁻,…
III. LẬP PHƯƠNG TRÌNH PHẢN ỨNG OXI HOÁ – KHỬ
Có 2 phương pháp chuẩn:
1. Phương pháp thăng bằng electron
Bước 1: Xác định số oxh của các nguyên tử thay đổi
Bước 2: Viết 2 bán phản ứng:
	Bán phản ứng oxi hoá
	Bán phản ứng khử
Bước 3: Nhân hệ số để số electron mất = nhận
Bước 4: Cân bằng các nguyên tố còn lại (O, H, …)
Bước 5: Kiểm tra điện tích và số nguyên tử.
Ví dụ nhanh
Phản ứng:
Fe²⁺ + MnO₄⁻ + H⁺ → Fe³⁺ + Mn²⁺ + H₂O
	Fe²⁺ → Fe³⁺: mất 1 e
	MnO₄⁻ → Mn²⁺: nhận 5 e
→ Nhân bán phản ứng Fe lên 5.
Kết quả cuối:
5Fe²⁺ + MnO₄⁻ + 8H⁺ → 5Fe³⁺ + Mn²⁺ + 4H₂O
2. Phương pháp ion–electron (trong môi trường)
	Môi trường axit: thêm H⁺ và H₂O
	Môi trường bazơ: thêm OH⁻ và H₂O
	Môi trường trung tính: giữ cân bằng trực tiếp
Phương pháp này thực chất là phiên bản “chuẩn hoá” của phương pháp thăng bằng electron.
3. Lỗi sai thường gặp của học sinh
	Cân bằng e xong quên cân bằng H, O.
	Nhầm số oxh do quên ngoại lệ O –1, H –1.
	Không kiểm tra điện tích tổng, dẫn đến sai dù số nguyên tử tưởng đúng.
IV. Ý NGHĨA CỦA OXI HOÁ – KHỬ
1. Trong hoá học
	Giải thích hầu hết phản ứng vô cơ quan trọng:
KMnO₄, Cr₂O₇²⁻, kim loại mạnh – yếu, phi kim hoạt động.
	Quyết định xu hướng phản ứng dựa vào thế oxi hoá – khử.
	Giúp dự đoán sản phẩm:
ví dụ: Fe²⁺ luôn bị oxi hoá → Fe³⁺ nếu gặp chất oxi hoá mạnh.
2. Trong đời sống – công nghiệp
	Ăn mòn kim loại → bản chất là oxi hoá.
	Chống oxy hoá trong thực phẩm, mỹ phẩm.
	Sản xuất kim loại: điện phân – luyện kim → toàn bộ là phản ứng redox.
	Hô hấp – quang hợp → chuỗi phản ứng oxi hoá – khử bậc cao.
	Pin điện hoá, acquy hoạt động dựa trên chuyển electron.
3. Ý nghĩa học thuật – thi cử
	Là nền tảng của hầu hết bài toán vô cơ:
	kim loại – dung dịch
	sự khử MnO₄⁻, Cr₂O₇²⁻
	SO₂, NO₂, Cl₂…
Nếu nắm chắc oxh–khử, bạn xử lý 80% dạng bài vô cơ một cách mượt mà.
CHƯƠNG 5 — NĂNG LƯỢNG HÓA HỌC
I. ENTHALPY TẠO THÀNH & BIẾN THIÊN ENTHALPY CỦA PHẢN ỨNG
1. Phản ứng tỏa nhiệt (exothermic)
Cơ bản
	Tỏa năng lượng → ΔH < 0.
	Sản phẩm có năng lượng thấp hơn chất phản ứng.
Ví dụ:
	Cháy CH₄, cháy C, trung hòa acid–baz.
Sâu
	Tỏa nhiệt mạnh → phản ứng có xu hướng tự xảy ra hơn (nhưng không đồng nghĩa với “tự xảy ra bắt buộc”, vì còn phụ thuộc entropy và Gibbs).
2. Phản ứng thu nhiệt (endothermic)
Cơ bản
	Hấp thụ năng lượng từ môi trường → ΔH > 0.
	Sản phẩm có năng lượng cao hơn chất ban đầu.
Ví dụ:
	Nhiệt phân CaCO₃
	Quang hợp
	Tan NH₄NO₃ vào nước (đá khô lạnh ngay)
3. Biến thiên enthalpy chuẩn của phản ứng — ΔH°reaction
Khái niệm
	Là biến thiên enthalpy khi phản ứng diễn ra ở điều kiện chuẩn:
T = 298 K, P = 1 atm, nồng độ = 1M.
Biểu diễn
	ΔH° có thể là:
	ΔH°_tỏa, ΔH°_thu
	ΔH°_cháy
	ΔH°_trung hòa
	ΔH°_phân hủy
Tất cả chỉ là các trường hợp đặc biệt của ΔH°reaction.
4. Enthalpy tạo thành — ΔH°f
Khái niệm
	ΔH°f của một chất là enthalpy của phản ứng tạo thành 1 mol chất từ các nguyên tố ở trạng thái chuẩn.
Trạng thái chuẩn
	O₂ (khí)
	N₂ (khí)
	H₂ (khí)
	C (graphite)
→ ΔH°f = 0 cho các nguyên tố ở trạng thái chuẩn.
Ví dụ
	C(graphite) + O₂(g) → CO₂(g)
⇒ ΔH°f(CO₂) = –393.5 kJ/mol
	½ H₂(g) + ½ Cl₂(g) → HCl(g)
⇒ ΔH°f(HCl) = –92.3 kJ/mol
5. Ý nghĩa của dấu và giá trị ΔH°298
Dấu
	ΔH° < 0 → phản ứng tỏa nhiệt
	ΔH° > 0 → phản ứng thu nhiệt
Giá trị
	Giá trị càng âm, phản ứng càng “ưa” tạo sản phẩm (năng lượng thấp).
	Giá trị càng dương, phản ứng càng “khó xảy ra” về mặt năng lượng (cần cấp nhiệt).
Nhầm lẫn học sinh hay mắc
	ΔH°KHÔNG quyết định hoàn toàn tính tự xảy ra.
(Phải kết hợp entropy → Gibbs: ΔG = ΔH – TΔS)
II. TÍNH BIẾN THIÊN ENTHALPY CỦA PHẢN ỨNG
Có 2 kỹ thuật quan trọng:
1. Tính ΔH dựa vào năng lượng liên kết
Ý tưởng
	Để phản ứng xảy ra:
(1) phá vỡ liên kết chất phản ứng → cần năng lượng
(2) tạo liên kết mới → toả năng lượng
Công thức
	/
	Nếu năng lượng tạo lớn hơn → ΔH < 0 (tỏa).
Ví dụ
H₂ + Cl₂ → 2HCl
	Phá: 1 H–H + 1 Cl–Cl
	Tạo: 2 liên kết H–Cl
→ Tính ra ΔH ≈ –184 kJ → tỏa nhiệt mạnh.
Sâu
	Đây là giá trị trung bình, nên tính theo liên kết không chính xác tuyệt đối, nhưng đủ tốt để dự đoán xu hướng.
2. Tính ΔH dựa vào enthalpy tạo thành (Hess’s Law)
Định luật Hess
	ΔH không phụ thuộc vào đường đi, chỉ phụ thuộc vào trạng thái đầu – cuối.
	Giống như “đi từ A → B bằng đường nào cũng vậy, tổng thay đổi năng lượng không đổi”.
Công thức chuẩn
 
Trong đó:
	ν = hệ số tỉ lượng trong PTHH.
Ví dụ
CH₄ + 2O₂ → CO₂ + 2H₂O
Cho:
	ΔH°f(CO₂) = –393.5
	ΔH°f(H₂O(l)) = –285.8
	ΔH°f(CH₄) = –74.8
 
→ Phản ứng tỏa nhiệt rất mạnh (phản ứng cháy).
CHƯƠNG 6 – TỐC ĐỘ PHẢN ỨNG HOÁ HỌC
I. Phương trình tốc độ phản ứng & hằng số tốc độ
1. Tốc độ phản ứng
a. Khái niệm chung
Tốc độ phản ứng cho biết chất phản ứng biến mất hoặc sản phẩm xuất hiện nhanh hay chậm theo thời gian.
Ví dụ:
 
b. Bản chất thật sự
Tốc độ phản ứng phụ thuộc vào tần suất va chạm và năng lượng va chạm đủ lớn (năng lượng hoạt hóa).
→ Va chạm nhiều + mạnh → phản ứng nhanh.
→ Ít va chạm hoặc năng lượng thấp → phản ứng chậm.
Đây là thứ giải thích gần như toàn bộ chương này.
2. Biểu thức tốc độ phản ứng
a. Dạng tổng quát
Phản ứng tổng quát
aA + bB → sản phẩm
Biểu thức tốc độ (dạng thực nghiệm)
v = k·[A]^m · [B]^n
Trong đó:
	k: hằng số tốc độ (phụ thuộc nhiệt độ, không phụ thuộc nồng độ)
	m, n: bậc phản ứng theo từng chất
	m + n = bậc phản ứng tổng
	m, n KHÔNG nhất thiết bằng hệ số trong phương trình hóa học.
b. Ý nghĩa
	Bậc phản ứng cho biết tốc độ phụ thuộc mạnh yếu vào nồng độ.
	k lớn → phản ứng nhanh.
	k tăng khi nhiệt độ tăng (theo Arrhenius).
c. Phương trình Arrhenius
k = A · e^(−Ea / (R·T))
	EaE_aEa: năng lượng hoạt hóa
	T ↑ → k ↑ rất mạnh → tốc độ tăng đột biến.
II. Các yếu tố ảnh hưởng đến tốc độ phản ứng
Đây là phần dễ ăn điểm nhất vì có thể suy luận từ đời sống.
1. Ảnh hưởng của nồng độ
	Nồng độ ↑ → nhiều phân tử hơn → va chạm nhiều → tốc độ ↑.
	Với khí: dùng áp suất thay cho nồng độ.
Trong biểu thức v = k·[A]^m · [B]^n tăng nồng độ chất nào thì tốc độ tăng theo đúng bậc của chất đó.
Ví dụ thực tế: oxy đậm đặc làm kim loại cháy sáng như đèn pha vì nồng độ O₂ cao.
2. Ảnh hưởng của nhiệt độ
Tăng 10°C → tốc độ thường tăng 2–4 lần.
Lý do: nhiều phân tử vượt qua năng lượng hoạt hóa EaE_aEa.
Giải thích bằng đồ thị phân bố Maxwell–Boltzmann: nhiệt độ tăng → “đuôi năng lượng cao” dài ra.
Kết luận: nhiệt độ là yếu tố mạnh nhất.
3. Ảnh hưởng của áp suất (với khí)
Áp suất ↑ → nồng độ khí ↑ → va chạm ↑ → tốc độ ↑.
Tương đương với việc “nén” các phân tử lại gần nhau.
4. Ảnh hưởng của bề mặt tiếp xúc
Rắn vụn, rắn bột phản ứng nhanh hơn rắn khối.
Ví dụ:
	Bột nhôm cháy bùng, nhôm nguyên khối không cháy.
	Than nghiền mịn dễ nổ bụi.
Bản chất: tăng diện tích tiếp xúc giữa các pha.
5. Chất xúc tác
a. Tác dụng
	Giảm năng lượng hoạt hóa EaE_aEa.
	Tăng tốc độ phản ứng lên nhiều lần.
	Không bị tiêu hao sau phản ứng.
b. Bản chất thật
Xúc tác tạo ra con đường phản ứng mới, với năng lượng thấp hơn.
c. Lưu ý
	Xúc tác không làm thay đổi hằng số cân bằng.
	Chỉ thay đổi tốc độ đạt cân bằng.
6. Ý nghĩa thực tiễn
	Công nghiệp: tối ưu tốc độ → tăng sản lượng → giảm chi phí.
	Môi trường: xúc tác trong bộ lọc khí thải.
	Sinh học: enzyme là xúc tác “đỉnh của đỉnh” (tăng tốc độ gấp triệu lần).
	Đời sống: nấu ăn tăng nhiệt độ để làm chín nhanh.
Nói thẳng: không hiểu tốc độ phản ứng thì không hiểu vì sao cả thế giới vẫn đang dùng xúc tác trong mọi ngành công nghiệp.
CHƯƠNG 7 – NGUYÊN TỐ NHÓM 7A (HALOGEN)
I. TÍNH CHẤT VẬT LÍ – HÓA HỌC CỦA CÁC ĐƠN CHẤT HALOGEN
1. Vị trí trong bảng tuần hoàn
	Thuộc nhóm VIIA (17).
	Gồm: F, Cl, Br, I, At, Ts (At & Ts không dùng thực tế).
	Thuộc loại phi kim mạnh, độ âm điện rất cao.
	Cấu hình chung lớp ngoài cùng: ns² np⁵ → thiếu 1 e để đạt bền.
→ Điều này giải thích: tính oxi hóa rất mạnh.
2. Trạng thái tự nhiên
Halogen cực hoạt động → không tồn tại dạng đơn chất ngoài thiên nhiên.
Tồn tại chủ yếu dưới dạng muối halide:
	F⁻: CaF₂ (fluorite)
	Cl⁻: NaCl (muối ăn), KCl
	Br⁻: nước biển → Br⁻ tương đối hiếm
	I⁻: muối iod của rong biển, NaI, KI
3. Cấu hình e lớp ngoài cùng – đặc điểm phân tử
a. Cấu hình ngoài
	F: 2s²2p⁵
	Cl: 3s²3p⁵
	Br: 4s²4p⁵
	I: 5s²5p⁵
→ 7 electron lớp ngoài cùng → dễ nhận 1 electron.
b. Phân tử
Tất cả halogen đều tồn tại dạng phân tử hai nguyên tử (X₂).
Liên kết X–X yếu dần khi đi xuống nhóm do kích thước tăng.
→ Tính oxi hóa giảm dần từ F₂ > Cl₂ > Br₂ > I₂.
4. Tính chất vật lí
Biến đổi theo chiều từ F → I cực kỳ đều:
Nguyên tố	Màu	Trạng thái	Mùi
F₂	vàng lục	khí	rất độc
Cl₂	vàng lục nhạt	khí	hắc, ngạt
Br₂	đỏ nâu	lỏng	bốc mùi mạnh
I₂	tím đen	rắn	thăng hoa tạo hơi tím
Xu hướng:
	Nhiệt độ nóng chảy, sôi: ↑ khi đi xuống nhóm
	Màu sẫm dần
	Độ tan trong nước ↓ nhưng tan tốt trong dung môi hữu cơ (CCl₄, toluen…)
5. Tính chất hóa học
a. Tính oxi hóa (quan trọng nhất)
	Do cấu hình ns² np⁵ → rất dễ nhận 1 e → X⁻
	Mức độ oxi hóa giảm dần:
F2>Cl2>Br2>I2F_2 > Cl_2 > Br_2 > I_2F2>Cl2>Br2>I2 
Ví dụ phản ứng:
	Với kim loại → muối halide
2Na+Cl2→2NaCl2Na + Cl_2  -> 2NaCl2Na+Cl2→2NaCl 
	Oxi hóa halide yếu hơn
Cl2+2Br−→2Cl−+Br2Cl_2 + 2Br^- → 2Cl^- + Br_2Cl2+2Br−→2Cl−+Br2 
	Với H₂ tạo hydrogen halide (HX)
	F₂, Cl₂ phản ứng mạnh
	Br₂ cần nhiệt
	I₂ phản ứng khó
H2+X2→2HX
b. Tính khử của halogen (yếu)
Chỉ I₂ có tính khử đáng kể (I₂ → I⁻).
6. Ứng dụng
	Cl₂: khử trùng nước, tẩy trắng, sản xuất PVC.
	F₂/ion F⁻: chống sâu răng (NaF), sản xuất Teflon, UF₆ (làm giàu uranium).
	Br₂: sản xuất thuốc trừ sâu, thuốc nhuộm, chất chống cháy.
	I₂: sát trùng, thuốc iod, tạo hợp chất hữu cơ iod.
Ý thẳng: Cl & F là hai halogen chi phối cả công nghiệp hóa chất hiện đại.
II. HYDROGEN HALIDE & PHẢN ỨNG HALIDE ION
1. Tính chất vật lí của hydrogen halide (HX)
HX gồm: HF, HCl, HBr, HI
	Ở điều kiện thường đều là khí
(HF có liên kết H nên có nhiệt độ sôi cao bất thường → gần như chất lỏng mờ mờ).
	Tan mạnh trong nước → tạo dung dịch acid mạnh, trừ HF đặc biệt.
2. Hydrohalic acid (dung dịch HX trong nước)
Mức độ acid tăng dần:
HF<HCl<HBr<HIHF < HCl < HBr < HIHF<HCl<HBr<HI 
	HCl, HBr, HI: acid mạnh gần như hoàn toàn ion hóa.
	HF: acid yếu (liên kết H–F rất bền + liên kết H giữa các phân tử HF).
Tính chất:
	Phản ứng với kim loại → muối halide + H₂
	Phản ứng với oxit, bazơ → muối + nước
	HCl đặc: tạo khói trắng với NH₃ (NH₄Cl)
3. Tính khử của halide ion
Halide ion: F⁻, Cl⁻, Br⁻, I⁻
Thứ tự tính khử:
I−>Br−>Cl−>>F−
Giải thích thẳng:
F⁻ “ôm e quá chặt” → KHÓ nhả → hầu như không khử được ai.
I⁻ dễ nhả e → khử mạnh.
Ví dụ:
	I⁻ bị oxi hóa bởi Cl₂
	Br⁻ cũng bị Cl₂ oxi hóa
	Không gì oxi hóa được F⁻ (trong nước).
4. Nhận biết halide ion
Dựa vào phản ứng với AgNO₃ trong môi trường hơi acid (HNO₃ loãng).
Ion	Kết tủa với Ag⁺	Màu	Tan trong NH₃ ?
Cl⁻	AgCl	trắng	tan hoàn toàn
Br⁻	AgBr	vàng nhạt	tan trong NH₃ đặc
I⁻	AgI	vàng đậm	không tan
Ghi nhớ siêu nhanh:
	Trắng – nhạt – đậm từ Cl → Br → I.
	Mức độ tan trong NH₃: Cl⁻ > Br⁻ > I⁻ (giảm dần).
	Lớp 11
CHỦ ĐỀ 1 – CÂN BẰNG HÓA HỌC
I. KHÁI NIỆM VỀ CÂN BẰNG HÓA HỌC
1. Phản ứng một chiều – thuận nghịch – cân bằng hóa học
a. Phản ứng một chiều
	Chỉ xảy ra theo một hướng.
	Chất phản ứng → sản phẩm hoàn toàn.
Ví dụ:
2Na+2H2O→2NaOH+H22Na + 2H_2O \rightarrow 2NaOH + H_22Na+2H2O→2NaOH+H2 
b. Phản ứng thuận nghịch
	Xảy ra đồng thời theo hai chiều:
A+B⇌C+DA + B \rightleftharpoons C + DA+B⇌C+D 
c. Cân bằng hóa học
	Trạng thái trong hệ đóng, khi tốc độ phản ứng thuận = tốc độ phản ứng nghịch.
	Nồng độ các chất không đổi, nhưng phản ứng vẫn diễn ra ở mức vi mô.
→ Đây là cân bằng động chứ không “đứng im”.
2. Hằng số cân bằng (K)
Với phản ứng tổng quát:
aA+bB⇌cC+dDaA + bB \rightleftharpoons cC + dDaA+bB⇌cC+dD 
Hằng số cân bằng:
K=[C]c[D]d[A]a[B]bK = \frac{[C]^c[D]^d}{[A]^a[B]^b}K=[A]a[B]b[C]c[D]d 
Ý nghĩa:
	K>>1K >> 1K>>1: cân bằng nghiêng về sản phẩm.
	K<<1K << 1K<<1: cân bằng nghiêng về chất ban đầu.
	K không đổi tại một nhiệt độ cố định.
→ Nhiệt độ là yếu tố duy nhất làm thay đổi K.
3. Sự chuyển dịch cân bằng (Nguyên lý Lê Châtelier)
Hệ cân bằng luôn chống lại sự tác động bên ngoài để khôi phục trạng thái cân bằng mới.
Các tác động gồm:
	Thay đổi nồng độ
	Thay đổi áp suất
	Thay đổi nhiệt độ
	Thêm/giảm chất xúc tác (không làm chuyển dịch)
4. Các yếu tố ảnh hưởng đến cân bằng
a. Thay đổi nồng độ
	Tăng chất nào → cân bằng dịch theo hướng tiêu thụ chất đó.
b. Thay đổi áp suất (chỉ áp dụng cho hệ có khí)
	Tăng áp suất → cân bằng dịch theo hướng ít mol khí hơn.
	Giảm áp suất → dịch theo hướng nhiều mol khí hơn.
c. Thay đổi nhiệt độ
Dựa vào bản chất của phản ứng:
	Phản ứng tỏa nhiệt: tăng T → dịch theo chiều nghịch.
	Phản ứng thu nhiệt: tăng T → dịch theo chiều thuận.
d. Chất xúc tác
	Không làm chuyển dịch cân bằng.
	Chỉ giúp hệ đạt cân bằng nhanh hơn.
II. CÂN BẰNG TRONG DUNG DỊCH NƯỚC
1. Sự điện li – chất điện li – chất không điện li
a. Sự điện li
Ion hóa hợp chất khi tan trong nước → tạo ion mang điện.
b. Chất điện li
	Cho dung dịch dẫn điện.
	Phân loại:
	Điện li mạnh (NaCl, HCl, HNO₃, NaOH…)
	Điện li yếu (CH₃COOH, NH₃, HF…)
c. Không điện li
Không tạo ion → dung dịch không dẫn điện.
Ví dụ: C₂H₅OH, đường, ure.
2. Thuyết Bronsted – Lowry về acid – base
Định nghĩa:
	Acid: chất cho proton (H⁺).
	Base: chất nhận proton (H⁺).
→ Acid – base liên hợp:
HA⇌H++A−HA 		 H^+ + A^-HA⇌H++A− 
HA là acid, A⁻ là base liên hợp.
Thuyết này rộng hơn Arrhenius (vì áp dụng được cho hệ không chứa nước).
3. Khái niệm pH – chỉ thị acid – base
a. pH
pH=−log⁡[H+]pH = -\log[H^+]pH=−log[H+] 
	pH < 7 : acid
	pH > 7 : base
	pH = 7 : trung tính
Dung dịch acid mạnh có pH cực thấp (0–1).
b. Chất chỉ thị acid – base
Đổi màu theo pH:
	Quỳ tím: đỏ (acid) – xanh (base)
	Phenolphthalein: không màu (acid) – hồng (base)
	Methyl orange: đỏ (acid) – vàng (base)
4. Chuẩn độ acid – base
Phương pháp xác định nồng độ dung dịch acid hoặc base bằng cách cho chúng phản ứng trung hòa với nhau.
Điểm tương đương:
Số mol H⁺ = số mol OH⁻.
Có thể dùng chỉ thị để nhận biết điểm tương đương:
	Dung dịch mạnh–mạnh → PHTH hoặc bất kỳ chỉ thị pH nào đều ổn
	Acid yếu – base mạnh → PHTH
	Base yếu – acid mạnh → methyl orange
5. Ý nghĩa thực tiễn cân bằng của ion Al³⁺, Fe³⁺ và CO₃²⁻
a. Al³⁺ và Fe³⁺ trong nước
	Al³⁺ + Fe³⁺ đều bị thủy phân mạnh
→ làm giảm pH dung dịch
→ tạo kết tủa dạng hydroxide:
Al3++3H2O⇌Al(OH)3↓+3H+Al^{3+} + 3H_2O <->  Al(OH)_3 + 3H^+Al3++3H2O⇌Al(OH)3↓+3H+ 
Fe³⁺ cũng tương tự.
Kết tủa Al(OH)₃, Fe(OH)₃ dùng trong xử lí nước vì hấp phụ tạp chất tốt.
b. CO₃²⁻ trong nước
CO₃²⁻ là base mạnh → nhận H⁺:
CO32−+H+⇌HCO3−CO_3^{2-} + H^+ <->  HCO_3^-CO32−+H+⇌HCO3− HCO3−+H+⇌CO2+H2OHCO_3^- + H^+ <->  CO_2 + H_2OHCO3−+H+⇌CO2+H2O 
Ý nghĩa:
	Tạo hệ đệm tự nhiên trong nước tự nhiên và máu.
	Ứng dụng trong nhận biết ion H⁺ (sủi bọt CO₂).
	Hệ cân bằng CO₃²⁻ – HCO₃⁻ – CO₂ chi phối độ cứng nước, quá trình giải phóng CO₂ trong nước khoáng, vôi hóa san hô…
CHƯƠNG 2 – NITROGEN VÀ SULFUR
I. ĐƠN CHẤT NITROGEN (N₂)
1. Trạng thái tự nhiên
	Chiếm 78% thể tích khí quyển.
	Trơ → tồn tại chủ yếu dạng N₂.
	Rất ít hợp chất nitrogen tồn tại tự nhiên vì N–N ba bền (liên kết ba).
2. Tính chất vật lí
	Khí không màu, không mùi, không vị.
	Rất khó hóa lỏng (do phân tử nhỏ, lực hút yếu).
	T tan rất thấp → dùng làm khí trơ, khí bảo quản.
3. Tính chất hóa học
Nitrogen gần như không phản ứng ở điều kiện thường vì:
	Liên kết ba N≡N có năng lượng rất lớn.
Chỉ phản ứng khi nhiệt độ cao, tia lửa, xúc tác:
Phản ứng với H₂
N2+3H2⇌2NH3N_2 + 3H_2 
(Có xúc tác Fe, T ~ 450–500°C)
Phản ứng với O₂
N2+O2→2NO
(Tia sét hoặc nhiệt độ rất cao)
Phản ứng với kim loại hoạt động mạnh
3Mg+N2→Mg3N2 
4. Quá trình tạo và cung cấp nitrate cho đất từ nước mưa
Cơ chế tự nhiên cực hay, ít người để ý:
	Tia sét → nhiệt độ cao →
N2+O2→2NO
	NO bị oxi hóa:
2NO+O2→2NO2 
	NO₂ tác dụng nước:
2NO2+H2O→HNO3+HNO2
	Acid yếu chảy xuống đất → tạo muối nitrate (NO₃⁻) cho cây:
HNO3+CaCO3→Ca(NO3)2+CO2+H2O
→ Đây là “bón phân từ trời”, giúp cây nhận nguồn nitơ tự nhiên.
5. Ứng dụng
	Tạo môi trường trơ cho sản xuất thép, chip, bảo quản thực phẩm.
	Tạo amonia → phân đạm (NH₄NO₃, ure…).
	Lỏng hóa (N₂ lỏng) dùng để làm lạnh sâu.
II. AMONIA VÀ CÁC HỢP CHẤT AMMONIUM
1. Cấu tạo phân tử NH₃
	N ở lai hóa sp³, 1 cặp e tự do.
	Phân tử hình chóp tam giác.
	Cực mạnh → dễ tạo liên kết hydrogen.
2. Tính chất của amonia (NH₃)
Vật lí
	Khí không màu, mùi khai.
	Tan mạnh trong nước → tạo dung dịch NH₃·H₂O (amoniac).
Hóa học
a. Tính base yếu
NH3+H2O⇌NH4++OH−
b. Tạo amoni clorua khói trắng
NH3+HCl→NH4Cl
c. Khử oxi
3CuO+2NH3→3Cu+N2+3H2O3
d. Tác dụng acid, muối
→ Tạo muối amonium (NH₄⁺).
3. Tổng hợp ammonia (Quá trình Haber)
Điều kiện:
	N₂ + H₂ (1:3)
	Xúc tác Fe
	450°C
	Áp suất 200–300 atm
Phản ứng:
N2+3H2⇌2NH3+Q
Ý nghĩa kinh tế cực lớn: nền tảng sản xuất phân đạm → nuôi sống nhân loại.
4. Muối ammonium
Tính chất chung
	Tan tốt trong nước.
	Bị nhiệt phân dễ dàng:
NH4NO3→N2O+2H2ONH_4NO_3 → N_2O + 2H_2ONH4NO3→N2O+2H2O 
	Muối ammonium với base mạnh (NH₄Cl, NH₄NO₃…) làm dung dịch có tính acid nhẹ:
NH4++H2O→NH3+H3O+
Một số muối quan trọng
	NH₄Cl
	(NH₄)₂SO₄
	NH₄NO₃ (phân đạm mạnh + có nguy cơ nổ)
5. Ứng dụng
	Sản xuất phân đạm (NH₃, NH₄NO₃, ure).
	Chất tẩy rửa, sản xuất nylon-6,6.
	Dùng trong lạnh công nghiệp.
III. CÁC HỢP CHẤT OXYGEN CỦA NITROGEN
1. Các oxide của nitrogen – Mưa acid
Các oxide:
	NO (nitơ oxit)
	NO₂ (nitơ dioxit)
	N₂O (khí cười)
	N₂O₃
	N₂O₅
NO & NO₂ quan trọng nhất.
Mưa acid
NO₂ + SO₂ là hai “thủ phạm chính”.
2NO2+H2O→HNO3+HNO2
pH mưa < 5,6 gọi là mưa acid.
Hậu quả:
	Ăn mòn kim loại
	Hủy hoại lá cây
	Axit hóa hồ → cá chết hàng loạt
	Ăn mòn tượng đá vôi (CaCO₃)
2. Nitric acid (HNO₃)
Tính chất hóa học mạnh nhất:
	Tính oxi hóa cực mạnh, ngay cả dung dịch loãng.
Ví dụ:
Cu+4HNO3(loa~ng)→Cu(NO3)2+2NO2+2H2O
Là acid mạnh → điện li hoàn toàn.
Ứng dụng
	Sản xuất phân đạm (NH₄NO₃).
	Sản xuất thuốc nổ (TNT).
	Tẩy rỉ kim loại.
3. Hiện tượng phú dưỡng
Do NO₃⁻, NH₄⁺, PO₄³⁻ từ phân bón/nước thải → tảo bùng phát.
Hậu quả:
	Tảo che ánh sáng → thực vật thủy sinh chết.
	Vi sinh vật phân hủy → tiêu thụ O₂ → cá chết.
	Nước hôi thối → mất cân bằng sinh thái.
IV. SULFUR (LƯU HUỲNH) & SULFUR DIOXIDE (SO₂)
1. Đơn chất lưu huỳnh (S)
Trạng thái tự nhiên
	Tồn tại dạng quặng: S, FeS₂, CaSO₄…
Tính chất vật lí
	Rắn màu vàng, không tan trong nước.
	Tan trong dung môi hữu cơ (CS₂).
Tính chất hóa học
	Tính oxi hóa và khử tùy điều kiện:
S+O2→SO2S + O_2 → SO_2S+O2→SO2 S+H2→H2SS + H_2 → H_2SS+H2→H2S 
2. Sulfur dioxide (SO₂)
Tính chất
	Khí không màu, mùi hắc, gây ngạt.
	Tính oxi hóa hoặc khử tùy phản ứng.
Ví dụ:
SO2+2H2S→3S+2H2O
Tính tẩy màu
Do khả năng khử chất màu → mất màu.
Ô nhiễm
	Gây mưa acid khi bị oxi hóa thành H₂SO₄.
	Hại phổi, cây cối.
V. SULFURIC ACID & MUỐI SULFATE
1. Sulfuric acid (H₂SO₄)
Tính chất đặc biệt
	Hút nước cực mạnh
	Oxi hóa mạnh khi đặc, nóng
	Acid mạnh → điện li mạnh
Tính háo nước
H2SO4đặc+đường→C+H2O
Tính oxi hóa
Cu+2H2SO4(đặc,noˊng)→CuSO4+SO2+2H2O
Ứng dụng
	Sản xuất phân bón (superphotphat).
	Sản xuất pin, tẩy rỉ, luyện kim.
2. Muối sulfate
Tính chất
	Tan: Na₂SO₄, K₂SO₄, (NH₄)₂SO₄
	Không tan: BaSO₄, PbSO₄ (ứng dụng nhận biết ion SO₄²⁻)
Ba2++SO42−→BaSO4↓ 
Ứng dụng
	BaSO₄: chụp X-quang tiêu hóa (không tan → an toàn).
	Na₂SO₄: sản xuất thủy tinh.
	(NH₄)₂SO₄: phân bón.
CHƯƠNG 3: ĐẠI CƯƠNG HÓA HỌC HỮU CƠ
I. HỢP CHẤT HỮU CƠ VÀ HOÁ HỌC HỮU CƠ
1. Hợp chất hữu cơ và hoá học hữu cơ
Hợp chất hữu cơ là gì?
	Chủ yếu chứa C, thường kèm H, O, N, S, halogen…
	Liên kết đặc trưng: liên kết cộng hoá trị C–C, C–H và các liên kết C–X (X = O, N, Cl,...).
	Dễ biến đổi, rất đa dạng → hàng chục triệu chất.
Đặc điểm chung
	Nhiệt độ nóng chảy – sôi thường thấp hơn vô cơ.
	Dễ cháy, tạo CO₂ và H₂O.
	Ứng dụng cực rộng: thuốc, nhựa, polymer, xăng – dầu, thực phẩm, sinh học…
Hoá học hữu cơ
	Ngành nghiên cứu cấu tạo – tính chất – điều chế – ứng dụng của hợp chất hữu cơ.
	Tần suất xuất hiện trong đời sống áp đảo vô cơ → học là thấy thực tế ngay.
2. Nhóm chức và phổ hồng ngoại (IR)
Nhóm chức
	Phần “hoạt động”, quyết định tính chất đặc trưng của phân tử.
	Một số nhóm chức quan trọng nhất:
	–OH (alcohol, phenol)
	–CHO (aldehyde)
	>C=O (ketone)
	–COOH (carboxylic acid)
	–NH₂ (amine)
	–O– (ether)
	–C≡C–, –C=C– (liên kết bội)
Nhóm chức giống nhau → tính chất tương tự, dù mạch carbon khác nhau.
Phổ IR (Infrared) – bản chất cực ngắn
	Dùng để nhận dạng nhóm chức dựa vào dao động liên kết.
	Vài “đỉnh” IR cần nhớ:
	O–H: rộng, mạnh, ~3200–3600 cm⁻¹
	C=O: đỉnh sắc, ~1700 cm⁻¹
	N–H: 3300–3500 cm⁻¹
	C≡C/C≡N: 2100–2260 cm⁻¹
→ Phổ IR là “dấu vân tay” của phân tử: dựa vào nó biết chất có nhóm chức gì.
II. CÁC PHƯƠNG PHÁP TÁCH – TINH CHẾ HỢP CHẤT HỮU CƠ
1. Chưng cất
Tách chất dựa vào điểm sôi khác nhau.
Có 2 kiểu:
	Chưng cất thường: dùng khi điểm sôi khác nhau nhiều (≥ 25 °C).
	Chưng cất phân đoạn: dùng khi điểm sôi gần nhau.
Ứng dụng: tách ethanol khỏi nước, tách các phân đoạn dầu mỏ.
2. Chiết (Extraction)
	Dựa vào độ tan khác nhau của chất trong hai dung môi không trộn lẫn (thường nước – dung môi hữu cơ).
	Dụng cụ: phễu chiết.
	Quy tắc: “like dissolves like” → chất hữu cơ không phân cực tan tốt trong dung môi hữu cơ (hexane, ether…).
3. Kết tinh
	Dùng để làm tinh khiết chất rắn.
	Bản chất: chất tan tốt khi nóng, kém tan khi lạnh → làm nguội dung dịch → tinh thể kết lại.
	Tách tạp chất tan hoặc tạp chất không tạo tinh thể cùng dạng.
4. Sắc ký cột (Column Chromatography)
	Dựa vào độ bám dính khác nhau của các chất lên pha tĩnh (silica gel).
	Dùng để tinh chế hợp chất hữu cơ tinh vi, tách hỗn hợp phức tạp.
Ứng dụng: tách sắc tố thực vật, tách sản phẩm phản ứng hữu cơ.
III. CÔNG THỨC PHÂN TỬ HỢP CHẤT HỮU CƠ
1. Xác định phân tử khối
Dựa vào:
	Phân tích thành phần % khối lượng.
	Kết quả các phương pháp đo độ bay hơi, áp suất hơi, hoặc MS (khối phổ).
2. Công thức phân tử
Quy trình chuẩn:
	Từ % khối lượng → công thức đơn giản nhất (CTĐGN).
	Tính M thực tế → nhân bội → công thức phân tử (CTPT).
Ví dụ nhanh:
% C = 40%, H = 6.67%, O = 53.33% → CTĐGN: CH₂O
Nếu M = 180 → C₆H₁₂O₆.
IV. CẤU TẠO HOÁ HỌC HỢP CHẤT HỮU CƠ
1. Thuyết cấu tạo hoá học (A. M. Butlerov)
Các luận điểm cốt lõi:
	Các nguyên tử trong phân tử liên kết theo một trật tự xác định → gọi là cấu tạo.
	Tính chất của chất phụ thuộc vào thành phần và cấu tạo.
	Cùng CTPT nhưng cấu tạo khác → tính chất khác (đồng phân).
→ Đây là nền tảng để hiểu toàn bộ hóa học hữu cơ.
2. Đồng đẳng và đồng phân
Dãy đồng đẳng
	Các chất có cùng nhóm chức, công thức dạng CnH₂n+₂, CnH₂n,...
	Tính chất hoá học tương tự nhau, nhưng tính chất vật lí (sôi, nóng chảy) thay đổi đều.
Ví dụ:
	Ankan: CH₄, C₂H₆, C₃H₈,...
Đồng phân
Là hiện tượng CTPT giống nhau nhưng cấu tạo khác nhau → tính chất khác nhau.
Các loại:
	Đồng phân cấu tạo
	Mạch carbon (thẳng – nhánh)
	Vị trí nhóm chức
	Khung carbon
	Đồng phân hình học (cis–trans)
	Đồng phân quang học (trái – phải, R/S) – sau lớp 11.
→ Đồng phân là “chủ đề vua” của hữu cơ, xuất hiện trong mọi dạng bài.
CHƯƠNG 4: HYDROCARBON
I. ALKANE (ANE)
1. Khái niệm
	Alkane là hydrocarbon no, công thức chung CnH₂n+₂.
	Chỉ chứa liên kết đơn (σ) → rất kém hoạt động.
→ Được xem là “xương sống” của hóa hữu cơ. Nền tảng của dầu mỏ.
2. Danh pháp
a. Danh pháp thường (gốc – chức)
	Metan, etan, propan, butan, pentan,...
b. Danh pháp IUPAC
	Chọn mạch carbon dài nhất.
	Đánh số từ đầu gần nhánh nhất.
	Gọi tên theo cấu trúc:
	Số chỉ vị trí nhánh – tên nhánh – tên mạch chính – an.
Ví dụ:
3-methylpentane, 2,2-dimethylbutane.
3. Tính chất vật lí
	Khí: C₁ – C₄
	Lỏng: C₅ – C₁₇
	Rắn: > C₁₇
	Không tan trong nước (kị nước), tan trong dung môi hữu cơ.
→ Nhìn chung: mạch càng dài → sôi càng cao.
4. Tính chất hoá học
Alkane rất trơ, nhưng vẫn có vài phản ứng quan trọng:
a. Phản ứng thế halogen (clo hóa, brom hóa)
Điều kiện: ánh sáng hoặc t°
VD: CH₄ + Cl₂ → CH₃Cl + HCl
Cơ chế: gốc tự do (radical).
b. Phản ứng cháy
Tạo CO₂ + H₂O, tỏa nhiều nhiệt → nhiên liệu quan trọng.
c. Phản ứng cracking (bẻ gãy mạch)
Điều kiện: 500–700 °C, xúc tác.
Tách alkane lớn thành alkene + alkane nhỏ.
d. Phản ứng isomer hóa
Chuyển mạch thẳng → nhánh (xăng cháy tốt hơn).
5. Ứng dụng và điều chế công nghiệp
Ứng dụng
	Thành phần chính của khí thiên nhiên (CH₄) và xăng/dầu.
	Nguyên liệu sản xuất H₂, NH₃, alcohol, polymer…
	Methane → nguyên liệu cho ngành điện, gốm, thép.
Điều chế công nghiệp
	Tách từ dầu mỏ qua chưng cất phân đoạn.
	Hydro hóa alkene:
C₂H₄ + H₂ → C₂H₆.
	Khử CO, CO₂ bằng H₂ trong các quy trình xử lý khí.
II. HYDROCARBON KHÔNG NO: ALKENE & ALKYNE
1. Khái niệm
	Alkene: chứa ít nhất 1 liên kết đôi C=C, công thức: CnH₂n.
	Alkyne: chứa ít nhất 1 liên kết ba C≡C, công thức: CnH₂n−2.
Độ hoạt động: alkyne > alkene > alkane.
2. Danh pháp
Alkene
	Mạch chính là mạch chứa liên kết đôi.
	Đánh số từ phía gần liên kết đôi.
	Tên: vị trí liên kết đôi + tên mạch + ene.
Ví dụ: but-2-ene, prop-1-ene.
Alkyne
	Tên: vị trí liên kết ba + tên mạch + yne.
	Ví dụ: but-1-yne, propyne.
3. Đồng phân hình học (cis–trans / E–Z)
Chỉ có ở alkene khi:
	Liên kết đôi C=C.
	Mỗi carbon của liên kết đôi gắn với 2 nhóm khác nhau.
	cis (cùng phía) → phân cực hơn, sôi cao hơn.
	trans (đối xứng) → bền hơn, sôi thấp hơn.
Alkyne không có đồng phân cis–trans vì liên kết ba thẳng 180°.
4. Tính chất vật lí
	Một số nhỏ → khí (C₂–C₄)
	Trung bình → lỏng (C₅–C₁₆)
	Dài → rắn
	Không tan trong nước.
Tương tự alkane nhưng phân cực hơi cao hơn.
5. Tính chất hoá học
Liên kết đôi/bộ ba có vùng electron giàu, nên chủ yếu phản ứng cộng.
a. Phản ứng cộng H₂
Alkene → alkane
Alkyne → alkene → alkane
b. Phản ứng cộng halogen (Cl₂, Br₂)
	Nhận biết liên kết đôi: dung dịch Br₂ bị mất màu nhanh.
c. Phản ứng cộng HX (HCl, HBr)
Theo quy tắc Markovnikov: H ưu tiên vào carbon đã nhiều H hơn.
d. Phản ứng trùng hợp
	Ethene → polyethene (PE)
	Propene → PP
→ Ngành nhựa dựa chủ yếu vào alkene.
e. Tính acid nhẹ của alkyne đầu mạch
RC≡CH + Na → RC≡CNa + ½H₂
6. Ứng dụng và điều chế
Ứng dụng
	Ethene: sản xuất nhựa PE, rượu etylic, ethylene oxide.
	Propene: PP, cumene → phenol.
	Acetylene (C₂H₂): hàn cắt kim loại, điều chế nhựa PVC.
Điều chế
	Cracking alkane.
	Khử H alcohol (đun nóng, xúc tác).
	Điều chế acetylene: CaC₂ + 2H₂O → C₂H₂ + Ca(OH)₂.
III. ARENE (HYDROCARBON THƠM)
1. Khái niệm
Arene là các hydrocarbon có vòng benzen (hoặc nhiều vòng).
Ví dụ: benzen, toluen, xylene, naphtalen.
Benzen có cấu trúc đặc biệt:
	Vòng 6 cạnh phẳng.
	Các electron π phân bố đều → tính thơm → rất bền.
2. Tính chất vật lí
	Benzen: chất lỏng, không màu, dễ bay hơi, mùi thơm đặc trưng.
	Không tan trong nước.
	Dễ cháy, tạo khói đen (vì nhiều carbon).
3. Tính chất hoá học
Khác với alkene:
	Benzen không thích cộng, vì cộng phá vỡ tính thơm.
	Chủ yếu phản ứng thế.
Các phản ứng quan trọng:
a. Thế halogen
C₆H₆ + Br₂ → C₆H₅Br + HBr (xúc tác FeBr₃)
b. Thế nitro hóa
C₆H₆ + HNO₃ → C₆H₅NO₂ + H₂O (xúc tác: H₂SO₄ đặc)
c. Thế ankyl hóa (Friedel–Crafts)
C₆H₆ + CH₃Cl → C₆H₅CH₃ + HCl (AlCl₃)
d. Cháy
Tạo nhiều muội than.
4. Ứng dụng và điều chế
Ứng dụng
	Nguyên liệu hóa dầu cực quan trọng:
	Benzen → styren → nhựa PS
	Toluen → TNT
	Xylene → polyester
	Sản xuất thuốc, phẩm nhuộm, polymer, dược liệu.
Điều chế công nghiệp
	Tách từ dầu mỏ (reforming).
	Chuyển hóa alkane → arene bằng xúc tác và nhiệt độ cao.
	Trực tiếp từ than đá → nhựa than đá.
CHƯƠNG 5 — DẪN XUẤT HALOGEN – ALCOHOL – PHENOL
I. DẪN XUẤT HALOGEN (HALOGENOALCAN / HALOGENOBENZEN)
1. Khái niệm
	Là hợp chất hữu cơ trong phân tử có nguyên tử Halogen (F, Cl, Br, I) liên kết với mạch carbon.
	Công thức dạng: R–X (với X = halogen).
2. Đồng phân & danh pháp
a. Đồng phân
	Đồng phân mạch carbon.
	Đồng phân vị trí của halogen.
	Đồng phân nhóm chức (đối với halogen gắn vào vòng benzene → halogenobenzen).
b. Danh pháp
	Tên IUPAC: Tên ankyl + halogen
Ví dụ: CH₃–Cl: clorometan, C₂H₅–Br: brometan.
	Với vòng benzen: clorobenzen, bromobenzen.
3. Tính chất vật lí
	Thường là chất lỏng hoặc rắn (trừ dẫn xuất F & Cl mạch ngắn).
	Không tan trong nước, tan tốt trong dung môi hữu cơ.
	Nhiệt độ sôi tăng khi: mạch dài hơn, halogen nặng hơn.
4. Tính chất hoá học
a. Phản ứng thế (quan trọng nhất)
	Thế bởi nhóm OH
R–X + NaOH (dd) → R–OH + NaX
→ tạo alcohol.
b. Phản ứng với kim loại (Mg, Na)
	Điều chế Grignard:
R–X + Mg → R–Mg–X.
c. Phản ứng loại HX
	Tạo liên kết đôi:
R–CH₂–CH₂–X + KOH (cồn) → anken + KX + H₂O.
5. Ứng dụng
	Dung môi công nghiệp (chloroform, CCl₄…).
	Nguyên liệu sản xuất polymer (PVC từ CH₂=CH–Cl).
	Điều chế thuốc nhuộm, dược phẩm.
	Điều chế hợp chất Grignard → tổng hợp hữu cơ nâng cao.
II. ALCOHOL
1. Khái niệm & cấu trúc
	Alcohol là hợp chất hữu cơ chứa nhóm hydroxyl –OH gắn vào carbon no (sp³).
	Công thức: R–OH.
	Phân loại theo: số nhóm OH (mono/di/poly), bậc của carbon gắn OH (1°, 2°, 3°).
2. Đồng phân & danh pháp
a. Đồng phân
	Đồng phân mạch carbon.
	Đồng phân vị trí nhóm –OH.
	Đồng phân nhóm chức (với ete).
b. Danh pháp
	Số vị trí OH + tên mạch chính + ol
Ví dụ: CH₃–CH₂–OH: etanol,
CH₃–CH(OH)–CH₃: propan-2-ol.
3. Tính chất vật lí
	Nhẹ: chất lỏng, tan tốt trong nước (do liên kết H).
	Càng nhiều C → tan giảm.
	Nhiệt độ sôi cao hơn ankan tương ứng vì liên kết H mạnh.
4. Tính chất hoá học
a. Tính axit yếu
	Tác dụng Na kim loại:
2R–OH + 2Na → 2R–O⁻Na⁺ + H₂↑.
b. Phản ứng với HX (HCl, HBr)
	R–OH + HX → R–X + H₂O.
c. Tính oxi hoá
	Bị oxi hoá tuỳ bậc:
	Bậc 1 → anđehit → axit.
	Bậc 2 → xeton.
	Bậc 3 → không bị oxi hóa (không có H liên kết carbon mang OH).
d. Phản ứng tách nước
	Tạo ETE (140°C, H₂SO₄ đặc):
2R–OH → R–O–R + H₂O.
	Tạo ANKEN (170°C, H₂SO₄ đặc):
R–CH₂–CH₂–OH → anken + H₂O.
5. Ứng dụng & điều chế
a. Ứng dụng
	Etanol: dung môi, nhiên liệu sinh học, sát khuẩn.
	Glycerol: giữ ẩm, mỹ phẩm, thuốc súng không khói.
b. Điều chế
	Thủy phân dẫn xuất halogen: R–X + NaOH (dd).
	Lên men rượu: đường → etanol + CO₂.
	Hidrat hoá anken: anken + H₂O (xúc tác acid).
III. PHENOL
1. Khái niệm & cấu trúc
	Phenol là hợp chất có nhóm –OH gắn trực tiếp vào vòng benzen.
	Công thức: C₆H₅–OH (phenol đơn giản nhất).
	Tính axit của phenol mạnh hơn alcohol rõ rệt vì vòng thơm hút electron → O–H phân cực mạnh.
2. Tính chất vật lí
	Chất rắn trắng, độc, có mùi đặc trưng.
	Tan kém trong nước nhưng tan trong kiềm mạnh → tạo phenolat.
3. Tính chất hoá học
a. Tính axit
	Phản ứng với NaOH (alcohol không làm được):
C₆H₅–OH + NaOH → C₆H₅–O⁻Na⁺ + H₂O.
b. Tính thế trên vòng benzen
	Nhóm –OH hoạt hoá vòng → ưu tiên thế ortho và para.
	Ví dụ: + Br₂ → 2,4,6-tribromophenol (kết tủa trắng).
c. Tính tạo este
	Phenol + anhiđrit axetic → phenyl axetat (tạo mùi thơm).
4. Ứng dụng & điều chế
a. Ứng dụng
	Sản xuất nhựa phenol–formaldehyde (nhựa Bakelite).
	Chất sát khuẩn (nồng độ thấp).
	Nguyên liệu sản xuất phẩm nhuộm, dược phẩm.
b. Điều chế
	Oxi hóa cumen (quá trình công nghiệp).
	Từ muối diazoni của anilin.
CHƯƠNG 6 — HỢP CHẤT CARBONYL (ALDEHYDE – KETONE) & CARBOXYLIC ACID
I. HỢP CHẤT CARBONYL (C=O)
1. Khái niệm & đặc điểm liên kết
	Hợp chất carbonyl gồm andehit (–CHO) và xeton (>C=O).
	Nhóm chức quan trọng: C=O.
	Liên kết C=O phân cực mạnh vì O hút electron → carbon mang điện dương → rất dễ bị tấn công bởi tác nhân nucleophile.
	Đó là lý do các phản ứng của carbonyl đều xoay quanh tấn công vào C⁺ của C=O.
Phân biệt:
	Aldehyde: –CHO ở đầu mạch → dễ bị oxi hoá.
	Ketone: C=O nằm giữa mạch → bền hơn, khó oxi hoá.
2. Danh pháp
a. Aldehyde
	Tên mạch chính + al
CH₃–CHO: etanol (acetalđehit).
CH₃–CH₂–CHO: propanal.
b. Ketone
	Tên mạch chính + số vị trí + one
CH₃–CO–CH₃: propanon (axeton).
CH₃–CO–C₂H₅: butan-2-on.
3. Tính chất vật lí
	Thường là chất lỏng dễ bay hơi (đặc biệt aldehyde).
	Mùi đặc trưng (formaldehyde: hăng, acetalđehit: hăng chua).
	Tan tốt trong nước ở mạch ngắn do tạo liên kết H với nước.
	Nhiệt độ sôi: thấp hơn alcohol tương ứng vì không có liên kết H giữa các phân tử.
4. Tính chất hoá học
Tất cả xoay quanh nhóm C=O dễ bị tấn công.
a. Phản ứng oxy hoá (quan trọng)
	Aldehyde bị oxi hoá dễ dàng → axit carboxylic:
R–CHO + [O] → R–COOH.
	Ketone không bị oxi hoá bởi tác nhân thường → bền vững hơn.
b. Phản ứng khử
	Khử đến alcohol bậc 1 hoặc 2:
Aldehyde → alcohol bậc 1
Ketone → alcohol bậc 2.
c. Phản ứng cộng H₂
R–CO–R' + H₂ (Ni) → R–CH(OH)–R'.
d. Phản ứng tráng bạc (phân biệt aldehyde)
	R–CHO + 2[Ag(NH₃)₂]⁺ → R–COO⁻ + 2Ag↓ + 2NH₃ + H₂O.
	Ketone: không phản ứng.
e. Phản ứng với HCN (cộng nucleophile)
R–CO–R' + H–C≡N → R–C(OH)(CN)–R'.
f. Phản ứng với alcohol
	Tạo acetal, hemiactal (lớp 12 sẽ học kỹ hơn).
5. Ứng dụng
	Formaldehyde: sản xuất nhựa, chất bảo quản, sát khuẩn (nhưng độc).
	Acetaldehyde: nguyên liệu hóa công (nhựa, acid acetic).
	Acetone: dung môi kinh điển, tẩy rửa phòng thí nghiệm, mỹ phẩm.
6. Điều chế
	Oxi hoá alcohol:
Alcohol bậc 1 → aldehyde.
Alcohol bậc 2 → ketone.
	Oxi hoá nhẹ anken (manganat VII).
	Tách hydro carbonyl hóa trong công nghiệp.
II. CARBOXYLIC ACID (AXIT CACBOXYLIC)
1. Khái niệm – cấu trúc – danh pháp
Khái niệm
	Hợp chất hữu cơ chứa nhóm –COOH.
Cấu trúc
	Nhóm –COOH gồm carbonyl (C=O) + hydroxyl (–OH).
	Mang tính axit khá mạnh trong hữu cơ vì nhóm C=O hút electron làm H dễ tách.
Danh pháp
	Mạch chính + oic acid
CH₃–COOH: axit etanoic (giấm).
C₂H₅–COOH: axit propanoic.
	Tên thông dụng: formic (HCOOH), acetic (CH₃COOH), benzoic (C₆H₅COOH).
2. Tính chất vật lí
	Chất lỏng/ rắn, mùi chua, nóng rát.
	Có nhiệt độ sôi cao vì liên kết H rất mạnh.
	Tan tốt trong nước (mạch ngắn).
	Axit mạnh hơn phenol, alcohol.
3. Tính chất hoá học
Tất cả xoay quanh tính axit và nhóm C=O – OH.
a. Tính axit
Phản ứng với:
	Kim loại: 2R–COOH + 2Na → 2R–COONa + H₂↑
	Bazơ, oxit bazơ → muối + nước
	Muối của axit yếu hơn → phản ứng trao đổi.
b. Phản ứng tạo este (quan trọng nhất)
R–COOH + R'–OH ⇌ R–COO–R' + H₂O (H₂SO₄ đặc, đun nóng).
c. Phản ứng khử
	Khử → alcohol bậc 1 (qua aldehyde trung gian).
d. Phản ứng thế trên vòng (với axit thơm)
	Axit benzoic tham gia phản ứng thế electrophile trên vòng giống benzen nhưng ít hoạt hoá (nhóm –COOH hút electron).
4. Điều chế
	Oxi hoá aldehyde hoặc alcohol bậc 1:
R–CH₂–OH → R–CHO → R–COOH.
	Oxi hoá ankan, anken (công nghiệp).
	Quá trình lên men: etanol → axit acetic.

	Lớp 12 
CHƯƠNG 1 — ESTER – LIPID, XÀ PHÒNG VÀ CHẤT GIẶT RỬA
I. ESTER – LIPID
1. Ester
a. Khái niệm
	Ester là hợp chất hữu cơ có dạng:
R–COO–R’
→ Sinh ra khi acid carboxylic + alcohol (phản ứng ester hoá).
b. Đặc điểm cấu tạo
	Nhóm chức: –COO– (một phần giống carbonyl, một phần giống ether).
	C=O trong ester phân cực → dễ bị tấn công nucleophile ở phản ứng thuỷ phân.
c. Danh pháp
	Tên gốc acid → “-oat”.
	Tên gốc alcohol → đứng sau.
Ví dụ: CH₃COOCH₃ → metyl axetat.
d. Tính chất vật lí
	Thường là chất lỏng, mùi thơm (chuối, dứa, táo…).
	Ít tan trong nước, nhẹ hơn nước.
e. Tính chất hóa học
	Phản ứng thủy phân ester
	Trong môi trường acid (thuận nghịch):
R–COOR’ + H₂O ⇌ R–COOH + R’–OH
	Trong môi trường kiềm (không thuận nghịch – xà phòng hóa):
R–COOR’ + NaOH → R–COONa + R’–OH
	Phản ứng cháy → CO₂ + H₂O (giống các chất hữu cơ khác).
	Phản ứng với alcohol (thay nhóm R’) – dùng trong tổng hợp hữu cơ.
f. Ứng dụng
	Mùi thơm: hương liệu thực phẩm.
	Dung môi: sơn, mực in (ethyl acetate).
	Nguyên liệu sản xuất chất dẻo, resin.
2. Chất béo (lipid đơn giản – triglyceride)
a. Khái niệm
	Chất béo là triester của glycerol và các acid béo (R–COOH dài).
CH₂–OOC–R
CH –OOC–R
CH₂–OOC–R
b. Phân loại
	Dầu: nhiều gốc acid béo không no → lỏng.
	Mỡ: nhiều gốc acid béo no → rắn.
c. Tính chất hóa học
	Thủy phân (xà phòng hóa)
	Trong kiềm → xà phòng + glycerol:
Chất béo + 3NaOH → 3RCOONa + glycerol.
	Cộng H₂ (chuyển hóa dầu → mỡ nhân tạo)
	Dầu + H₂ (Ni) → mỡ rắn.
→ Sản xuất bơ thực vật.
	Oxi hoá – ôi dầu mỡ
Gốc không no dễ bị oxi hoá → tạo peroxit → hỏng.
d. Ứng dụng
	Thực phẩm, sản xuất xà phòng, mỹ phẩm, dầu gội, bơ thực vật.
II. XÀ PHÒNG VÀ CHẤT GIẶT RỬA
1. Khái niệm – đặc điểm cấu tạo – tính chất giặt rửa
a. Xà phòng
	Muối natri hoặc kali của acid béo: R–COONa, R–COOK.
	Gốc R dài → kị nước; nhóm –COO⁻ → ưa nước.
→ Hoạt động bề mặt: tạo micelle cuốn dầu mỡ → rửa sạch.
b. Chất giặt rửa tổng hợp (detergent)
	Không phải muối acid béo.
	Nhóm phân cực thường là –SO₃⁻Na⁺ (linear alkylbenzene sulfonate).
	Ưu điểm ăn đứt xà phòng:
	Dùng tốt nước cứng → không tạo cặn Ca²⁺, Mg²⁺.
	Tạo bọt mạnh, bền.
c. Cơ chế giặt rửa
	Phân tử gồm hai phần:
	Đầu ưa nước (–COO⁻ hoặc –SO₃⁻).
	Đuôi kị nước (chuỗi hydrocarbon).
	Chúng gom chất bẩn dầu mỡ thành micelle → nước kéo đi.
2. Phương pháp sản xuất
a. Xà phòng
	Xà phòng hóa chất béo bằng NaOH hoặc KOH:
Chất béo + kiềm → xà phòng + glycerol.
	Sau đó: cô → làm bánh hoặc lỏng.
b. Chất giặt rửa tổng hợp
	Alkylbenzen + sulfon hoá → alkylbenzene sulfonic acid → trung hòa bằng NaOH → LAS sodium (chất giặt).
	Thêm phụ gia: hương, enzyme, chất làm mềm nước.
3. Sử dụng hợp lí, an toàn
	Không dùng quá liều → gây ô nhiễm do LAS khó phân huỷ.
	Tránh chất tẩy mạnh lên da → gây kích ứng.
	Không xả trực tiếp ra ao hồ (gây phú dưỡng).
	Ưu tiên detergent phân hủy sinh học.
	Bảo quản khô, tránh ẩm (xà phòng dễ bị nhớt).
	Không trộn xà phòng + thuốc tẩy chứa chlorine → tạo khí độc.
CHƯƠNG 2 – CARBOHYDRATE
I. GLUCOSE VÀ FRUCTOSE
1. Khái niệm – phân loại carbohydrate
a. Carbohydrate là gì?
	Hợp chất hữu cơ có công thức chung gần giống C_n(H₂O)_m
	Gồm 3 nhóm chính:
b. Phân loại
	Monosaccharide (đường đơn)
	Không thuỷ phân được nữa.
	Ví dụ: glucose, fructose, galactose.
	Disaccharide (đường đôi)
	Thủy phân tạo 2 monosaccharide.
	Ví dụ: saccharose, maltose, lactose.
	Polysaccharide (đa đường)
	Polyme của glucose.
	Ví dụ: tinh bột, cellulose, glycogen.
Điểm cốt lõi
Carbohydrate là “đường – bột” của hóa hữu cơ:
➡ cấu trúc dựa trên vòng pyranose (6 cạnh) hoặc furanose (5 cạnh),
➡ cực nhiều nhóm –OH → tính chất hóa học xoay quanh phản ứng alcohol + carbonyl ẩn.
2. Glucose và fructose
a. Glucose
	Công thức phân tử: C₆H₁₂O₆
	Là aldohexose (đường 6C có nhóm –CHO)
	Tồn tại chủ yếu dạng vòng pyranose.
	Có trong nho, máu, mật ong.
b. Fructose
	Công thức: C₆H₁₂O₆ nhưng là ketohexose (có nhóm C=O ở C2).
	Chủ yếu tồn tại dạng vòng furanose.
	Có trong mật ong, trái cây ngọt.
c. Tính chất hóa học chung của glucose & fructose
	Tính khử (đặc biệt glucose)
	Khử Cu(OH)₂ → Cu₂O đỏ gạch.
	Do tồn tại dạng mạch hở có nhóm –CHO.
	Tác dụng với Cu(OH)₂ ở nhiệt độ thường
	Tạo dung dịch xanh lam trong → phức đồng–glucose.
	Oxi hóa
	Oxi hóa mềm → acid gluconic.
	Oxi hóa mạnh → acid saccharic.
	Khử
	→ sorbitol (dùng trong công nghiệp thực phẩm).
d. Glucose ↔ Fructose (chuyển hoá)
Trong kiềm nhẹ, glucose và fructose chuyển hóa qua lại (isomer hóa).
→ Đây là lý do fructose cũng có thể cho phản ứng tráng bạc dù là cetose.
II. SACCHAROSE VÀ MALTOSE
1. Trạng thái tự nhiên – cấu tạo
a. Saccharose (đường mía)
	Có nhiều trong mía, củ cải đường.
	Cấu tạo: glucose + fructose (liên kết 1→2).
	Không có nhóm –OH hemiacetal tự do → không khử.
b. Maltose
	Thu được khi thủy phân tinh bột.
	Cấu tạo: glucose + glucose, liên kết α-1,4.
	Còn 1 nhóm hemiacetal → là đường khử.
2. Tính chất hóa học cơ bản
Saccharose
	Không tráng bạc, không phản ứng Cu(OH)₂ → Cu₂O.
	Thủy phân → glucose + fructose.
	Phản ứng với H₂SO₄ đặc → than hóa (mất nước rất mạnh).
Maltose
	Có tính khử (như glucose).
	Thủy phân → 2 glucose.
	Phản ứng Cu(OH)₂ nóng → Cu₂O đỏ gạch.
III. TINH BỘT VÀ CELLULOSE
1. Trạng thái tự nhiên – cấu tạo
a. Tinh bột
	Có trong gạo, ngô, khoai, sắn.
	Polysaccharide gồm nhiều đơn vị α-glucose.
	Gồm 2 thành phần:
	Amylose (xoắn lò xo)
	Amylopectin (phân nhánh)
b. Cellulose
	Thành phần chính của thành tế bào thực vật.
	Polysaccharide gồm β-glucose, nối β-1,4 → tạo mạch thẳng rất bền.
	Con người không tiêu hóa cellulose (thiếu enzyme cellulase).
2. Tính chất hóa học cơ bản
Tinh bột
	Phản ứng màu với I₂ → xanh tím (amylose).
	Thủy phân:
tinh bột → dextrin → maltose → glucose
	Bị hồ hóa khi đun nóng với nước.
Cellulose
	Không tan, không phản ứng màu với I₂.
	Thủy phân: → cellobiose → glucose (nhờ acid hoặc enzyme).
	Tạo dẫn xuất quan trọng:
	cellulose trinitrate (thuốc súng không khói),
	cellulose acetate (tơ nhân tạo).
CHƯƠNG 3 — HỢP CHẤT CHỨA NITROGEN
I. AMINE
1. Khái niệm và cấu trúc
	Amin là dẫn xuất của NH₃ khi 1, 2 hoặc 3 H bị thay bằng nhóm hữu cơ (R).
	Công thức chung:
	Amin bậc 1: R–NH₂
	Amin bậc 2: R₂–NH
	Amin bậc 3: R₃–N
	Nitơ trong amin:
	Lai hoá sp³ → có cặp e tự do → phân tử có dạng hình tháp.
	Là nguyên nhân gây tính bazơ và nucleophile mạnh.
2. Đồng phân và danh pháp
Đồng phân:
	Đồng phân mạch C.
	Đồng phân vị trí nhóm –NH₂.
	Đồng phân bậc amine (1,2,3).
	Amin thơm (anilin) khác với amin béo (aliphatic).
Danh pháp:
	Danh pháp IUPAC:
	R–NH₂ → thay đuôi –e của tên hydrocacbon bằng amin.
	Ví dụ: CH₃NH₂: metanamin.
	Danh pháp thông thường:
	Tên nhóm ankyl + “amin”.
	CH₃NH₂: metylamin.
3. Tính chất vật lí
	Mạch ngắn (≤C₄) → chất khí/tan tốt trong nước (do tạo liên kết H).
	Mùi khai, tanh.
	Amin thơm ít tan nước hơn amin béo.
	Nhiệt độ sôi: amin > hydrocacbon tương ứng (vì liên kết H).
4. Tính chất hóa học
A. Tính bazơ (quan trọng nhất)
	Nhận proton H⁺ → tạo ion amoni:
	R–NH₂ + H⁺ → R–NH₃⁺
	Tác dụng:
	Với axit: tạo muối amoni.
	Với nước: làm quỳ tím → xanh nhẹ.
B. Tính nucleophile
	Tấn công các hợp chất có tâm điện dương.
C. Phản ứng với HNO₂ (axit nitrit)
	Amin bậc 1 béo: tạo alcol + N₂ (phản ứng giải phóng khí rất “đinh”, hay thi).
	Amin thơm bậc 1: tạo muối diazoni (Ar–N₂⁺) → cực kỳ quan trọng trong hóa hữu cơ.
D. Phản ứng ankyl hóa
	R–NH₂ + R’–X → R–NH–R’ + HX
5. Ứng dụng và điều chế
Ứng dụng:
	Thuốc nhuộm, dược phẩm, cao su, chất hoạt động bề mặt.
	Metylamin → sản xuất thuốc trừ sâu.
	Anilin → tiền chất tổng hợp polyanilin, phẩm nhuộm azo.
Điều chế:
	Thế NH₃ vào dẫn xuất halogen R–X.
	Khử nitrobenzene → anilin.
	Khử nitrile → amin bậc 1.
II. AMINO ACID VÀ PEPTIDE
1. Amino acid
A. Khái niệm, cấu trúc, tên gọi
	Chứa ít nhất 1 nhóm –NH₂ và 1 nhóm –COOH.
	Công thức chung: H₂N–CHR–COOH.
	Là phân tử lưỡng tính.
	Gọi tên: “axit + amino + tên gốc R”.
	Amino acid sinh học: 20 loại.
B. Tính chất vật lí
	Rắn, kết tinh, tan nước tốt.
	Nhiệt độ nóng chảy cao do mạng ion.
	Không bay mùi như amin vì tồn tại dạng ion lưỡng cực ⁺H₃N–CHR–COO⁻.
C. Tính chất điện di
	Tùy pH:
	pH thấp → dạng cation.
	pH cao → dạng anion.
	pH đẳng điện (pI) → dạng lưỡng cực, di chuyển chậm nhất.
D. Tính chất hóa học
	Phản ứng với axit → muối amoni
	Phản ứng với bazơ → muối carboxylate
	Tạo peptide (quan trọng nhất)
	–COOH + –NH₂ → liên kết peptide –CO–NH– + H₂O
2. Peptide
A. Khái niệm & cấu tạo
	Peptide là chuỗi amino acid liên kết bằng liên kết peptide.
	Oligopeptide (2–10 aa), polypeptide (>10 aa).
B. Tính chất hóa học
	Thủy phân tạo lại amino acid.
	Phản ứng màu biure (≥2 liên kết peptide) → màu tím.
	Dễ bị phân hủy bởi nhiệt và enzyme.
III. PROTEIN VÀ ENZYME
1. Khái niệm và cấu trúc
Protein:
	Polymer lớn từ 20 amino acid.
	Có 4 cấp độ cấu trúc:
	Bậc 1: trật tự aa.
	Bậc 2: xoắn α/phiến β (liên kết H).
	Bậc 3: ổn định bởi liên kết S–S, tĩnh điện, Van der Waals.
	Bậc 4: nhiều chuỗi kết hợp.
Enzyme:
	Là protein xúc tác sinh học.
	Rất chọn lọc (substrate đặc hiệu).
2. Tính chất vật lí
	Tan trong nước → tạo dung dịch keo.
	Nhạy với nhiệt độ, pH → bị biến tính.
	Tách lớp, đông tụ (ví dụ: trứng chín).
3. Tính chất hóa học
	Thủy phân → amino acid.
	Bị biến tính bởi:
	Nhiệt, axit mạnh, kiềm mạnh, kim loại nặng.
	Tác dụng với Cu²⁺ → phản ứng biure → màu tím.
4. Vai trò và ứng dụng
	Cấu trúc cơ thể (keratin, collagen).
	Vận chuyển (hemoglobin).
	Enzyme → xúc tác sinh học cực nhanh.
	Hormone (insulin).
	Ứng dụng:
	Công nghệ thực phẩm, y sinh, thuốc men, enzyme công nghiệp.
CHƯƠNG 4 — POLYMER
I. ĐẠI CƯƠNG VỀ POLYMER
1. Công thức cấu tạo & tên gọi một số polymer
Khái niệm
	Polymer: phân tử rất lớn gồm nhiều đơn vị nhỏ (monomer) lặp lại.
	Mắt xích (đơn vị lặp): –(M)–.
	Dạng cấu tạo: [–M–]ₙ, n rất lớn (10³–10⁶).
Phân loại nhanh (quan trọng):
	Theo nguồn gốc:
	Thiên nhiên: xenlulozơ, tinh bột, protein.
	Nhân tạo: tơ visco, tơ axetat.
	Tổng hợp: PE, PVC, polystyren…
	Theo cách trùng hợp:
	Trùng hợp (không tạo sản phẩm phụ): PE, PVC, PS.
	Trùng ngưng (tạo H₂O, NH₃…): nilon-6,6; novolac.
Một số polymer tiêu biểu:
Polymer	Công thức mắt xích	Monomer
PE (polyetylen)	–CH₂–CH₂–	etylen
PVC	–CH₂–CHCl–	vinyl clorua
PP	–CH₂–CH(CH₃)–	propilen
PS	–CH₂–CH(Ph)–	stiren
PMMA	–CH₂–C(CH₃)(COOCH₃)–	metyl metacrylat
Nilon-6,6	–NH–(CH₂)₆–NH–CO–(CH₂)₄–CO–	hexametylenđiamin + axit adipic
Teflon (PTFE)	–CF₂–CF₂–	tetrafluoroetylen
________________________________________
2. Tính chất vật lí
	Rắn, nhiều polymer không tan trong nước và dung môi thường.
	Nhiệt độ nóng chảy kém sắc nét (do phân bố độ dài mạch).
	Cách điện, cách nhiệt tốt (PE, PVC).
	Độ bền cơ học cao, nhưng phụ thuộc cấu trúc mạch:
	Mạch thẳng → bền, dai (PE-HD).
	Mạch phân nhánh → mềm, dễ nóng chảy (PE-LD).
	Độ kết tinh ảnh hưởng:
	Kết tinh cao → bền, cứng.
	Vô định hình → mềm, trong suốt (PMMA).
3. Tính chất hóa học
	Phản ứng chủ yếu xảy ra ở nhóm chức hoặc ở mạch bên:
	PVC: nhóm Cl dễ tham gia phản ứng thế.
	PS: vòng benzen → phản ứng thế thơm.
	PMMA: nhóm este → thủy phân.
	Một số polymer bền hoá học đặc biệt:
	Teflon: siêu bền, gần như không phản ứng.
	Nhiều polymer bị phân hủy bởi:
	Nhiệt, tia UV, oxy → lão hoá polymer.
4. Phương pháp tổng hợp một số polymer thường gặp
A. Trùng hợp (polymerization)
Monomer có liên kết đôi C=C.
	PE: nCH₂=CH₂ → –(CH₂–CH₂)ₙ–
	PVC: nCH₂=CHCl → –(CH₂–CHCl)ₙ–
	PS: nCH₂=CH–Ph → –(CH₂–CHPh)ₙ–
B. Trùng ngưng (polycondensation)
Monomer có hai nhóm chức trở lên.
	Nilon-6,6:
HOOC–(CH₂)₄–COOH + H₂N–(CH₂)₆–NH₂ → –CO–(CH₂)₄–CO–NH–(CH₂)₆–NH– + H₂O
	Polieste, polyamit đều theo cơ chế này.
C. Đồng trùng hợp
	Hai hay nhiều monomer cùng tạo polymer:
VD: SBR (styren–butadien) dùng trong lốp xe.
II. CHẤT DẺO VÀ VẬT LIỆU COMPOSITE
1. Chất dẻo (plastic)
Khái niệm
	Là polymer + phụ gia (chất ổn định, chất màu, chất hoá dẻo…).
Phân loại:
	Nhiệt dẻo: PE, PP, PVC.
→ Nóng mềm, nguội cứng → tái chế được.
	Nhiệt rắn: nhựa bakelit, nhựa ure–fomanđehit.
→ Không chảy lại khi đun nóng → không tái chế.
Tính chất:
	Nhẹ, bền cơ học, bền hóa học, dễ tạo hình.
	Nhược điểm: phân hủy rất chậm.
2. Vật liệu composite
Khái niệm
	Vật liệu gồm 2 pha trở lên:
	Pha nền (polymer/kim loại/gốm)
	Pha cốt (sợi thủy tinh, carbon…)
	Tính chất vượt trội so với từng thành phần riêng lẻ.
Ví dụ:
	Composite sợi thủy tinh + nhựa → vỏ tàu, mũ bảo hiểm.
	Composite carbon → siêu nhẹ, siêu bền (ô tô, máy bay).
3. Sử dụng chất dẻo và bảo vệ môi trường
	Lợi ích: nhẹ, bền, rẻ.
	Hại:
	Rác nhựa tích tụ → gây ô nhiễm biển, vi nhựa.
	Đốt → sinh khí độc (dioxin từ PVC).
	Giải pháp:
	Tái chế.
	Dùng polymer phân hủy sinh học (PHA, PLA).
	Hạn chế nhựa dùng 1 lần.
	Thu gom, phân loại.
III. TƠ – CAO SU – KEO DÁN TỔNG HỢP
1. Tơ
Phân loại:
	Tơ thiên nhiên: bông, len, tơ tằm.
	Tơ nhân tạo: visco (từ xenlulozơ).
	Tơ tổng hợp: nilon-6,6; nilon-6; tơ nitron (PAN).
Một số tơ quan trọng:
	Nilon-6,6: trùng ngưng axit adipic + hexametylenđiamin.
	Nilon-6: trùng ngưng caprolactam.
	Tơ nitron (PAN): –CH₂–CH(CN)– → dai, ấm.
Tính chất chung: dai, bền, khó nhăn, kém thấm nước.
2. Cao su
Cao su thiên nhiên
	Monomer: isopren CH₂=C(CH₃)–CH=CH₂
	Polymer: cis–1,4–polyisopren.
Cao su tổng hợp:
	SBR: đồng trùng hợp butadien + stiren.
	Buna-N: butadien + acrylonitril → chịu dầu.
Lưu hóa cao su (quan trọng):
	Đun với lưu huỳnh → tạo cầu nối S–S → tăng đàn hồi, bền nóng lạnh.
3. Keo dán tổng hợp
	Thành phần gốc: polymer có khả năng bám dính mạnh:
	PVA (polyvinyl ancol): keo sữa.
	Epoxy resin: keo AB, siêu bền.
	Cyanoacrylate: keo 502 (đông siêu nhanh).
	Cơ chế bám dính:
	Tương tác phân cực, liên kết H, khóa cơ học khi keo thấm vào bề mặt.
CHƯƠNG 5 — PIN ĐIỆN & ĐIỆN PHÂN
I. THẾ ĐIỆN CỰC & NGUỒN ĐIỆN HOÁ HỌC
1. Cặp oxi hoá – khử kim loại
Khái niệm cặp oxi hoá – khử
	Một kim loại M trong dung dịch muối của chính nó tạo thành hệ:
Mⁿ⁺/M
	Kim loại nhường e → M → Mⁿ⁺ + ne (chất khử).
	Ion kim loại nhận e → Mⁿ⁺ + ne → M (chất oxi hoá).
Thế điện cực (E)
	Khi nhúng kim loại vào dung dịch ion kim loại:
→ xuất hiện điện tích bề mặt, tạo hiệu điện thế giữa kim loại và dung dịch.
	Không thể đo trực tiếp → phải so sánh với điện cực hydro chuẩn (SHE).
2. Thế điện cực chuẩn của kim loại & pin Galvani
Thế điện cực chuẩn E°
	Đo ở 25°C, dung dịch 1M, áp suất 1 atm.
	Nếu E° càng âm → kim loại càng khử mạnh.
	Nếu E° càng dương → tính oxi hóa ion càng mạnh.
Pin Galvani: nguồn điện hóa học
	Là thiết bị biến đổi năng lượng hoá học → điện năng.
	Gồm:
	Hai điện cực khác nhau về tính oxi hóa–khử.
	Dung dịch điện li chứa ion phù hợp.
	Cầu muối/màng ngăn ion: giữ cân bằng điện tích.
Cách hoạt động (rất quan trọng):
Cực	Quá trình	Ghi nhớ
Anode (–)	Oxi hoá, nhường e	“Anốt Oxi hoá”
Cathode (+)	Khử, nhận e	“Catốt Khử”
→ Electron chạy ngoài mạch: anode → cathode
→ Ion chạy trong dung dịch để cân bằng điện tích.
Suất điện động của pin:
Epin=Ecatot∘−Eanot∘
3. Ý nghĩa của dãy thế điện cực chuẩn
Dãy sắp xếp theo E° (kim loại → ion kim loại):
Ý nghĩa quan trọng nhất:
	Dự đoán chiều phản ứng oxi hoá – khử
	Chất có E° lớn hơn → có xu hướng nhận e (bị khử).
	Chất có E° nhỏ hơn → có xu hướng nhường e (bị oxi hoá).
	Dự đoán phản ứng “kim loại đẩy kim loại”
	Kim loại có E° nhỏ hơn sẽ khử ion của kim loại có E° lớn hơn.
Ví dụ:
Zn (–0,76 V) khử được Cu²⁺ (+0,34 V) → Zn²⁺ + Cu.
	Giải thích độ mạnh/yếu của kim loại
	E° càng âm → kim loại hoạt động mạnh:
	Li, K, Ca, Na → mạnh.
	Cu, Ag, Au → rất yếu.
	Tính toán suất điện động của pin (như phần trên).
4. Một số loại pin quan trọng (nắm bản chất)
A. Pin Daniel – pin Cu–Zn (kinh điển)
	Anode: Zn/Zn²⁺
	Cathode: Cu²⁺/Cu
	Suất điện động chuẩn:
E=0,34−(−0,76)=1,10 
B. Pin khô (Zn – MnO₂)
	Anode: vỏ Zn (bị oxi hoá).
	Cathode: MnO₂ (bị khử).
	Dòng điện từ Zn → thanh than (graphite).
C. Pin kiềm (Zn – MnO₂ trong môi trường KOH)
	Bền hơn, dung lượng cao hơn pin khô.
D. Pin Li-ion (quan trọng nhất hiện nay)
	Anode: graphite xen lithi.
	Cathode: LiCoO₂ hoặc LiFePO₄.
	Ưu điểm: nhẹ, dung lượng cao, sạc lại nhiều lần.
E. Pin nhiên liệu (Fuel cell, O₂–H₂)
	O₂ + 2H₂ → 2H₂O
	Hiệu suất cao, thân thiện môi trường.
II. ĐIỆN PHÂN
1. Điện phân nóng chảy và dung dịch
Khái niệm chung
	Quá trình dùng điện năng để thực hiện phản ứng oxi hoá – khử không tự xảy ra.
	Electron đi từ catot → anode trong mạch điện ngoài (ngược pin Galvani).
A. Điện phân nóng chảy
Chỉ có ion dương kim loại và ion âm phi kim → ưu tiên:
	Catot (–): ion kim loại bị khử → M.
	Anode (+): ion âm bị oxi hoá → phi kim.
Ví dụ:
Điện phân NaCl nóng chảy:
	C: Na⁺ + e → Na
	A: Cl⁻ → ½Cl₂ + e
→ Thu được Na kim loại, Cl₂ khí.
B. Điện phân dung dịch
Phức tạp hơn vì có nước → cạnh tranh e⁻.
Quy tắc chọn sản phẩm:
Tại catot (nhận e):
	Ion kim loại hoạt động mạnh (K⁺, Na⁺, Ca²⁺, Mg²⁺, Al³⁺)
→ không bị khử, nước bị khử:
2H2O+2e→H2+2OH−
Ion kim loại trung bình – yếu (Cu²⁺, Ag⁺, Hg²⁺)
→ bị khử trước nước:
Cu2++2e→CuCu^{2+} + 2e → CuCu2++2e→Cu 
Tại anode (nhường e):
	Anion Cl⁻, Br⁻, I⁻ → bị oxi hoá:
2Cl−→Cl2+2e2Cl^- → Cl_2 + 2e2Cl−→Cl2+2e 
	Anion sulfate, nitrate (SO₄²⁻, NO₃⁻)
→ không bị oxi hoá
→ nước oxi hoá:
2H2O→O2+4H++4e2
Ví dụ kinh điển: điện phân dung dịch CuSO₄
	Catot: Cu²⁺ + 2e → Cu (bám đỏ).
	Anode (trơ): 2H₂O → O₂ + 4H⁺ + 4e.
	Nếu anode bằng Cu: Cu → Cu²⁺ + 2e (tan dần).
2. Ứng dụng của điện phân
Trong công nghiệp luyện kim
	Sản xuất kim loại mạnh: Na, K, Mg, Al (điện phân nóng chảy).
Điện phân dung dịch:
	Mạ điện (Cu, Ni, Cr).
	Tinh chế kim loại (Cu, Ag, Au).
	Điều chế chất khí: H₂, O₂, Cl₂.
	Điện phân muối NaCl → điều chế NaOH, Cl₂, H₂ (phương pháp diaphragm/membrane).
Trong đời sống
	Sản xuất pin sạc.
	Xử lí nước (điện phân khử ion, diệt khuẩn).
	Công nghệ phủ nano kim loại.
CHƯƠNG 6 — ĐẠI CƯƠNG VỀ KIM LOẠI
I. ĐẶC ĐIỂM CẤU TẠO & LIÊN KẾT KIM LOẠI – TÍNH CHẤT KIM LOẠI
1. Cấu tạo của kim loại
A. Mạng tinh thể kim loại
	Hầu hết kim loại tồn tại dạng tinh thể (lập phương tâm diện, lập phương tâm khối, lục phương).
	Các hạt nhân kim loại nằm cố định tại nút mạng.
	Electron hoá trị tách khỏi nguyên tử → tạo “biển electron” tự do.
B. Liên kết kim loại
	Kim loại giữ với nhau nhờ lực hút giữa:
	Ion kim loại M⁺ (chắc chắn, không phải Mⁿ⁺ thật sự, mà là vai trò cation),
	và biển electron tự do dịch chuyển trong toàn mạng tinh thể.
	Đây là lý do kim loại:
	dẫn điện,
	dẫn nhiệt,
	dẻo,
	ánh kim.
2. Tính chất vật lí của kim loại
A. Dẫn điện mạnh
	Vì electron tự do di chuyển dễ dàng.
	Bạc > Đồng > Vàng > Nhôm.
B. Dẫn nhiệt tốt
	Electron tự do mang năng lượng rất nhanh.
C. Tính dẻo & dễ uốn
	Mặt tinh thể có thể trượt trên nhau mà liên kết không bị phá vỡ.
	Có thể kéo thành dây → dát mỏng.
D. Ánh kim
	Mặt kim loại phản xạ mạnh ánh sáng → hiện tượng ánh kim.
E. Khối lượng riêng, nhiệt độ nóng chảy cao
	Do mạng tinh thể chặt chẽ và liên kết mạnh (trừ Na, K rất mềm).
3. Tính chất hoá học của kim loại
A. Tính khử
	Kim loại có xu hướng nhường e⁻ → tạo cation.
	Kim loại càng hoạt động mạnh → tính khử càng cao.
B. Phản ứng với phi kim
	Với O₂ → oxit kim loại.
	Với S → sulfide.
	Với halogen → muối halide.
C. Phản ứng với nước
	K, Na, Ca, Ba → phản ứng mạnh → tạo OH⁻ + khí H₂.
	Mg chỉ phản ứng khi nước nóng.
	Các kim loại trung bình trở xuống → không phản ứng.
D. Phản ứng với acid
	Acid loãng: kim loại trung bình → giải phóng H₂.
	Acid mạnh (HNO₃, H₂SO₄ đặc): không giải phóng H₂ vì là chất oxi hoá mạnh.
E. Phản ứng với muối
	Kim loại hoạt động mạnh đẩy kim loại yếu khỏi dung dịch muối.
II. CÁC PHƯƠNG PHÁP TÁCH (SẢN XUẤT) KIM LOẠI
1. Trạng thái tự nhiên của kim loại – quặng – mỏ
A. Trạng thái tự nhiên
	Ít kim loại tồn tại dạng tự do: Au, Ag, Pt (do kém hoạt động).
	Đa số tồn tại dưới dạng hợp chất:
	Oxit,
	Sulfide,
	Carbonate,
	Silicate…
B. Quặng kim loại
	Khoáng vật chứa hàm lượng kim loại cao đủ để khai thác.
	Ví dụ:
	Fe: hematit (Fe₂O₃), magnetit (Fe₃O₄).
	Al: bôxit (Al₂O₃·nH₂O).
	Cu: chalcopyrit CuFeS₂.
C. Mỏ quặng
	Nơi tập trung lượng quặng lớn, khai thác công nghiệp.
2. Phương pháp tách kim loại
Tùy theo độ hoạt động hóa học, chọn phương pháp thích hợp:
A. Nhiệt luyện (khử bằng C, CO, H₂)
→ Áp dụng cho kim loại trung bình (Fe, Zn, Pb, Cu).
Ví dụ:
Fe₂O₃ + 3CO → 2Fe + 3CO₂.
B. Thủy luyện (dùng dung dịch & phản ứng hóa học)
	Hòa tan quặng → kết tủa/chuyển hoá → tách ion → thu kim loại.
	Áp dụng: Cu, Ag, Au.
C. Điện phân nóng chảy
→ Dùng cho kim loại hoạt động mạnh, khó khử bằng chất khử thông thường.
	NaCl nóng chảy → Na.
	Al₂O₃ nóng chảy (hoà tan trong cryolite) → Al.
D. Điện phân dung dịch
Áp dụng cho Cu, Ag, Ni → tinh chế.
E. Phương pháp đặc biệt
	Khử bằng Mg/Al (nhiệt nhôm).
	Khử bằng H₂ trong sản xuất tungsten.
3. Nhu cầu & thực tiễn tái chế kim loại
A. Vì sao cần tái chế?
	Tiết kiệm tài nguyên không tái tạo.
	Tiết kiệm năng lượng (tái chế nhôm tốn 5% năng lượng so với sản xuất mới).
	Giảm phát thải CO₂.
	Giảm rác thải kim loại, thiết bị điện tử.
B. Tái chế những gì?
	Nhôm từ lon.
	Thép, sắt.
	Đồng từ dây điện.
	Vàng, bạc, palladium từ rác thải điện tử.
C. Thực tiễn
	Trở thành ngành công nghiệp mũi nhọn trong kinh tế tuần hoàn.
	Nhiều nước áp dụng công nghệ “urban mining”: khai khoáng từ rác thải công nghiệp.
III. HỢP KIM – ĂN MÒN KIM LOẠI
1. Hợp kim
Khái niệm
	Chất rắn thu được khi trộn hai hay nhiều kim loại (hoặc kim loại + phi kim, như thép: Fe + C).
Tính chất của hợp kim
	Cứng hơn, bền hơn, chống ăn mòn tốt hơn kim loại nguyên chất.
	Nhiệt độ nóng chảy thấp hơn.
	Tính chất điều chỉnh theo tỷ lệ pha trộn.
Một số hợp kim quan trọng
	Thép: Fe + C (0,02–2%).
	Gang: Fe + C (2–5%).
	Đồng thanh: Cu + Zn.
	Đồng thiếc: Cu + Sn.
	Solder (thiếc hàn): Sn + Pb.
	Niken–Crôm: chống oxi hóa.
2. Ăn mòn kim loại
A. Khái niệm
	Sự phá huỷ kim loại do tác dụng của môi trường:
	O₂, H₂O, CO₂, acid, muối…
B. Hai dạng ăn mòn
1. Ăn mòn hoá học
	Kim loại phản ứng trực tiếp với chất oxi hoá trong môi trường không có dòng điện.
	Ví dụ: Al bị ăn mòn trong HCl.
2. Ăn mòn điện hoá
	Xảy ra khi:
	Có hai kim loại khác nhau (hoặc vùng khác nhau của cùng kim loại),
	Tiếp xúc nhau,
	Trong môi trường điện li.
	Kim loại có E° âm hơn → anode → bị ăn mòn trước.
Ví dụ cực kinh điển
Sắt tiếp xúc đồng trong nước muối → sắt bị ăn mòn, đồng không.
3. Phòng chống ăn mòn kim loại
A. Phương pháp điện hoá
	Gắn kim loại có E° âm hơn làm cực hi sinh:
	Zn bảo vệ sắt (tàu biển, đường ống).
	Mg bảo vệ máy nước nóng.
B. Phủ bề mặt
	Sơn, mạ kẽm (Zn), mạ thiếc (Sn), mạ niken, mạ crom.
C. Tạo hợp kim chống ăn mòn
	Thép không gỉ (inox): Fe + Cr + Ni → bền, sáng, khó oxi hoá.
D. Kiểm soát môi trường
	Giảm độ ẩm, giảm ion ăn mòn (Cl⁻), dùng chất ức chế ăn mòn.
CHƯƠNG 7 – NGUYÊN TỐ NHÓM IA VÀ IIA
I. NGUYÊN TỐ NHÓM IA (KIM LOẠI KIỀM)
1. Đơn chất
A. Vị trí – cấu tạo – trạng thái tự nhiên
	Nhóm IA: Li, Na, K, Rb, Cs, Fr.
	Cấu hình e ngoài cùng: ns¹ → siêu hoạt động.
	Không tồn tại dạng đơn chất → chỉ gặp trong muối (NaCl, KNO₃…).
	Kim loại mềm, nhẹ, độ bền kém.
B. Tính chất vật lí
	Mềm đến mức cắt bằng dao.
	Khối lượng riêng nhỏ.
	Nhiệt độ nóng chảy thấp.
	Dẫn điện tốt nhưng kém hơn Cu, Fe.
	Phản ứng mạnh với nước → luôn bảo quản trong dầu hỏa.
C. Tính chất hoá học
	Tính khử cực mạnh, tăng từ Li → Cs.
	Phản ứng nhanh và mãnh liệt với nước:
2M + 2H₂O → 2MOH + H₂↑
	Tác dụng với O₂ → oxides, peroxides, superoxides tùy kim loại.
	Tác dụng halogen → muối MX.
2. Hợp chất
A. Tính tan
	Tất cả muối IA: tan tốt (nitrate, sulfate, carbonate, hydroxide…).
	Đây là lý do Na⁺, K⁺ hay bị “trôi nổi” trong nước tự nhiên.
B. Nhận biết ion
	Li⁺: ngọn lửa đỏ carmine.
	Na⁺: vàng chói (đi đâu cũng thấy).
	K⁺: tím nhạt (nhìn qua kính coban).
C. Sodium chloride (NaCl)
	Muối ăn, rất bền, tan tốt.
	Sản xuất chủ yếu từ nước biển & mỏ muối.
D. Điện phân dung dịch NaCl
	Dung dịch NaCl → điện phân màng ngăn:
	Anode: 2Cl⁻ → Cl₂↑
	Cathode: 2H₂O + 2e → H₂↑
	Dung dịch sau điện phân: NaOH
	Ba sản phẩm siêu quan trọng: NaOH – Cl₂ – H₂
E. Sodium hydrogencarbonate và sodium carbonate
	NaHCO₃: muối nở – tính lưỡng tính nhẹ → dùng trong dược phẩm, bánh nở.
	Na₂CO₃: soda công nghiệp – sản xuất thủy tinh, xà phòng.
II. NGUYÊN TỐ NHÓM IIA (KIM LOẠI KIỀM THỔ)
1. Đơn chất
A. Vị trí – cấu tạo – trạng thái tự nhiên
	Be, Mg, Ca, Sr, Ba, Ra.
	Cấu hình e ngoài cùng: ns² → hoạt động yếu hơn IA.
	Gặp chủ yếu trong quặng carbonate, sulfate, silicate.
B. Tính chất vật lí
	Cứng hơn kim loại IA.
	Khối lượng riêng lớn hơn.
	Nhiệt độ nóng chảy cao hơn.
	Ca, Ba phản ứng với nước chậm hơn Na, K.
C. Tính chất hoá học
	Tính khử mạnh nhưng < IA.
	Phản ứng với nước (trừ Be, Mg lạnh):
M + 2H₂O → M(OH)₂ + H₂
	Tác dụng O₂ → oxides.
	Tác dụng halogen → muối MX₂.
2. Hợp chất
A. Muối carbonate, nitrate
	Carbonate (MCO₃): phân hủy nhiệt dễ hơn IA → CaCO₃ dùng trong xi măng, đá vôi.
	Nitrate (M(NO₃)₂): phân hủy tạo oxides/nitrites + O₂.
B. Tính tan
	Carbonate: hầu hết không tan trừ MgCO₃ hơi tan.
	Sulfate:
	MgSO₄ tan
	CaSO₄ ít tan
	BaSO₄ không tan → dùng nhận biết ion Ba²⁺
	Nitrate: tất cả tan.
C. Ứng dụng
	Ca²⁺: xi măng, thạch cao.
	Mg²⁺: hợp kim nhẹ, thuốc nhuận tràng.
	Ba²⁺: BaSO₄ cho chụp X-quang tiêu hóa.
D. Nước cứng và cách làm mềm
	Nước chứa nhiều Mg²⁺, Ca²⁺ → khó tạo bọt xà phòng.
	Làm mềm bằng:
	Phương pháp nhiệt: kết tủa CaCO₃, Mg(OH)₂
	Na₂CO₃: kết tủa CaCO₃, MgCO₃
	Nhựa trao đổi ion: chuyển Ca²⁺/Mg²⁺ → Na⁺
CHƯƠNG 8 – DÃY KIM LOẠI CHUYỂN TIẾP THỨ NHẤT & PHỨC CHẤT
I. ĐẠI CƯƠNG VỀ KIM LOẠI CHUYỂN TIẾP DÃY THỨ NHẤT
(Sc → Zn)
1. Đặc điểm cấu hình electron
	Kim loại chuyển tiếp = nguyên tử có orbital d chưa bão hòa (d¹–d⁹) trong nguyên tử hoặc ion.
	Dãy thứ nhất: 3d, từ Sc (21) → Zn (30).
	Cấu hình chung:
[Ar] 3dⁿ 4s² (trừ Cr: 3d⁵ 4s¹ và Cu: 3d¹⁰ 4s¹ — vì half-filled & fully-filled bền).
	Lõi d chưa đầy → tạo:
	nhiều trạng thái oxi hóa
	ion có màu
	tính từ, tính xúc tác mạnh
2. Tính chất vật lí & ứng dụng
Tính chất:
	Đều là kim loại rắn, dày, nhiệt độ nóng chảy cao.
	Dẫn điện/dẫn nhiệt tốt.
	Có từ tính (Mn, Fe, Co, Ni rất nổi bật).
	Tạo hợp kim siêu bền, siêu cứng.
Ứng dụng thực tế:
	Ti, V, Cr → hợp kim chịu nhiệt, khung máy bay, siêu bền.
	Mn → thép Mn, pin khô.
	Fe → vua của công nghiệp (thép).
	Co, Ni → pin, nam châm, xúc tác hydro hóa.
	Cu → dây điện, hợp kim đồng thau, đồng đỏ.
	Zn → mạ chống gỉ, pin Zn–C.
3. Trạng thái oxi hóa & màu sắc ion
Sc → Zn có nhiều số oxi hóa, nhưng ion phổ biến & màu đặc trưng:
	Sc³⁺: không màu
	Ti³⁺: tím → Ti⁴⁺: không màu
	V²⁺: tím, V³⁺: xanh lục, V⁴⁺ (VO²⁺): xanh dương, V⁵⁺ (VO₂⁺): vàng
	Cr³⁺: xanh lục, Cr₂O₇²⁻: da cam
	Mn²⁺: hồng nhạt, MnO₄⁻: tím đậm
	Fe²⁺: xanh lục, Fe³⁺: vàng nâu
	Co²⁺: hồng → xanh khi khan
	Ni²⁺: xanh lá
	Cu²⁺: xanh lam
	Zn²⁺: không màu
Điểm đáng nhớ: màu sắc đến từ chuyển d–d trong orbital d bị tách mức năng lượng.
4. Thí nghiệm tiêu biểu
	Fe²⁺ → Fe³⁺ khi thêm Br₂ hoặc Cl₂.
	Nhận biết Cu²⁺: dd xanh lam + tạo kết tủa Cu(OH)₂ xanh trời.
	MnO₄⁻ khử: màu tím → mất màu (về Mn²⁺).
	Cr₂O₇²⁻ + Ba²⁺ → BaCrO₄ vàng.
II. PHỨC CHẤT & SỰ HÌNH THÀNH PHỨC TRONG DUNG DỊCH
1. Thành phần & dạng hình học
Phức chất gồm:
	Ion kim loại trung tâm (thường là kim loại chuyển tiếp).
	Ligand (L): phân tử/ion cho cặp e (NH₃, H₂O, Cl⁻, CN⁻, EDTA…).
	Số phối trí: thường 4 hoặc 6.
	Hình học:
	Số phối trí 6 → bát diện (octahedral)
	Số phối trí 4 → hình vuông (square planar) hoặc tứ diện (tetrahedral)
Ví dụ:
	[Cu(H₂O)₆]²⁺: xanh lam
	[Cu(NH₃)₄]²⁺: xanh thẫm
	[Ag(NH₃)₂]⁺: phức Tollens
	[Fe(CN)₆]³⁻: xanh Phổ
2. Sự hình thành phức chất trong dung dịch
Ion chuyển tiếp phản ứng với ligand → tạo phức, ví dụ:
Cu²⁺ + 4NH₃ → [Cu(NH₃)₄]²⁺
→ dung dịch chuyển từ xanh lam nhạt sang xanh thẫm.
Ag⁺ + 2NH₃ → [Ag(NH₃)₂]⁺
→ phức Tollens tráng bạc.
Fe³⁺ + SCN⁻ → [Fe(SCN)]²⁺
→ đỏ máu (nhận biết Fe³⁺).
Hiện tượng: màu thay đổi mạnh → chứng minh có phức mới hình thành.
3. Thí nghiệm tạo phức trong dung dịch
Một số thí nghiệm hay – dễ làm – cực trực quan:
	Cu²⁺ + NH₃:
Kết tủa xanh → tan → xanh thẫm (tạo [Cu(NH₃)₄]²⁺).
	Ag⁺ + NH₃:
Kết tủa Ag₂O tan trong NH₃ → phức Tollens (tráng bạc).
	Fe³⁺ + SCN⁻:
Màu đỏ máu → phức [Fe(SCN)]²⁺.
	Ni²⁺ + DMG (dimethylglyoxime):
Kết tủa đỏ đặc trưng → nhận biết Ni²⁺.
4. Một số ứng dụng của phức chất
Ứng dụng thực dụng – cực rộng:
	Tách – nhận biết ion kim loại (phân tích định tính).
	Thuốc thử Tollens để kiểm tra aldehyde.
	Hấp thụ khí độc (phức hemoglobin – Fe²⁺ gắn O₂).
	Xúc tác công nghiệp:
	Fe trong Haber
	Ni trong hydro hóa
	Dược phẩm: cis–platin điều trị ung thư.
	Mạ kim loại: phức cyanua của Ag, Au, Cu.
	`;

// --- UI Logic ---
function toggleGuide() {
  document.getElementById("guide-modal").classList.toggle("hidden");
}

const themeToggleBtn = document.getElementById("theme-toggle");
themeToggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  const isDark = document.documentElement.classList.contains("dark");
  document
    .getElementById("theme-toggle-light-icon")
    .classList.toggle("hidden", !isDark);
  document
    .getElementById("theme-toggle-dark-icon")
    .classList.toggle("hidden", isDark);
});

function handleImage(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (event) => {
    currentImageData = event.target.result.split(",")[1];
    previewImg.src = event.target.result;
    imagePreview.classList.remove("hidden");
  };
  reader.readAsDataURL(file);
}

function removeImage() {
  currentImageData = null;
  imagePreview.classList.add("hidden");
  imageInput.value = "";
}

function appendMessage(role, content, isHtml = false) {
  const div = document.createElement("div");
  div.className = `${
    role === "user" ? "user-message" : "ai-message"
  } message-bubble p-4 fade-in`;

  if (isHtml) {
    div.innerHTML = content;
  } else {
    // Render Markdown then LaTeX
    const htmlContent = marked.parse(content);
    div.innerHTML = htmlContent;
    renderMathInElement(div, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
      ],
      throwOnError: false,
    });
  }

  chatWindow.appendChild(div);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function showTyping() {
  const div = document.createElement("div");
  div.id = "typing-indicator";
  div.className = "ai-message message-bubble p-4 flex items-center";
  div.innerHTML = `<div class="typing-indicator"><span></span><span></span><span></span></div>`;
  chatWindow.appendChild(div);
  chatWindow.scrollTop = chatWindow.scrollHeight;
  return div;
}

async function callGemini(prompt, imageData = null) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

  const parts = [{ text: prompt }];
  if (imageData) {
    parts.push({
      inlineData: {
        mimeType: "image/png",
        data: imageData,
      },
    });
  }

  const payload = {
    contents: [{ parts }],
    systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
  };

  let retries = 5;
  let delay = 1000;

  while (retries > 0) {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      return (
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Rất tiếc, tôi không thể trả lời lúc này."
      );
    } catch (error) {
      retries--;
      if (retries === 0) throw error;
      await new Promise((r) => setTimeout(r, delay));
      delay *= 2;
    }
  }
}

chatForm.onsubmit = async (e) => {
  e.preventDefault();
  const text = userInput.value.trim();
  if (!text && !currentImageData) return;

  appendMessage("user", text || "(Hình ảnh được gửi)");
  userInput.value = "";
  const imgToSend = currentImageData;
  removeImage();

  const indicator = showTyping();

  try {
    const aiResponse = await callGemini(
      text || "Hãy giải bài tập trong hình ảnh này.",
      imgToSend
    );
    indicator.remove();
    appendMessage("ai", aiResponse);
  } catch (err) {
    indicator.remove();
    appendMessage("ai", "⚠️ Đã có lỗi kết nối. Vui lòng thử lại sau.");
  }
};

function quickQuestion(q) {
  userInput.value = q;
  chatForm.dispatchEvent(new Event("submit"));
}

// Auto-resize textarea
userInput.addEventListener("input", function () {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
  if (this.scrollHeight > 150) this.style.overflowY = "scroll";
  else this.style.overflowY = "hidden";
});
