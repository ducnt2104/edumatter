const DETAILED_PERIODIC_TABLE = [
  // =========================================================================
  // CHU KỲ 1
  // =========================================================================
  {
    basic: {
      number: 1, // 3. Số hiệu nguyên tử (Z)
      symbol: "H", // 2. Kí hiệu hoá học
      nameVI: "Hydro", // 1. Tên tiếng Việt
      nameEN: "Hydrogen", // 1. Tên tiếng Anh
      atomicMass: 1.008, // 4. Nguyên tử khối (A)
      electronConfig: "1s¹", // 5. Cấu hình electron
      valenceElectrons: 1, // 7. Số electron lớp ngoài cùng
      en: 2.2,
      ox: "-1, +1",
    },
    details: {
      origin:
        "Tiếng Hy Lạp 'hydro' (nước) và 'genes' (tạo ra) → 'tạo ra nước'.", // 1. Nguồn gốc
      position: { group: "IA", period: 1, block: "s", type: "Phi kim" }, // 6. Vị trí & Phân loại
      physical: {
        state: "Khí",
        color: "Không màu",
        density: "0.08988 g/L (nhẹ nhất trong các khí)",
        meltingPoint: "-259.16°C",
        boilingPoint: "-252.87°C",
        properties: "Cách nhiệt tốt, khuếch tán nhanh.",
      }, // 8. Tính chất vật lý
      chemical: {
        type: "Phi kim, tính khử mạnh, tính oxi hóa yếu.",
        reactivity:
          "Cháy trong Oxi tỏa nhiệt mạnh, khử oxit kim loại ở nhiệt độ cao, tác dụng với kim loại tạo hydrua.",
        notableReactions: "2H₂ + O₂ → 2H₂O (nổ); CuO + H₂ → Cu + H₂O",
      }, // 9. Tính chất hoá học
      isotopes: {
        summary: "3 đồng vị chính.",
        list: [
          { name: "¹H (Protium)", abundance: "99.98%", role: "Phổ biến nhất" },
          {
            name: "²H (Deuterium)",
            abundance: "0.0156%",
            role: "Làm nước nặng trong lò hạt nhân",
          },
          {
            name: "³H (Tritium)",
            abundance: "Vết",
            role: "Phóng xạ, dùng trong bom H",
          },
        ],
      }, // 10. Đồng vị
      compounds: [
        {
          formula: "H₂O",
          name: "Nước",
          desc: "Dung môi vạn năng, duy trì sự sống.",
        },
        { formula: "NH₃", name: "Amoniac", desc: "Sản xuất phân bón." },
        {
          formula: "HCl",
          name: "Axit Clohydric",
          desc: "Axit mạnh trong công nghiệp và dịch vị dạ dày.",
        },
      ], // 11. Hợp chất quan trọng
      applications:
        "Nhiên liệu tên lửa, pin nhiên liệu (xe hơi), sản xuất amoniac, hydro hóa dầu thực vật.", // 12. Ứng dụng
      naturalOccurrence:
        "Nguyên tố phổ biến nhất vũ trụ (75%). Ở Trái Đất chủ yếu dạng hợp chất (nước, sinh vật).", // 13. Trạng thái tự nhiên
      preparation: {
        lab: "Zn + 2HCl → ZnCl₂ + H₂",
        industry: "Reforming hơi nước từ khí mêtan (CH₄ + H₂O → CO + 3H₂).",
      }, // 14. Điều chế
      safety: {
        toxicity: "Không độc, nhưng gây ngạt nếu nồng độ quá cao thay thế oxy.",
        hazards: "Rất dễ cháy nổ khi trộn với không khí.",
      }, // 15. Độc hại & Sinh học
    },
    styles: {
      color: "bg-gray-200",
      border: "border-gray-400",
      text: "text-gray-900",
    },
  },
  {
    basic: {
      number: 2,
      symbol: "He",
      en: null,
      ox: "",
      nameVI: "Heli",
      nameEN: "Helium",
      atomicMass: 4.0026,
      electronConfig: "1s²",
      valenceElectrons: 2,
    },
    details: {
      origin:
        "Tiếng Hy Lạp 'helios' nghĩa là Mặt trời (được phát hiện trong quang phổ mặt trời trước Trái Đất).",
      position: { group: "VIIIA", period: 1, block: "s", type: "Khí hiếm" },
      physical: {
        state: "Khí",
        color: "Không màu, không mùi",
        density: "0.1786 g/L",
        meltingPoint: "-272.2°C (chỉ hóa rắn dưới áp suất cao)",
        boilingPoint: "-268.9°C (thấp nhất trong mọi nguyên tố)",
        properties: "Dẫn nhiệt rất nhanh, siêu lỏng ở nhiệt độ gần 0K.",
      },
      chemical: {
        type: "Khí hiếm, trơ về mặt hóa học.",
        reactivity:
          "Hầu như không phản ứng với bất kỳ chất nào trong điều kiện thường.",
        notableReactions: "Không có phản ứng hóa học thông thường.",
      },
      isotopes: {
        summary: "2 đồng vị bền.",
        list: [
          {
            name: "³He",
            abundance: "0.0001%",
            role: "Nhiên liệu tiềm năng cho phản ứng nhiệt hạch sạch",
          },
          { name: "⁴He", abundance: "99.999%", role: "Phổ biến nhất" },
        ],
      },
      compounds: [], // Rất hiếm hợp chất bền
      applications:
        "Làm mát nam châm siêu dẫn (máy MRI), bơm khí cầu/bóng bay, khí lặn sâu (hỗn hợp Heliox), khí bảo vệ hàn TIG.",
      naturalOccurrence:
        "Phổ biến thứ 2 trong vũ trụ. Trên Trái Đất tìm thấy trong khí tự nhiên (do phân rã phóng xạ).",
      preparation: {
        lab: "Không điều chế trong phòng thí nghiệm.",
        industry: "Chưng cất phân đoạn khí thiên nhiên hóa lỏng.",
      },
      safety: {
        toxicity: "Không độc.",
        hazards:
          "Gây ngạt nếu hít quá nhiều (thay thế oxy). Hít heli làm đổi giọng nói (vui chơi nhưng cần cẩn trọng).",
      },
    },
    styles: {
      color: "bg-cyan-200",
      border: "border-cyan-400",
      text: "text-gray-900",
    },
  },

  // =========================================================================
  // CHU KỲ 2
  // =========================================================================
  {
    basic: {
      number: 3,
      symbol: "Li",
      nameVI: "Liti",
      nameEN: "Lithium",
      atomicMass: 6.94,
      electronConfig: "[He] 2s¹",
      valenceElectrons: 1,
      en: 0.98,
      ox: "+1",
    },
    details: {
      origin:
        "Tiếng Hy Lạp 'lithos' nghĩa là đá (do được tìm thấy trong khoáng vật đá, khác với Na, K trong thực vật).",
      position: { group: "IA", period: 2, block: "s", type: "Kim loại kiềm" },
      physical: {
        state: "Rắn",
        color: "Trắng bạc (nhanh xỉn màu)",
        density: "0.534 g/cm³ (kim loại nhẹ nhất, nổi trên dầu hỏa)",
        meltingPoint: "180.5°C",
        boilingPoint: "1342°C",
        properties: "Mềm (cắt được bằng dao), dẫn điện tốt.",
      },
      chemical: {
        type: "Kim loại kiềm, tính khử mạnh (nhưng yếu nhất nhóm IA).",
        reactivity: "Tác dụng với nước (êm dịu hơn Na), Oxi, Halogen.",
        notableReactions: "2Li + 2H₂O → 2LiOH + H₂; 4Li + O₂ → 2Li₂O",
      },
      isotopes: {
        summary: "2 đồng vị bền.",
        list: [
          {
            name: "⁶Li",
            abundance: "7.5%",
            role: "Nguyên liệu bom nhiệt hạch",
          },
          { name: "⁷Li", abundance: "92.5%", role: "Phổ biến" },
        ],
      },
      compounds: [
        {
          formula: "LiCoO₂",
          name: "Liti Coban Oxit",
          desc: "Cực dương pin Li-ion.",
        },
        {
          formula: "Li₂CO₃",
          name: "Liti Carbonat",
          desc: "Thuốc điều trị rối loạn lưỡng cực, nguyên liệu thủy tinh.",
        },
      ],
      applications:
        "Pin sạc (điện thoại, xe điện), hợp kim nhôm-liti cho máy bay, gốm sứ chịu nhiệt, y học (tâm thần).",
      naturalOccurrence:
        "Không tồn tại dạng đơn chất. Có trong khoáng sản (spodumene) và nước biển.",
      preparation: {
        lab: "Điện phân nóng chảy hỗn hợp LiCl và KCl.",
        industry: "Điện phân nóng chảy LiCl.",
      },
      safety: {
        toxicity: "Ion Li+ độc hại ở nồng độ cao (ảnh hưởng thận, thần kinh).",
        hazards: "Dễ cháy, phản ứng với nước gây nổ (nếu lượng lớn).",
      },
    },
    styles: {
      color: "bg-purple-400",
      border: "border-purple-600",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 4,
      symbol: "Be",
      nameVI: "Beryli",
      nameEN: "Beryllium",
      atomicMass: 9.0122,
      electronConfig: "[He] 2s²",
      valenceElectrons: 2,
      en: 1.57,
      ox: "+2",
    },
    details: {
      origin: "Từ tên khoáng vật 'beryl' (ngọc lục bảo).",
      position: {
        group: "IIA",
        period: 2,
        block: "s",
        type: "Kim loại kiềm thổ",
      },
      physical: {
        state: "Rắn",
        color: "Xám thép",
        density: "1.85 g/cm³",
        meltingPoint: "1287°C",
        boilingPoint: "2469°C",
        properties: "Rất cứng, giòn, nhẹ, trong suốt với tia X.",
      },
      chemical: {
        type: "Kim loại kiềm thổ (nhưng tính chất giống nhôm - lưỡng tính).",
        reactivity:
          "Bền trong không khí (lớp oxit bảo vệ), không tác dụng với nước ở nhiệt độ thường.",
        notableReactions:
          "Be + 2NaOH + 2H₂O → Na₂[Be(OH)₄] + H₂ (Phản ứng lưỡng tính)",
      },
      isotopes: {
        summary: "1 đồng vị bền duy nhất (⁹Be).",
        list: [
          {
            name: "⁹Be",
            abundance: "100%",
            role: "Dùng làm chất làm chậm neutron",
          },
        ],
      },
      compounds: [
        {
          formula: "BeO",
          name: "Beryli Oxit",
          desc: "Gốm dẫn nhiệt tốt nhưng cách điện.",
        },
        {
          formula: "Be₃Al₂(SiO₃)₆",
          name: "Beryl",
          desc: "Đá quý (Ngọc lục bảo/Emerald).",
        },
      ],
      applications:
        "Cửa sổ ống tia X, hợp kim đồng-beryli (lò xo, dụng cụ không đánh lửa giàn khoan), phản xạ neutron lò hạt nhân.",
      naturalOccurrence: "Trong khoáng vật Beryl và Bertrandite.",
      preparation: {
        lab: "Khử BeF₂ bằng Magie: BeF₂ + Mg → Be + MgF₂.",
        industry: "Điện phân nóng chảy hoặc khử hợp chất.",
      },
      safety: {
        toxicity:
          "RẤT ĐỘC. Bụi Beryli gây bệnh phổi mãn tính (Berylliosis) và ung thư.",
        hazards: "Cần xử lý đặc biệt trong công nghiệp.",
      },
    },
    styles: {
      color: "bg-teal-300",
      border: "border-teal-500",
      text: "text-gray-900",
    },
  },
  {
    basic: {
      number: 5,
      symbol: "B",
      nameVI: "Bo",
      nameEN: "Boron",
      atomicMass: 10.81,
      electronConfig: "[He] 2s² 2p¹",
      valenceElectrons: 3,
      en: 2.04,
      ox: "+3",
    },
    details: {
      origin: "Từ tiếng Ả Rập 'buraq' (tên gọi của hàn the).",
      position: { group: "IIIA", period: 2, block: "p", type: "Á kim" },
      physical: {
        state: "Rắn",
        color: "Đen (tinh thể) hoặc nâu (vô định hình)",
        density: "2.34 g/cm³",
        meltingPoint: "2076°C",
        boilingPoint: "3927°C",
        properties:
          "Rất cứng (chỉ sau kim cương), dẫn điện kém ở nhiệt độ phòng.",
      },
      chemical: {
        type: "Á kim.",
        reactivity:
          "Trơ ở nhiệt độ thường, tác dụng với chất oxi hóa mạnh khi đun nóng.",
        notableReactions: "4B + 3O₂ → 2B₂O₃ (khi đốt nóng)",
      },
      isotopes: {
        summary: "2 đồng vị bền.",
        list: [
          {
            name: "¹⁰B",
            abundance: "19.9%",
            role: "Hấp thụ neutron mạnh (thanh điều khiển lò hạt nhân)",
          },
          { name: "¹¹B", abundance: "80.1%", role: "Phổ biến" },
        ],
      },
      compounds: [
        {
          formula: "Na₂B₄O₇·10H₂O",
          name: "Hàn the (Borax)",
          desc: "Chất tẩy rửa, thông lượng hàn.",
        },
        {
          formula: "H₃BO₃",
          name: "Axit Boric",
          desc: "Thuốc sát trùng mắt, diệt kiến.",
        },
        {
          formula: "BN",
          name: "Boron Nitride",
          desc: "Chất bôi trơn rắn, vật liệu siêu cứng.",
        },
      ],
      applications:
        "Thủy tinh chịu nhiệt (Pyrex/Borosilicate), sợi boron (composit siêu nhẹ cho vợt tennis, máy bay), nam châm Neodymium (NdFeB).",
      naturalOccurrence: "Trong khoáng vật Borax và Kernite (Thổ Nhĩ Kỳ, Mỹ).",
      preparation: {
        lab: "Khử B₂O₃ bằng Mg.",
        industry: "Khử hợp chất boron hoặc điện phân.",
      },
      safety: {
        toxicity:
          "Độc tính thấp với người, nhưng độc với động vật chân đốt (côn trùng).",
        hazards: "Không đáng kể.",
      },
    },
    styles: {
      color: "bg-amber-700",
      border: "border-amber-900",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 6,
      symbol: "C",
      nameVI: "Cacbon",
      nameEN: "Carbon",
      atomicMass: 12.011,
      electronConfig: "[He] 2s² 2p²",
      valenceElectrons: 4,
      en: 2.55,
      ox: "-4, +2, +4",
    },
    details: {
      origin: "Tiếng Latin 'carbo' nghĩa là than.",
      position: { group: "IVA", period: 2, block: "p", type: "Phi kim" },
      physical: {
        state: "Rắn",
        color: "Đen (than chì), Không màu (kim cương)",
        density: "2.26 g/cm³ (than chì), 3.51 g/cm³ (kim cương)",
        meltingPoint: "Thăng hoa ở ~3642°C",
        properties:
          "Có nhiều dạng thù hình (Kim cương: cứng nhất; Than chì: dẫn điện, mềm; Fulleren; Graphene).",
      },
      chemical: {
        type: "Phi kim.",
        reactivity:
          "Kém hoạt động ở nhiệt độ thường, hoạt động mạnh khi đun nóng (làm chất khử).",
        notableReactions:
          "C + O₂ → CO₂ (cháy); Fe₂O₃ + 3C → 2Fe + 3CO (luyện kim)",
      },
      isotopes: {
        summary: "3 đồng vị quan trọng.",
        list: [
          { name: "¹²C", abundance: "98.9%", role: "Chuẩn đơn vị cacbon" },
          { name: "¹³C", abundance: "1.1%", role: "Dùng trong NMR" },
          {
            name: "¹⁴C",
            abundance: "Vết",
            role: "Phóng xạ, định tuổi cổ vật (chu kỳ bán rã 5730 năm)",
          },
        ],
      },
      compounds: [
        {
          formula: "CO₂",
          name: "Cacbon đioxit",
          desc: "Khí nhà kính, quang hợp, nước giải khát.",
        },
        {
          formula: "CO",
          name: "Cacbon monoxit",
          desc: "Khí độc, nhiên liệu, chất khử.",
        },
        { formula: "CH₄", name: "Metan", desc: "Khí thiên nhiên." },
        { formula: "CaCO₃", name: "Đá vôi", desc: "Xây dựng." },
      ],
      applications:
        "Cơ sở của mọi sự sống (Hóa hữu cơ), kim cương (trang sức, mũi khoan), than chì (điện cực, ruột chì), than hoạt tính (lọc nước/khí).",
      naturalOccurrence:
        "Tự do (kim cương, than chì) và hợp chất (đá vôi, dầu mỏ, than đá, sinh vật).",
      preparation: {
        lab: "Đốt cháy đường (C₁₂H₂₂O₁₁) bằng H₂SO₄ đặc.",
        industry: "Khai thác mỏ than, nhiệt phân gỗ (than gỗ).",
      },
      safety: {
        toxicity:
          "C không độc. CO cực độc (gây ngạt). Bụi than gây bệnh phổi đen.",
        hazards: "Bụi than dễ cháy nổ.",
      },
    },
    styles: {
      color: "bg-slate-800",
      border: "border-black",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 7,
      symbol: "N",
      nameVI: "Nitơ",
      nameEN: "Nitrogen",
      atomicMass: 14.007,
      electronConfig: "[He] 2s² 2p³",
      valenceElectrons: 5,
      en: 3.04,
      ox: "-3, +1, +2, +3, +4, +5",
    },
    details: {
      origin: "Tiếng Hy Lạp 'nitron' (soda tự nhiên) + 'genes' (tạo ra).",
      position: { group: "VA", period: 2, block: "p", type: "Phi kim" },
      physical: {
        state: "Khí (N₂)",
        color: "Không màu, không mùi, không vị",
        density: "1.25 g/L",
        meltingPoint: "-210°C",
        boilingPoint: "-195.8°C (Nitơ lỏng)",
        properties: "Tan rất ít trong nước.",
      },
      chemical: {
        type: "Phi kim.",
        reactivity:
          "Rất trơ ở nhiệt độ thường (do liên kết ba N≡N rất bền). Hoạt động ở nhiệt độ cao.",
        notableReactions:
          "N₂ + 3H₂ ⇌ 2NH₃ (xúc tác, nhiệt độ, áp suất); N₂ + O₂ ⇌ 2NO (tia lửa điện/sấm sét)",
      },
      isotopes: {
        summary: "2 đồng vị bền.",
        list: [
          { name: "¹⁴N", abundance: "99.6%", role: "Phổ biến" },
          { name: "¹⁵N", abundance: "0.4%", role: "Đánh dấu đồng vị" },
        ],
      },
      compounds: [
        {
          formula: "NH₃",
          name: "Amoniac",
          desc: "Cơ sở công nghiệp phân đạm.",
        },
        {
          formula: "HNO₃",
          name: "Axit Nitric",
          desc: "Sản xuất thuốc nổ, phân bón.",
        },
        { formula: "TNT", name: "Trinitrotoluen", desc: "Thuốc nổ." },
      ],
      applications:
        "Sản xuất phân bón, môi trường trơ (bảo quản thực phẩm snack, hàn), nitơ lỏng (làm lạnh sâu, bảo quản mẫu sinh học).",
      naturalOccurrence:
        "Chiếm 78% khí quyển Trái Đất. Có trong diêm tiêu (NaNO₃) và mọi cơ thể sống (protein, DNA).",
      preparation: {
        lab: "Nhiệt phân NH₄NO₂ → N₂ + 2H₂O.",
        industry: "Chưng cất phân đoạn không khí lỏng.",
      },
      safety: {
        toxicity: "Không độc. Nhưng nitơ lỏng gây bỏng lạnh.",
        hazards: "Nguy cơ ngạt khí trong không gian kín.",
      },
    },
    styles: {
      color: "bg-blue-500",
      border: "border-blue-700",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 8,
      symbol: "O",
      nameVI: "Oxi",
      nameEN: "Oxygen",
      atomicMass: 15.999,
      electronConfig: "[He] 2s² 2p⁴",
      valenceElectrons: 6,
      en: 3.44,
      ox: "-2",
    },
    details: {
      origin:
        "Tiếng Hy Lạp 'oxys' (axit) + 'genes' (tạo ra) → 'tạo ra axit' (quan niệm sai lầm cũ).",
      position: { group: "VIA", period: 2, block: "p", type: "Phi kim" },
      physical: {
        state: "Khí (O₂)",
        color: "Không màu (lỏng có màu xanh nhạt)",
        density: "1.429 g/L",
        meltingPoint: "-218.8°C",
        boilingPoint: "-183°C",
        properties: "Duy trì sự cháy và hô hấp. Ít tan trong nước.",
      },
      chemical: {
        type: "Phi kim, tính oxi hóa rất mạnh.",
        reactivity:
          "Oxi hóa hầu hết các kim loại và phi kim (trừ vàng, bạch kim, halogen).",
        notableReactions: "4Fe + 3O₂ → 2Fe₂O₃ (gỉ sắt); C + O₂ → CO₂ (cháy)",
      },
      isotopes: {
        summary: "3 đồng vị bền.",
        list: [
          { name: "¹⁶O", abundance: "99.76%", role: "Phổ biến nhất" },
          { name: "¹⁸O", abundance: "0.2%", role: "Nghiên cứu cổ khí hậu học" },
        ],
      },
      compounds: [
        { formula: "H₂O", name: "Nước", desc: "Sự sống." },
        {
          formula: "O₃",
          name: "Ozone",
          desc: "Lớp bảo vệ tia cực tím (tầng bình lưu), chất khử trùng.",
        },
        { formula: "SiO₂", name: "Cát/Thạch anh", desc: "Vỏ trái đất." },
      ],
      applications:
        "Hô hấp (bình dưỡng khí y tế), sự cháy (luyện thép, hàn cắt kim loại), nhiên liệu tên lửa (Oxy lỏng), xử lý nước.",
      naturalOccurrence:
        "Nguyên tố phổ biến nhất vỏ Trái Đất (46% khối lượng), 21% khí quyển, 89% khối lượng nước.",
      preparation: {
        lab: "Nhiệt phân KMnO₄ hoặc KClO₃.",
        industry: "Chưng cất phân đoạn không khí lỏng.",
      },
      safety: {
        toxicity:
          "O₂ không độc (nhưng thở 100% O₂ áp suất cao gây ngộ độc oxy). O₃ (Ozone) độc ở mặt đất.",
        hazards: "Chất oxy hóa mạnh, làm đám cháy bùng phát dữ dội.",
      },
    },
    styles: {
      color: "bg-red-500",
      border: "border-red-700",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 9,
      symbol: "F",
      nameVI: "Flo",
      nameEN: "Fluorine",
      atomicMass: 18.998,
      electronConfig: "[He] 2s² 2p⁵",
      valenceElectrons: 7,
      en: 3.98,
      ox: "-1",
    },
    details: {
      origin:
        "Tiếng Latin 'fluere' nghĩa là dòng chảy (do khoáng vật fluorite dùng làm chất trợ chảy).",
      position: {
        group: "VIIA",
        period: 2,
        block: "p",
        type: "Phi kim (Halogen)",
      },
      physical: {
        state: "Khí",
        color: "Vàng lục nhạt",
        density: "1.7 g/L",
        meltingPoint: "-219.6°C",
        boilingPoint: "-188.1°C",
        properties: "Mùi hắc khó chịu, rất độc.",
      },
      chemical: {
        type: "Phi kim mạnh nhất (Độ âm điện lớn nhất: 3.98).",
        reactivity:
          "Oxi hóa hầu hết mọi chất ngay cả trong bóng tối, nổ khi gặp Hydro. Đẩy Oxi ra khỏi nước.",
        notableReactions:
          "2F₂ + 2H₂O → 4HF + O₂; H₂ + F₂ → 2HF (nổ ngay cả ở -250°C)",
      },
      isotopes: {
        summary: "1 đồng vị bền duy nhất (¹⁹F).",
        list: [{ name: "¹⁹F", abundance: "100%", role: "Dùng trong MRI" }],
      },
      compounds: [
        {
          formula: "HF",
          name: "Axit Flohydric",
          desc: "Ăn mòn thủy tinh, khắc kính.",
        },
        {
          formula: "NaF",
          name: "Natri Florua",
          desc: "Kem đánh răng (ngừa sâu răng).",
        },
        { formula: "PTFE", name: "Teflon", desc: "Nhựa chống dính chảo." },
      ],
      applications:
        "Làm giàu Uranium (UF₆) cho điện hạt nhân, sản xuất nhựa Teflon, khí làm lạnh (CFC - đã hạn chế, HFC), kem đánh răng.",
      naturalOccurrence:
        "Trong khoáng vật Fluorite (CaF₂) và Cryolite (Na₃AlF₆).",
      preparation: {
        lab: "Không điều chế trong phòng thí nghiệm thông thường (quá nguy hiểm).",
        industry: "Điện phân hỗn hợp KF và HF lỏng (phương pháp Moissan).",
      },
      safety: {
        toxicity:
          "RẤT ĐỘC. Khí F₂ gây bỏng nặng đường hô hấp. HF lỏng ăn mòn xương.",
        hazards: "Cực kỳ nguy hiểm, gây cháy nổ.",
      },
    },
    styles: {
      color: "bg-green-400",
      border: "border-green-600",
      text: "text-gray-900",
    },
  },
  {
    basic: {
      number: 10,
      symbol: "Ne",
      nameVI: "Neon",
      nameEN: "Neon",
      atomicMass: 20.18,
      electronConfig: "[He] 2s² 2p⁶",
      valenceElectrons: 8,
      en: null,
      ox: "",
    },
    details: {
      origin: "Tiếng Hy Lạp 'neos' nghĩa là mới.",
      position: { group: "VIIIA", period: 2, block: "p", type: "Khí hiếm" },
      physical: {
        state: "Khí",
        color: "Không màu (phát sáng màu đỏ cam trong điện trường)",
        density: "0.9 g/L",
        meltingPoint: "-248.6°C",
        boilingPoint: "-246°C",
        properties: "Khả năng làm lạnh gấp 40 lần heli lỏng.",
      },
      chemical: {
        type: "Khí hiếm.",
        reactivity: "Trơ hoàn toàn, không tạo hợp chất hóa học thực sự nào.",
        notableReactions: "Không.",
      },
      isotopes: {
        summary: "3 đồng vị bền.",
        list: [
          { name: "²⁰Ne", abundance: "90.48%", role: "Phổ biến nhất" },
          { name: "²²Ne", abundance: "9.25%", role: "" },
        ],
      },
      compounds: [], // Không có hợp chất trung hòa
      applications:
        "Đèn quảng cáo (đèn Neon sign), laser khí (He-Ne), thu lôi, ống tivi chân không.",
      naturalOccurrence:
        "Khá phổ biến trong vũ trụ, nhưng rất hiếm trong khí quyển Trái Đất (18 ppm).",
      preparation: {
        lab: "Không.",
        industry: "Chưng cất phân đoạn không khí lỏng.",
      },
      safety: {
        toxicity: "Không độc.",
        hazards: "Gây ngạt trong không gian kín (thay thế Oxi).",
      },
    },
    styles: {
      color: "bg-cyan-300",
      border: "border-cyan-500",
      text: "text-gray-900",
    },
  },
  // =========================================================================
  // CHU KỲ 3
  // =========================================================================
  {
    basic: {
      number: 11,
      symbol: "Na",
      nameVI: "Natri",
      nameEN: "Sodium",
      atomicMass: 22.99,
      electronConfig: "[Ne] 3s¹",
      valenceElectrons: 1,
      en: 0.93,
      ox: "+1",
    },
    details: {
      origin: "Tiếng Latin 'natrium' từ tiếng Ai Cập 'natron' (muối khoáng).",
      position: { group: "IA", period: 3, block: "s", type: "Kim loại kiềm" },
      physical: {
        state: "Rắn",
        color: "Trắng bạc",
        density: "0.968 g/cm³ (nhẹ hơn nước)",
        meltingPoint: "97.8°C",
        boilingPoint: "883°C",
        properties: "Mềm (cắt bằng dao), dẫn điện tốt.",
      },
      chemical: {
        type: "Kim loại kiềm, tính khử mạnh.",
        reactivity: "Phản ứng mãnh liệt với nước, tự cháy trong không khí ẩm.",
        notableReactions: "2Na + 2H₂O → 2NaOH + H₂ (gây nổ); 2Na + Cl₂ → 2NaCl",
      },
      isotopes: {
        summary: "1 đồng vị bền (²³Na).",
        list: [{ name: "²³Na", abundance: "100%", role: "Phổ biến" }],
      },
      compounds: [
        {
          formula: "NaCl",
          name: "Muối ăn",
          desc: "Gia vị, bảo quản thực phẩm.",
        },
        { formula: "NaOH", name: "Xút ăn da", desc: "Làm xà phòng, giấy." },
        {
          formula: "NaHCO₃",
          name: "Baking Soda",
          desc: "Nổi bánh, chữa đau dạ dày.",
        },
      ],
      applications:
        "Đèn hơi Natri (đèn đường vàng), làm mát lò phản ứng hạt nhân, sản xuất titan.",
      naturalOccurrence:
        "Rất phổ biến (muối biển, mỏ muối). Đứng thứ 6 vỏ Trái Đất.",
      preparation: {
        lab: "Không điều chế (mua sẵn).",
        industry: "Điện phân nóng chảy NaCl (quy trình Downs).",
      },
      safety: {
        toxicity: "Ion Na+ cần thiết nhưng thừa gây cao huyết áp.",
        hazards: "Đơn chất gây bỏng nhiệt/hóa học nghiêm trọng khi gặp nước.",
      },
    },
    styles: {
      color: "bg-purple-500",
      border: "border-purple-700",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 12,
      symbol: "Mg",
      nameVI: "Magiê",
      nameEN: "Magnesium",
      atomicMass: 24.305,
      electronConfig: "[Ne] 3s²",
      valenceElectrons: 2,
      en: 1.31,
      ox: "+2",
    },
    details: {
      origin: "Từ tên vùng Magnesia ở Hy Lạp.",
      position: {
        group: "IIA",
        period: 3,
        block: "s",
        type: "Kim loại kiềm thổ",
      },
      physical: {
        state: "Rắn",
        color: "Trắng bạc",
        density: "1.74 g/cm³",
        meltingPoint: "650°C",
        boilingPoint: "1090°C",
        properties: "Rất nhẹ, cháy với ngọn lửa trắng chói lòa.",
      },
      chemical: {
        type: "Kim loại kiềm thổ, tính khử mạnh.",
        reactivity: "Tác dụng với nước nóng, cháy mạnh trong CO₂.",
        notableReactions: "2Mg + CO₂ → 2MgO + C (Không dùng CO₂ chữa cháy Mg)",
      },
      isotopes: {
        summary: "3 đồng vị bền.",
        list: [{ name: "²⁴Mg", abundance: "79%", role: "Phổ biến" }],
      },
      compounds: [
        { formula: "MgO", name: "Magiê oxit", desc: "Gạch chịu lửa lò nung." },
        {
          formula: "Mg(OH)₂",
          name: "Sữa Magie",
          desc: "Thuốc nhuận tràng, kháng axit.",
        },
      ],
      applications:
        "Hợp kim siêu nhẹ (vỏ laptop, máy ảnh, ô tô), pháo hoa (ánh sáng trắng), phôi kẽm in ấn.",
      naturalOccurrence:
        "Đứng thứ 8 vỏ Trái Đất (Dolomite, Magnesite). Trung tâm diệp lục cây xanh.",
      preparation: {
        lab: "Không phổ biến.",
        industry: "Điện phân MgCl₂ nóng chảy từ nước biển.",
      },
      safety: {
        toxicity: "Thấp.",
        hazards: "Bụi Mg dễ cháy nổ. Cháy Mg rất khó dập (cần cát khô).",
      },
    },
    styles: {
      color: "bg-teal-400",
      border: "border-teal-600",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 13,
      symbol: "Al",
      nameVI: "Nhôm",
      nameEN: "Aluminium",
      atomicMass: 26.982,
      electronConfig: "[Ne] 3s² 3p¹",
      valenceElectrons: 3,
      en: 1.61,
      ox: "+3",
    },
    details: {
      origin: "Tiếng Latin 'alumen' (phèn chua).",
      position: {
        group: "IIIA",
        period: 3,
        block: "p",
        type: "Kim loại yếu (Lưỡng tính)",
      },
      physical: {
        state: "Rắn",
        color: "Trắng bạc",
        density: "2.70 g/cm³",
        meltingPoint: "660°C",
        boilingPoint: "2470°C",
        properties: "Nhẹ, dẫn điện/nhiệt tốt, dẻo dễ dát mỏng.",
      },
      chemical: {
        type: "Kim loại mạnh, có tính lưỡng tính.",
        reactivity:
          "Bề mặt thụ động hóa trong không khí/nước/HNO₃ đặc nguội. Tan trong kiềm.",
        notableReactions:
          "2Al + 2NaOH + 2H₂O → 2NaAlO₂ + 3H₂; 2Al + Fe₂O₃ → Al₂O₃ + 2Fe (Phản ứng nhiệt nhôm)",
      },
      isotopes: {
        summary: "1 đồng vị bền (²⁷Al).",
        list: [{ name: "²⁷Al", abundance: "100%", role: "" }],
      },
      compounds: [
        {
          formula: "Al₂O₃",
          name: "Nhôm oxit",
          desc: "Đá sapphire/ruby (dạng tinh thể), gốm sứ.",
        },
        { formula: "KAl(SO₄)₂", name: "Phèn chua", desc: "Làm trong nước." },
      ],
      applications:
        "Giao thông (máy bay, ô tô), xây dựng (cửa, khung), bao bì (lon nước, giấy bạc), dây dẫn điện cao thế.",
      naturalOccurrence:
        "Kim loại phổ biến nhất vỏ Trái Đất (8%), đứng thứ 3 sau O và Si. Quặng Bauxite.",
      preparation: {
        lab: "Nhiệt nhôm.",
        industry: "Điện phân nóng chảy Al₂O₃ trong Cryolite (Na₃AlF₆).",
      },
      safety: {
        toxicity: "Gây tranh cãi về liên hệ Alzheimer (chưa chứng minh).",
        hazards: "Bột nhôm mịn dễ nổ.",
      },
    },
    styles: {
      color: "bg-indigo-300",
      border: "border-indigo-500",
      text: "text-gray-900",
    },
  },
  {
    basic: {
      number: 14,
      symbol: "Si",
      nameVI: "Silic",
      nameEN: "Silicon",
      atomicMass: 28.085,
      electronConfig: "[Ne] 3s² 3p²",
      valenceElectrons: 4,
      en: 1.9,
      ox: "-4, +2, +4",
    },
    details: {
      origin: "Tiếng Latin 'silex' (đá lửa).",
      position: { group: "IVA", period: 3, block: "p", type: "Á kim" },
      physical: {
        state: "Rắn",
        color: "Xám sẫm ánh kim",
        density: "2.33 g/cm³",
        meltingPoint: "1414°C",
        boilingPoint: "3265°C",
        properties: "Bán dẫn (dẫn điện tăng khi nhiệt độ tăng).",
      },
      chemical: {
        type: "Á kim.",
        reactivity:
          "Trơ ở nhiệt độ thường (có lớp oxit). Tác dụng flo, kiềm nóng.",
        notableReactions: "Si + 2NaOH + H₂O → Na₂SiO₃ + 2H₂",
      },
      isotopes: {
        summary: "3 đồng vị bền.",
        list: [{ name: "²⁸Si", abundance: "92.2%", role: "Phổ biến" }],
      },
      compounds: [
        { formula: "SiO₂", name: "Silica", desc: "Cát, thủy tinh, thạch anh." },
        { formula: "SiC", name: "Cacborundun", desc: "Đá mài, gốm phanh xe." },
        {
          formula: "Silicone",
          name: "Polyme Si-O",
          desc: "Keo dán, y tế, nâng ngực.",
        },
      ],
      applications:
        "Trái tim của kỷ nguyên số (chip máy tính, transistor), pin mặt trời, sản xuất thép, thủy tinh/xi măng.",
      naturalOccurrence:
        "Phổ biến thứ 2 vỏ Trái Đất (28%) sau Oxi. Luôn ở dạng hợp chất (cát, đá).",
      preparation: {
        lab: "Khử SiO₂ bằng Mg.",
        industry:
          "Khử SiO₂ bằng than trong lò hồ quang, rồi tinh chế vùng (Zone refining).",
      },
      safety: {
        toxicity: "Không độc (tinh thể).",
        hazards: "Bụi Silic gây bệnh bụi phổi silic (Silicosis) cho thợ mỏ.",
      },
    },
    styles: {
      color: "bg-amber-600",
      border: "border-amber-800",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 15,
      symbol: "P",
      nameVI: "Photpho",
      nameEN: "Phosphorus",
      atomicMass: 30.974,
      electronConfig: "[Ne] 3s² 3p³",
      valenceElectrons: 5,
      en: 2.19,
      ox: "-3, +3, +5",
    },
    details: {
      origin:
        "Tiếng Hy Lạp 'phosphoros' (mang lại ánh sáng - do P trắng phát sáng trong tối).",
      position: { group: "VA", period: 3, block: "p", type: "Phi kim" },
      physical: {
        state: "Rắn",
        color: "Trắng/Vàng (độc), Đỏ (bền), Đen (bán dẫn)",
        density: "1.82 g/cm³ (trắng)",
        meltingPoint: "44.1°C (trắng)",
        properties: "Có nhiều dạng thù hình.",
      },
      chemical: {
        type: "Phi kim hoạt động.",
        reactivity: "P trắng tự cháy trong không khí. P đỏ cần nhiệt độ cao.",
        notableReactions: "4P + 5O₂ → 2P₂O₅",
      },
      isotopes: {
        summary: "1 đồng vị bền (³¹P).",
        list: [{ name: "³¹P", abundance: "100%", role: "" }],
      },
      compounds: [
        {
          formula: "H₃PO₄",
          name: "Axit Photphoric",
          desc: "Nước giải khát (Cola), phân bón.",
        },
        {
          formula: "Ca₃(PO₄)₂",
          name: "Canxi photphat",
          desc: "Xương, quặng photphorit.",
        },
      ],
      applications:
        "Phân bón (Superphosphate), diêm (P đỏ), thuốc trừ sâu, pháo sáng quân sự, thành phần DNA/ATP.",
      naturalOccurrence: "Trong khoáng vật Apatit, xương và răng động vật.",
      preparation: {
        industry:
          "Nung quặng photphat với cát và than: Ca₃(PO₄)₂ + 3SiO₂ + 5C → 3CaSiO₃ + 2P + 5CO.",
      },
      safety: {
        toxicity: "P trắng rất độc (gây hoại tử xương hàm). P đỏ không độc.",
        hazards: "P trắng gây bỏng sâu rất khó chữa.",
      },
    },
    styles: {
      color: "bg-orange-500",
      border: "border-orange-700",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 16,
      symbol: "S",
      nameVI: "Lưu huỳnh",
      nameEN: "Sulfur",
      atomicMass: 32.06,
      electronConfig: "[Ne] 3s² 3p⁴",
      valenceElectrons: 6,
      en: 2.58,
      ox: "-2, +4, +6",
    },
    details: {
      origin: "Tiếng Latin 'sulphurium'.",
      position: { group: "VIA", period: 3, block: "p", type: "Phi kim" },
      physical: {
        state: "Rắn",
        color: "Vàng chanh",
        density: "2.07 g/cm³",
        meltingPoint: "115°C",
        boilingPoint: "444.6°C",
        properties: "Giòn, không dẫn điện, không tan trong nước.",
      },
      chemical: {
        type: "Phi kim.",
        reactivity:
          "Oxi hóa kim loại (tạo sunfua), bị oxi hóa bởi O₂/Halogen. Hấp thụ thủy ngân.",
        notableReactions:
          "S + O₂ → SO₂ (lửa xanh dương); Hg + S → HgS (xử lý Hg rơi vãi)",
      },
      isotopes: {
        summary: "4 đồng vị bền.",
        list: [{ name: "³²S", abundance: "94.9%", role: "Phổ biến" }],
      },
      compounds: [
        {
          formula: "H₂SO₄",
          name: "Axit Sulfuric",
          desc: "Hóa chất quan trọng nhất nền công nghiệp.",
        },
        {
          formula: "H₂S",
          name: "Hydro sunfua",
          desc: "Khí mùi trứng thối, độc.",
        },
      ],
      applications:
        "Sản xuất axit sulfuric (dùng cho ắc quy, phân bón), lưu hóa cao su (làm lốp xe), thuốc nổ đen, thuốc trị nấm da.",
      naturalOccurrence:
        "Mỏ lưu huỳnh tự nhiên (gần núi lửa), trong dầu thô và khí đốt (cần loại bỏ để tránh mưa axit).",
      preparation: {
        industry:
          "Quy trình Frasch (khai thác mỏ) hoặc quy trình Claus (thu hồi từ khí đốt).",
      },
      safety: {
        toxicity: "S không độc. Hợp chất SO₂, H₂S rất độc.",
        hazards: "SO₂ gây mưa axit.",
      },
    },
    styles: {
      color: "bg-yellow-500",
      border: "border-yellow-700",
      text: "text-gray-900",
    },
  },
  {
    basic: {
      number: 17,
      symbol: "Cl",
      nameVI: "Clo",
      nameEN: "Chlorine",
      atomicMass: 35.45,
      electronConfig: "[Ne] 3s² 3p⁵",
      valenceElectrons: 7,
      en: 3.16,
      ox: "-1, +1, +3, +5, +7",
    },
    details: {
      origin: "Tiếng Hy Lạp 'chloros' (màu vàng lục).",
      position: {
        group: "VIIA",
        period: 3,
        block: "p",
        type: "Phi kim (Halogen)",
      },
      physical: {
        state: "Khí",
        color: "Vàng lục",
        density: "3.2 g/L (nặng hơn không khí)",
        meltingPoint: "-101.5°C",
        boilingPoint: "-34°C",
        properties: "Mùi hắc, kích thích mạnh đường hô hấp.",
      },
      chemical: {
        type: "Phi kim, oxi hóa mạnh.",
        reactivity: "Tác dụng hầu hết kim loại, hydro, nước.",
        notableReactions:
          "Cl₂ + H₂O ⇌ HCl + HClO (nước clo tẩy màu); 2Fe + 3Cl₂ → 2FeCl₃",
      },
      isotopes: {
        summary: "2 đồng vị bền.",
        list: [
          { name: "³⁵Cl", abundance: "75.7%", role: "" },
          { name: "³⁷Cl", abundance: "24.2%", role: "" },
        ],
      },
      compounds: [
        { formula: "NaCl", name: "Muối ăn", desc: "Đời sống." },
        { formula: "PVC", name: "Polyvinyl Clorua", desc: "Ống nước, nhựa." },
        { formula: "Ca(OCl)₂", name: "Clorua vôi", desc: "Tẩy uế." },
      ],
      applications:
        "Khử trùng nước sinh hoạt/bể bơi, sản xuất nhựa PVC, thuốc tẩy trắng giấy/vải, dung môi công nghiệp.",
      naturalOccurrence: "Trong nước biển (muối clorua).",
      preparation: {
        lab: "MnO₂ + 4HCl → MnCl₂ + Cl₂ + 2H₂O.",
        industry: "Điện phân dung dịch NaCl có màng ngăn.",
      },
      safety: {
        toxicity: "Rất độc (vũ khí hóa học thế chiến 1).",
        hazards: "Gây phù phổi nếu hít phải.",
      },
    },
    styles: {
      color: "bg-green-500",
      border: "border-green-700",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 18,
      symbol: "Ar",
      nameVI: "Agon",
      nameEN: "Argon",
      atomicMass: 39.948,
      electronConfig: "[Ne] 3s² 3p⁶",
      valenceElectrons: 8,
      en: null,
      ox: "",
    },
    details: {
      origin: "Tiếng Hy Lạp 'argos' (lười biếng/trơ).",
      position: { group: "VIIIA", period: 3, block: "p", type: "Khí hiếm" },
      physical: {
        state: "Khí",
        color: "Không màu (tím xanh trong điện trường)",
        density: "1.78 g/L",
        meltingPoint: "-189.3°C",
        boilingPoint: "-185.8°C",
        properties: "Dẫn nhiệt kém.",
      },
      chemical: {
        type: "Khí hiếm.",
        reactivity: "Cực kỳ trơ.",
        notableReactions: "Hầu như không có.",
      },
      isotopes: {
        summary: "3 đồng vị bền.",
        list: [{ name: "⁴⁰Ar", abundance: "99.6%", role: "Phổ biến nhất" }],
      },
      compounds: [
        {
          formula: "HArF",
          name: "Argon fluorohydride",
          desc: "Không bền, chỉ tồn tại ở -256°C.",
        },
      ],
      applications:
        "Môi trường khí trơ khi hàn kim loại (hàn TIG/MIG), bơm vào bóng đèn dây tóc (ngăn oxy hóa vonfram), giữa các lớp kính cách nhiệt.",
      naturalOccurrence:
        "Chiếm 0.93% khí quyển Trái Đất (khí hiếm phổ biến nhất).",
      preparation: { industry: "Chưng cất phân đoạn không khí lỏng." },
      safety: {
        toxicity: "Không độc.",
        hazards:
          "Gây ngạt trong không gian kín (nặng hơn không khí, tích tụ dưới thấp).",
      },
    },
    styles: {
      color: "bg-cyan-400",
      border: "border-cyan-600",
      text: "text-white",
    },
  },

  // =========================================================================
  // CHU KỲ 4 - PHẦN 1 (K -> Fe)
  // =========================================================================
  {
    basic: {
      number: 19,
      symbol: "K",
      nameVI: "Kali",
      nameEN: "Potassium",
      atomicMass: 39.098,
      electronConfig: "[Ar] 4s¹",
      valenceElectrons: 1,
      en: 0.82,
      ox: "+1",
    },
    details: {
      origin: "Từ 'potash' (tro thực vật). Kí hiệu K từ tiếng Latin 'kalium'.",
      position: { group: "IA", period: 4, block: "s", type: "Kim loại kiềm" },
      physical: {
        state: "Rắn",
        color: "Trắng bạc",
        density: "0.862 g/cm³ (nổi trên nước)",
        meltingPoint: "63.5°C",
        boilingPoint: "759°C",
        properties: "Rất mềm, ngọn lửa màu tím.",
      },
      chemical: {
        type: "Kim loại kiềm, mạnh hơn Na.",
        reactivity: "Nổ khi gặp nước, tự cháy trong không khí.",
        notableReactions: "2K + 2H₂O → 2KOH + H₂ (Nổ mạnh, lửa tím).",
      },
      isotopes: {
        summary: "3 đồng vị.",
        list: [
          { name: "³⁹K", abundance: "93.3%", role: "" },
          {
            name: "⁴⁰K",
            abundance: "0.012%",
            role: "Phóng xạ tự nhiên trong cơ thể người",
          },
        ],
      },
      compounds: [
        {
          formula: "KCl",
          name: "Kali Clorua",
          desc: "Phân bón, muối thay thế.",
        },
        {
          formula: "KNO₃",
          name: "Thuốc súng đen",
          desc: "Pháo hoa, phân bón.",
        },
        { formula: "KOH", name: "Kiềm", desc: "Xà phòng lỏng." },
      ],
      applications:
        "Phân bón NPK (cung cấp K cho cây), xà phòng lỏng, chất điện giải trong cơ thể (thần kinh/tim mạch).",
      naturalOccurrence:
        "Trong khoáng vật Sylvite, Carnallite. Phổ biến thứ 7 vỏ Trái Đất.",
      preparation: {
        industry:
          "Điện phân KCl nóng chảy hoặc phản ứng Na + KCl (lỏng) → NaCl + K (hơi).",
      },
      safety: {
        toxicity: "Quá liều gây ngừng tim (dùng trong tiêm tử hình).",
        hazards: "Nguy hiểm cháy nổ cao hơn Natri.",
      },
    },
    styles: {
      color: "bg-pink-400",
      border: "border-pink-600",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 20,
      symbol: "Ca",
      nameVI: "Canxi",
      nameEN: "Calcium",
      atomicMass: 40.078,
      electronConfig: "[Ar] 4s²",
      valenceElectrons: 2,
      en: 1.0,
      ox: "+2",
    },
    details: {
      origin: "Tiếng Latin 'calx' (vôi).",
      position: {
        group: "IIA",
        period: 4,
        block: "s",
        type: "Kim loại kiềm thổ",
      },
      physical: {
        state: "Rắn",
        color: "Trắng bạc (xám xỉn nhanh)",
        density: "1.55 g/cm³",
        meltingPoint: "842°C",
        boilingPoint: "1484°C",
        properties: "Ngọn lửa màu đỏ cam.",
      },
      chemical: {
        type: "Kim loại kiềm thổ, mạnh.",
        reactivity: "Tác dụng với nước (sủi bọt H₂), axit.",
        notableReactions: "Ca + 2H₂O → Ca(OH)₂ + H₂",
      },
      isotopes: {
        summary: "6 đồng vị bền.",
        list: [{ name: "⁴⁰Ca", abundance: "96.9%", role: "Phổ biến" }],
      },
      compounds: [
        {
          formula: "CaCO₃",
          name: "Đá vôi",
          desc: "Xi măng, phấn viết, vỏ sò.",
        },
        { formula: "CaO", name: "Vôi sống", desc: "Hút ẩm, xây dựng." },
        { formula: "CaSO₄", name: "Thạch cao", desc: "Bó bột, trần nhà." },
      ],
      applications:
        "Xây dựng (Xi măng, bê tông), luyện kim (khử oxy/lưu huỳnh), sinh học (cấu tạo xương/răng, đông máu, dẫn truyền thần kinh).",
      naturalOccurrence: "Phổ biến thứ 5 vỏ Trái Đất.",
      preparation: { industry: "Điện phân nóng chảy CaCl₂." },
      safety: {
        toxicity: "Không độc.",
        hazards: "Phản ứng CaO + nước tỏa nhiệt rất mạnh gây bỏng.",
      },
    },
    styles: {
      color: "bg-yellow-300",
      border: "border-yellow-500",
      text: "text-gray-900",
    },
  },
  {
    basic: {
      number: 21,
      symbol: "Sc",
      nameVI: "Scandi",
      nameEN: "Scandium",
      atomicMass: 44.956,
      electronConfig: "[Ar] 3d¹ 4s²",
      valenceElectrons: 3,
      en: 1.36,
      ox: "+3",
    },
    details: {
      origin: "Tiếng Latin 'Scandia' (vùng Scandinavia - Bắc Âu).",
      position: {
        group: "IIIB",
        period: 4,
        block: "d",
        type: "Kim loại chuyển tiếp",
      },
      physical: {
        state: "Rắn",
        color: "Trắng bạc (hơi vàng khi oxi hóa)",
        density: "2.98 g/cm³",
        meltingPoint: "1541°C",
        properties: "Khá mềm, nhẹ giống nhôm nhưng nóng chảy cao hơn.",
      },
      chemical: {
        type: "Kim loại chuyển tiếp.",
        reactivity: "Tan trong axit, phản ứng chậm với nước.",
        notableReactions: "2Sc + 6H₂O → 2Sc(OH)₃ + 3H₂",
      },
      isotopes: { summary: "1 đồng vị bền (⁴⁵Sc).", list: [] },
      compounds: [{ formula: "Sc₂O₃", name: "Scandi oxit", desc: "" }],
      applications:
        "Hợp kim Nhôm-Scandi (siêu nhẹ, siêu bền cho máy bay tiêm kích MiG, vợt bóng chày, khung xe đạp), đèn sân vận động (ánh sáng giống mặt trời).",
      naturalOccurrence: "Phân tán loãng, hiếm mỏ tập trung.",
      preparation: { industry: "Điện phân ScCl₃." },
      safety: {
        toxicity: "Chưa rõ, coi là độc nhẹ.",
        hazards: "Bột mịn dễ cháy.",
      },
    },
    styles: {
      color: "bg-slate-400",
      border: "border-slate-600",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 22,
      symbol: "Ti",
      nameVI: "Titan",
      nameEN: "Titanium",
      atomicMass: 47.867,
      electronConfig: "[Ar] 3d² 4s²",
      valenceElectrons: 4,
      en: 1.54,
      ox: "+2, +3, +4",
    },
    details: {
      origin:
        "Theo tên các vị thần 'Titans' trong thần thoại Hy Lạp (tượng trưng sức mạnh).",
      position: {
        group: "IVB",
        period: 4,
        block: "d",
        type: "Kim loại chuyển tiếp",
      },
      physical: {
        state: "Rắn",
        color: "Bạc kim loại",
        density: "4.5 g/cm³",
        meltingPoint: "1668°C",
        boilingPoint: "3287°C",
        properties: "Siêu bền, nhẹ, chịu nhiệt, không từ tính.",
      },
      chemical: {
        type: "Kim loại chuyển tiếp.",
        reactivity: "Bền vững nhờ lớp oxit. Chịu được nước biển và axit loãng.",
        notableReactions: "Ti + O₂ → TiO₂ (nhiệt độ cao)",
      },
      isotopes: {
        summary: "5 đồng vị bền.",
        list: [{ name: "⁴⁸Ti", abundance: "73.7%", role: "Phổ biến" }],
      },
      compounds: [
        {
          formula: "TiO₂",
          name: "Titan đioxit",
          desc: "Màu trắng tuyệt đối (sơn, kem chống nắng, kem đánh răng).",
        },
        {
          formula: "TiN",
          name: "Titan nitride",
          desc: "Lớp phủ màu vàng kim loại, siêu cứng cho mũi khoan.",
        },
      ],
      applications:
        "Hàng không vũ trụ (động cơ máy bay), y tế (khớp nhân tạo, nẹp xương vì trơ sinh học), gọng kính, trang sức.",
      naturalOccurrence: "Phổ biến thứ 9 vỏ Trái Đất (Ilmenite, Rutile).",
      preparation: { industry: "Quy trình Kroll: TiCl₄ + 2Mg → Ti + 2MgCl₂." },
      safety: {
        toxicity: "Trơ sinh học, không độc.",
        hazards: "Bột Titan rất dễ nổ.",
      },
    },
    styles: {
      color: "bg-slate-500",
      border: "border-slate-700",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 23,
      symbol: "V",
      nameVI: "Vanadi",
      nameEN: "Vanadium",
      atomicMass: 50.942,
      electronConfig: "[Ar] 3d³ 4s²",
      valenceElectrons: 5,
      en: 1.63,
      ox: "+2, +3, +4, +5",
    },
    details: {
      origin:
        "Từ tên nữ thần 'Vanadis' (Bắc Âu) do các hợp chất có màu sắc rực rỡ.",
      position: {
        group: "VB",
        period: 4,
        block: "d",
        type: "Kim loại chuyển tiếp",
      },
      physical: {
        state: "Rắn",
        color: "Xám bạc",
        density: "6.0 g/cm³",
        meltingPoint: "1910°C",
        properties: "Cứng, dẻo.",
      },
      chemical: {
        type: "Kim loại chuyển tiếp.",
        reactivity:
          "Bền ở nhiệt độ thường. Có nhiều trạng thái oxi hóa (+2 tím, +3 lục, +4 xanh dương, +5 vàng).",
        notableReactions: "",
      },
      isotopes: { summary: "1 đồng vị bền (⁵¹V).", list: [] },
      compounds: [
        {
          formula: "V₂O₅",
          name: "Vanadi(V) oxit",
          desc: "Xúc tác sản xuất axit H₂SO₄.",
        },
      ],
      applications:
        "Hợp kim thép (Ferrovanadium) làm dụng cụ cắt, cờ lê, trục xe, lò xo giảm xóc (thép siêu cứng), pin dòng chảy Vanadium (lưu trữ năng lượng tái tạo).",
      naturalOccurrence: "Trong quặng Vanadinite.",
      preparation: { industry: "Khử V₂O₅ bằng canxi hoặc nhôm." },
      safety: {
        toxicity: "Hợp chất Vanadi độc hại (kích ứng hô hấp).",
        hazards: "",
      },
    },
    styles: {
      color: "bg-slate-500",
      border: "border-slate-700",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 24,
      symbol: "Cr",
      nameVI: "Crom",
      nameEN: "Chromium",
      atomicMass: 51.996,
      electronConfig: "[Ar] 3d⁵ 4s¹",
      valenceElectrons: 6,
      en: 1.66,
      ox: "+2, +3, +6",
    },
    details: {
      origin: "Tiếng Hy Lạp 'chroma' (màu sắc).",
      position: {
        group: "VIB",
        period: 4,
        block: "d",
        type: "Kim loại chuyển tiếp",
      },
      physical: {
        state: "Rắn",
        color: "Trắng bạc ánh xanh",
        density: "7.19 g/cm³",
        meltingPoint: "1907°C",
        properties: "Cứng nhất trong các kim loại, đánh bóng được như gương.",
      },
      chemical: {
        type: "Kim loại chuyển tiếp.",
        reactivity:
          "Thụ động hóa trong không khí. Hợp chất Crom(VI) có tính oxi hóa rất mạnh.",
        notableReactions: "Tạo lớp màng oxit Cr₂O₃ siêu mỏng bảo vệ thép.",
      },
      isotopes: {
        summary: "4 đồng vị bền.",
        list: [{ name: "⁵²Cr", abundance: "83.8%", role: "" }],
      },
      compounds: [
        {
          formula: "Cr₂O₃",
          name: "Crom(III) oxit",
          desc: "Màu lục (phẩm màu sơn).",
        },
        {
          formula: "K₂Cr₂O₇",
          name: "Kali dicromat",
          desc: "Màu cam, chất oxi hóa mạnh, độc.",
        },
      ],
      applications:
        "Thép không gỉ (Inox - chứa >11% Crom), mạ crom (trang trí, chống xước xe máy), thuộc da, phẩm màu.",
      naturalOccurrence: "Quặng Chromite (FeCr₂O₄).",
      preparation: { industry: "Nhiệt nhôm Cr₂O₃ hoặc khử quặng." },
      safety: {
        toxicity:
          "Cr(III) cần thiết lượng vết. Cr(VI) RẤT ĐỘC và gây ung thư (phim 'Erin Brockovich').",
        hazards: "Gây loét da.",
      },
    },
    styles: {
      color: "bg-slate-500",
      border: "border-slate-700",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 25,
      symbol: "Mn",
      nameVI: "Mangan",
      nameEN: "Manganese",
      atomicMass: 54.938,
      electronConfig: "[Ar] 3d⁵ 4s²",
      valenceElectrons: 7,
      en: 1.55,
      ox: "+2, +3, +4, +6, +7",
    },
    details: {
      origin: "Tiếng Latin 'magnes' (nam châm) - dễ nhầm với Mg.",
      position: {
        group: "VIIB",
        period: 4,
        block: "d",
        type: "Kim loại chuyển tiếp",
      },
      physical: {
        state: "Rắn",
        color: "Xám bạc",
        density: "7.21 g/cm³",
        meltingPoint: "1246°C",
        properties: "Rất cứng nhưng cực kỳ giòn.",
      },
      chemical: {
        type: "Kim loại chuyển tiếp.",
        reactivity: "Dễ bị oxi hóa. Đa dạng số oxi hóa (+2, +4, +7).",
        notableReactions: "",
      },
      isotopes: { summary: "1 đồng vị bền (⁵⁵Mn).", list: [] },
      compounds: [
        {
          formula: "MnO₂",
          name: "Mangan đioxit",
          desc: "Pin khô, xúc tác phân hủy H₂O₂.",
        },
        {
          formula: "KMnO₄",
          name: "Thuốc tím",
          desc: "Sát trùng, oxi hóa mạnh.",
        },
      ],
      applications:
        "Luyện thép (khử lưu huỳnh, tăng độ cứng - đường ray xe lửa, két sắt), vỏ lon nhôm (hợp kim Al-Mn), pin alkaline.",
      naturalOccurrence:
        "Quặng Pyrolusite (MnO₂). Dưới đáy biển có 'kết hạch mangan'.",
      preparation: { industry: "Điện phân hoặc khử bằng CO." },
      safety: {
        toxicity:
          "Bụi Mn gây hội chứng Manganism (tổn thương thần kinh giống Parkinson).",
        hazards: "",
      },
    },
    styles: {
      color: "bg-slate-600",
      border: "border-slate-800",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 26,
      symbol: "Fe",
      nameVI: "Sắt",
      nameEN: "Iron",
      atomicMass: 55.845,
      electronConfig: "[Ar] 3d⁶ 4s²",
      valenceElectrons: 8,
      en: 1.83,
      ox: "+2, +3, +6",
    },
    details: {
      origin: "Tiếng Anh cổ 'isern'. Kí hiệu Fe từ Latin 'ferrum'.",
      position: {
        group: "VIIIB",
        period: 4,
        block: "d",
        type: "Kim loại chuyển tiếp",
      },
      physical: {
        state: "Rắn",
        color: "Xám ánh kim",
        density: "7.87 g/cm³",
        meltingPoint: "1538°C",
        boilingPoint: "2862°C",
        properties: "Từ tính mạnh (làm nam châm), dẻo, dễ rèn.",
      },
      chemical: {
        type: "Kim loại trung bình.",
        reactivity: "Gỉ sét trong không khí ẩm (Fe₂O₃.nH₂O). Tan trong axit.",
        notableReactions: "Fe + 2HCl → FeCl₂ + H₂; 4Fe + 3O₂ + nH₂O → Gỉ sắt",
      },
      isotopes: {
        summary: "4 đồng vị bền.",
        list: [
          {
            name: "⁵⁶Fe",
            abundance: "91.7%",
            role: "Bền nhất vật lý hạt nhân",
          },
        ],
      },
      compounds: [
        { formula: "Fe₂O₃", name: "Hematit", desc: "Quặng sắt, màu đỏ." },
        { formula: "Fe₃O₄", name: "Magnetit", desc: "Từ tính, màu đen." },
        {
          formula: "FeSO₄",
          name: "Sắt sunfat",
          desc: "Bổ sung máu, xử lý nước.",
        },
      ],
      applications:
        "Xương sống của nền văn minh (Công trình, máy móc, ô tô, tàu bè), Hemoglobin (vận chuyển oxy trong máu).",
      naturalOccurrence:
        "Phổ biến thứ 4 vỏ Trái Đất, nhưng là thành phần chính của lõi Trái Đất.",
      preparation: {
        industry: "Lò cao: Khử quặng sắt bằng than cốc (CO) ở nhiệt độ cao.",
      },
      safety: {
        toxicity: "Thiếu sắt gây thiếu máu. Thừa sắt gây tổn thương gan.",
        hazards: "Bụi sắt dễ cháy.",
      },
    },
    styles: {
      color: "bg-gray-700",
      border: "border-gray-900",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 27,
      symbol: "Co",
      nameVI: "Coban",
      nameEN: "Cobalt",
      atomicMass: 58.933,
      electronConfig: "[Ar] 3d⁷ 4s²",
      valenceElectrons: 9,
      en: 1.88,
      ox: "+2, +3",
    }, // Nhóm VIIIB
    details: {
      origin:
        "Tiếng Đức 'kobold' (yêu tinh) - thợ mỏ tin rằng yêu tinh làm quặng không ra đồng và sinh khí độc (thực ra là Asen).",
      position: {
        group: "VIIIB",
        period: 4,
        block: "d",
        type: "Kim loại chuyển tiếp",
      },
      physical: {
        state: "Rắn",
        color: "Xám bạc ánh xanh",
        density: "8.90 g/cm³",
        meltingPoint: "1495°C",
        properties: "Từ tính mạnh, cứng.",
      },
      chemical: {
        type: "Kim loại chuyển tiếp.",
        reactivity: "Bền hơn sắt, tan chậm trong axit loãng.",
        notableReactions: "",
      },
      isotopes: {
        summary: "1 đồng vị bền (⁵⁹Co).",
        list: [
          {
            name: "⁶⁰Co",
            abundance: "Nhân tạo",
            role: "Phóng xạ gamma (xạ trị ung thư)",
          },
        ],
      },
      compounds: [
        {
          formula: "LiCoO₂",
          name: "Liti Coban Oxit",
          desc: "Cực dương pin điện thoại/laptop.",
        },
        {
          formula: "CoAl₂O₄",
          name: "Màu xanh Coban",
          desc: "Gốm sứ, thủy tinh xanh.",
        },
        {
          formula: "Vitamin B12",
          name: "Cyanocobalamin",
          desc: "Cần thiết cho sự sống.",
        },
      ],
      applications:
        "Pin sạc Li-ion, nam châm vĩnh cửu (Alnico), hợp kim siêu bền chịu nhiệt (động cơ phản lực), xạ trị y tế.",
      naturalOccurrence:
        "Trong quặng Cobaltite (CoAsS). Thường đi kèm niken và đồng.",
      preparation: { industry: "Sản phẩm phụ khi luyện đồng/niken." },
      safety: {
        toxicity: "Cần thiết lượng vết (B12), nhưng độc ở nồng độ cao.",
        hazards: "Bụi coban gây bệnh phổi.",
      },
    },
    styles: {
      color: "bg-blue-800",
      border: "border-blue-950",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 28,
      symbol: "Ni",
      nameVI: "Niken",
      nameEN: "Nickel",
      atomicMass: 58.693,
      electronConfig: "[Ar] 3d⁸ 4s²",
      valenceElectrons: 10,
      en: 1.91,
      ox: "+2, +3",
    },
    details: {
      origin:
        "Tiếng Đức 'Kupfernickel' (đồng của quỷ) - quặng giống đồng nhưng không lấy được đồng.",
      position: {
        group: "VIIIB",
        period: 4,
        block: "d",
        type: "Kim loại chuyển tiếp",
      },
      physical: {
        state: "Rắn",
        color: "Trắng bạc hơi vàng",
        density: "8.90 g/cm³",
        meltingPoint: "1455°C",
        properties: "Dẻo, dễ rèn, từ tính nhẹ.",
      },
      chemical: {
        type: "Kim loại chuyển tiếp.",
        reactivity: "Rất bền với không khí và nước (chống gỉ tốt).",
        notableReactions: "",
      },
      isotopes: {
        summary: "5 đồng vị bền.",
        list: [{ name: "⁵⁸Ni", abundance: "68%", role: "" }],
      },
      compounds: [
        { formula: "NiCd", name: "Pin Niken-Cadimi", desc: "Pin sạc cũ." },
        {
          formula: "NiMH",
          name: "Pin Niken-Hyđrua",
          desc: "Pin sạc thông dụng.",
        },
      ],
      applications:
        "Thép không gỉ (Inox 304 chứa 8-10% Ni), tiền xu, pin sạc, mạ bảo vệ kim loại, dây đàn guitar điện.",
      naturalOccurrence:
        "Trong thiên thạch sắt và lõi Trái Đất. Quặng Laterite.",
      preparation: { industry: "Quy trình Mond (dùng CO để tinh chế)." },
      safety: {
        toxicity:
          "Gây dị ứng tiếp xúc da phổ biến nhất (ngứa khi đeo trang sức giả).",
        hazards: "Hợp chất Ni(CO)₄ cực độc.",
      },
    },
    styles: {
      color: "bg-zinc-500",
      border: "border-zinc-700",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 29,
      symbol: "Cu",
      nameVI: "Đồng",
      nameEN: "Copper",
      atomicMass: 63.546,
      electronConfig: "[Ar] 3d¹⁰ 4s¹",
      valenceElectrons: 11,
      en: 1.9,
      ox: "+1, +2",
    }, // Ngoại lệ cấu hình
    details: {
      origin:
        "Tiếng Latin 'Cuprum' (đảo Síp - nơi khai thác đồng thời cổ đại).",
      position: {
        group: "IB",
        period: 4,
        block: "d",
        type: "Kim loại chuyển tiếp",
      },
      physical: {
        state: "Rắn",
        color: "Đỏ cam đặc trưng",
        density: "8.96 g/cm³",
        meltingPoint: "1085°C",
        properties: "Dẫn điện/nhiệt cực tốt (chỉ sau Bạc), kháng khuẩn.",
      },
      chemical: {
        type: "Kim loại yếu.",
        reactivity:
          "Không tác dụng với axit loãng không có tính oxi hóa. Bị oxi hóa chậm trong không khí ẩm tạo gỉ xanh (CuCO₃).",
        notableReactions: "Cu + 2H₂SO₄ (đặc) → CuSO₄ + SO₂ + 2H₂O",
      },
      isotopes: {
        summary: "2 đồng vị bền.",
        list: [{ name: "⁶³Cu", abundance: "69%", role: "" }],
      },
      compounds: [
        {
          formula: "CuSO₄",
          name: "Đồng sunfat",
          desc: "Màu xanh dương, diệt nấm, hồ bơi.",
        },
        {
          formula: "Đồng thau",
          name: "Hợp kim Cu-Zn",
          desc: "Nhạc cụ, chi tiết máy.",
        },
        {
          formula: "Đồng thiếc",
          name: "Hợp kim Cu-Sn",
          desc: "Chuông, tượng.",
        },
      ],
      applications:
        "Dây điện, ống nước, tiền xu, tản nhiệt máy tính, đúc tượng, mái nhà kiến trúc.",
      naturalOccurrence:
        "Đôi khi gặp dạng tự nhiên (đồng nguyên chất). Quặng Chalcopyrite.",
      preparation: { industry: "Hỏa luyện hoặc thủy luyện từ quặng." },
      safety: {
        toxicity: "Thấp, nhưng dư thừa gây bệnh Wilson.",
        hazards: "Độc với động vật không xương sống (ốc, tảo).",
      },
    },
    styles: {
      color: "bg-amber-600",
      border: "border-amber-800",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 30,
      symbol: "Zn",
      nameVI: "Kẽm",
      nameEN: "Zinc",
      atomicMass: 65.38,
      electronConfig: "[Ar] 3d¹⁰ 4s²",
      valenceElectrons: 12,
      en: 1.65,
      ox: "+2",
    },
    details: {
      origin:
        "Tiếng Đức 'Zinke' (nhọn/răng cưa - hình dáng tinh thể trong lò luyện).",
      position: {
        group: "IIB",
        period: 4,
        block: "d",
        type: "Kim loại chuyển tiếp",
      },
      physical: {
        state: "Rắn",
        color: "Xám xanh nhạt",
        density: "7.14 g/cm³",
        meltingPoint: "419.5°C",
        properties: "Giòn ở nhiệt độ thường, dẻo ở 100°C.",
      },
      chemical: {
        type: "Kim loại hoạt động trung bình (lưỡng tính).",
        reactivity: "Tác dụng axit, kiềm. Bảo vệ sắt khỏi ăn mòn (hy sinh).",
        notableReactions: "Zn + 2HCl → ZnCl₂ + H₂",
      },
      isotopes: {
        summary: "5 đồng vị bền.",
        list: [{ name: "⁶⁴Zn", abundance: "48.6%", role: "" }],
      },
      compounds: [
        {
          formula: "ZnO",
          name: "Kẽm oxit",
          desc: "Kem chống nắng vật lý, cao su, mỹ phẩm.",
        },
        { formula: "ZnS", name: "Kẽm sunfua", desc: "Phát quang." },
      ],
      applications:
        "Mạ kẽm (galvanizing) bảo vệ tôn/thép, hợp kim đồng thau, pin kẽm-carbon, đúc chi tiết ô tô.",
      naturalOccurrence: "Quặng Sphalerite (ZnS).",
      preparation: { industry: "Nung ZnS thành ZnO rồi khử bằng than cốc." },
      safety: {
        toxicity:
          "Thấp (cần thiết cho miễn dịch). Hít khói ZnO gây 'sốt hơi kim loại'.",
        hazards: "",
      },
    },
    styles: {
      color: "bg-sky-400",
      border: "border-sky-700",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 31,
      symbol: "Ga",
      nameVI: "Gali",
      nameEN: "Gallium",
      atomicMass: 69.723,
      electronConfig: "[Ar] 3d¹⁰ 4s² 4p¹",
      valenceElectrons: 3,
      en: 1.81,
      ox: "+3",
    },
    details: {
      origin: "Tiếng Latin 'Gallia' (nước Pháp).",
      position: { group: "IIIA", period: 4, block: "p", type: "Kim loại yếu" },
      physical: {
        state: "Rắn (nhưng tan chảy trong tay)",
        color: "Bạc trắng",
        density: "5.91 g/cm³",
        meltingPoint: "29.76°C",
        boilingPoint: "2204°C",
        properties: "Khoảng lỏng rộng nhất trong các kim loại.",
      },
      chemical: {
        type: "Kim loại yếu.",
        reactivity: "Ăn mòn nhôm cực mạnh (làm nhôm giòn tan như bánh quy).",
        notableReactions: "Ga lỏng + Al rắn → Hợp kim giòn.",
      },
      isotopes: { summary: "2 đồng vị bền.", list: [] },
      compounds: [
        {
          formula: "GaAs",
          name: "Gali Arsenua",
          desc: "Chất bán dẫn tốc độ cao, đèn LED đỏ.",
        },
        {
          formula: "GaN",
          name: "Gali Nitrua",
          desc: "Đèn LED xanh dương (Nobel 2014), sạc nhanh.",
        },
      ],
      applications:
        "Chất bán dẫn (điện thoại, vệ tinh), nhiệt kế y tế (thay thủy ngân), đèn LED, tấm pin mặt trời.",
      naturalOccurrence:
        "Không có quặng riêng, đi kèm trong quặng Bauxite và Kẽm.",
      preparation: { industry: "Sản phẩm phụ công nghiệp nhôm." },
      safety: {
        toxicity: "Thấp.",
        hazards: "Làm hỏng cấu trúc kim loại khác (nhôm, thép) nếu tiếp xúc.",
      },
    },
    styles: {
      color: "bg-indigo-400",
      border: "border-indigo-600",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 32,
      symbol: "Ge",
      nameVI: "Tecmani",
      nameEN: "Germanium",
      atomicMass: 72.63,
      electronConfig: "[Ar] 3d¹⁰ 4s² 4p²",
      valenceElectrons: 4,
      en: 2.01,
      ox: "-4, +2, +4",
    },
    details: {
      origin: "Tiếng Latin 'Germania' (nước Đức).",
      position: { group: "IVA", period: 4, block: "p", type: "Á kim" },
      physical: {
        state: "Rắn",
        color: "Trắng xám",
        density: "5.32 g/cm³",
        meltingPoint: "938°C",
        properties: "Bán dẫn, trong suốt với tia hồng ngoại.",
      },
      chemical: {
        type: "Á kim.",
        reactivity: "Giống Silic nhưng hoạt động hơn một chút.",
        notableReactions: "",
      },
      isotopes: { summary: "5 đồng vị bền.", list: [] },
      compounds: [
        {
          formula: "GeO₂",
          name: "Tecmani đioxit",
          desc: "Lõi sợi quang, xúc tác nhựa PET.",
        },
      ],
      applications:
        "Transistor đầu tiên làm từ Ge, sợi quang học (internet), ống kính camera hồng ngoại (quân sự/ban đêm), pin mặt trời vệ tinh.",
      naturalOccurrence: "Hiếm, lẫn trong quặng kẽm và than đá.",
      preparation: { industry: "Chưng cất phân đoạn từ bụi lò luyện kẽm." },
      safety: { toxicity: "Thấp, một số hợp chất hữu cơ Ge độc.", hazards: "" },
    },
    styles: {
      color: "bg-amber-500",
      border: "border-amber-700",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 33,
      symbol: "As",
      nameVI: "Asen",
      nameEN: "Arsenic",
      atomicMass: 74.922,
      electronConfig: "[Ar] 3d¹⁰ 4s² 4p³",
      valenceElectrons: 5,
      en: 2.18,
      ox: "-3, +3, +5",
    },
    details: {
      origin: "Tiếng Ba Tư 'zarnikh' (màu vàng).",
      position: { group: "VA", period: 4, block: "p", type: "Á kim" },
      physical: {
        state: "Rắn",
        color: "Xám kim loại (bền), Vàng (không bền)",
        density: "5.73 g/cm³",
        meltingPoint: "Thăng hoa ở 614°C",
        properties: "Giòn.",
      },
      chemical: {
        type: "Á kim, độc.",
        reactivity: "Oxi hóa khi đun nóng (mùi tỏi).",
        notableReactions: "",
      },
      isotopes: { summary: "1 đồng vị bền (⁷⁵As).", list: [] },
      compounds: [
        {
          formula: "As₂O₃",
          name: "Thạch tín",
          desc: "Chất độc nổi tiếng trong lịch sử.",
        },
        { formula: "GaAs", name: "Gali Arsenua", desc: "Bán dẫn." },
      ],
      applications:
        "Chất bán dẫn (GaAs) trong chip điện thoại, thuốc trừ sâu/diệt cỏ (đã hạn chế), hợp kim làm cứng chì (đạn, ắc quy).",
      naturalOccurrence: "Khoáng vật Realgar, Orpiment.",
      preparation: { industry: "Nung quặng FeAsS trong không khí." },
      safety: {
        toxicity:
          "RẤT ĐỘC và gây ung thư. Ô nhiễm asen trong nước ngầm là vấn đề lớn.",
        hazards: "Thăng hoa tạo khói độc.",
      },
    },
    styles: {
      color: "bg-amber-400",
      border: "border-amber-600",
      text: "text-gray-900",
    },
  },
  {
    basic: {
      number: 34,
      symbol: "Se",
      nameVI: "Selen",
      nameEN: "Selenium",
      atomicMass: 78.971,
      electronConfig: "[Ar] 3d¹⁰ 4s² 4p⁴",
      valenceElectrons: 6,
      en: 2.55,
      ox: "-2, +4, +6",
    },
    details: {
      origin:
        "Tiếng Hy Lạp 'selene' (Mặt trăng - vì đi cùng Tellurium là Trái đất).",
      position: { group: "VIA", period: 4, block: "p", type: "Phi kim" },
      physical: {
        state: "Rắn",
        color: "Xám (bền), Đỏ",
        density: "4.81 g/cm³",
        meltingPoint: "221°C",
        properties: "Dẫn điện tăng khi có ánh sáng chiếu vào (quang dẫn).",
      },
      chemical: {
        type: "Phi kim.",
        reactivity: "Giống lưu huỳnh.",
        notableReactions: "",
      },
      isotopes: { summary: "6 đồng vị bền.", list: [] },
      compounds: [
        { formula: "SeS₂", name: "Selen sunfua", desc: "Dầu gội trị gàu." },
      ],
      applications:
        "Trống máy photocopy (nhờ tính quang dẫn), sản xuất thủy tinh đỏ (đèn giao thông), pin mặt trời (CIGS), thực phẩm chức năng (chống oxy hóa).",
      naturalOccurrence: "Tạp chất trong quặng đồng sunfua.",
      preparation: { industry: "Sản phẩm phụ tinh chế đồng." },
      safety: {
        toxicity:
          "Cần thiết lượng vết, nhưng độc như thạch tín nếu liều cao. Hơi thở có mùi tỏi khi ngộ độc.",
        hazards: "",
      },
    },
    styles: {
      color: "bg-yellow-600",
      border: "border-yellow-800",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 35,
      symbol: "Br",
      nameVI: "Brom",
      nameEN: "Bromine",
      atomicMass: 79.904,
      electronConfig: "[Ar] 3d¹⁰ 4s² 4p⁵",
      valenceElectrons: 7,
      en: 2.96,
      ox: "-1, +1, +3, +5, +7",
    },
    details: {
      origin: "Tiếng Hy Lạp 'bromos' (mùi hôi thối).",
      position: {
        group: "VIIA",
        period: 4,
        block: "p",
        type: "Phi kim (Halogen)",
      },
      physical: {
        state: "Lỏng",
        color: "Đỏ nâu (bốc khói mạnh)",
        density: "3.1 g/cm³",
        meltingPoint: "-7.2°C",
        boilingPoint: "58.8°C",
        properties: "Là phi kim lỏng duy nhất ở nhiệt độ thường.",
      },
      chemical: {
        type: "Phi kim mạnh (yếu hơn Clo).",
        reactivity: "Oxi hóa kim loại, gây bỏng da nghiêm trọng.",
        notableReactions:
          "Cộng vào liên kết đôi hữu cơ (làm mất màu nước brom).",
      },
      isotopes: {
        summary: "2 đồng vị bền.",
        list: [
          { name: "⁷⁹Br", abundance: "50.7%", role: "" },
          { name: "⁸¹Br", abundance: "49.3%", role: "" },
        ],
      },
      compounds: [
        {
          formula: "AgBr",
          name: "Bạc bromua",
          desc: "Phim ảnh truyền thống (nhạy sáng).",
        },
        { formula: "HBr", name: "Axit Bromhydric", desc: "Axit mạnh." },
      ],
      applications:
        "Chất chống cháy (nhựa vỏ tivi, máy tính), dung dịch khoan dầu khí, phim ảnh (cũ), thuốc trừ sâu (methyl bromide - đã cấm nhiều nơi).",
      naturalOccurrence: "Trong nước biển và hồ muối (Biển Chết).",
      preparation: {
        industry:
          "Dùng khí Clo oxi hóa muối Bromua: Cl₂ + 2NaBr → 2NaCl + Br₂.",
      },
      safety: {
        toxicity: "Rất độc, ăn mòn da và đường hô hấp.",
        hazards: "Gây bỏng hóa học sâu.",
      },
    },
    styles: {
      color: "bg-green-600",
      border: "border-green-800",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 36,
      symbol: "Kr",
      nameVI: "Krypton",
      nameEN: "Krypton",
      atomicMass: 83.798,
      electronConfig: "[Ar] 3d¹⁰ 4s² 4p⁶",
      valenceElectrons: 8,
      en: 3.0,
      ox: "+2",
    },
    details: {
      origin: "Tiếng Hy Lạp 'kryptos' (ẩn giấu).",
      position: { group: "VIIIA", period: 4, block: "p", type: "Khí hiếm" },
      physical: {
        state: "Khí",
        color: "Không màu (sáng trắng chói lòa trong điện trường)",
        density: "3.75 g/L",
        meltingPoint: "-157.4°C",
        properties: "Nặng hơn không khí.",
      },
      chemical: {
        type: "Khí hiếm.",
        reactivity:
          "Trơ, nhưng có thể tạo hợp chất với Flo ở điều kiện cực khắc nghiệt.",
        notableReactions: "Kr + F₂ → KrF₂ (-196°C)",
      },
      isotopes: { summary: "6 đồng vị bền.", list: [] },
      compounds: [
        {
          formula: "KrF₂",
          name: "Krypton diflorua",
          desc: "Chất oxi hóa cực mạnh.",
        },
      ],
      applications:
        "Đèn flash máy ảnh tốc độ cao, đèn sân bay (xuyên sương mù), laser y tế phẫu thuật mắt, lớp cách nhiệt cửa sổ cao cấp.",
      naturalOccurrence: "Rất hiếm trong khí quyển (1 ppm).",
      preparation: { industry: "Chưng cất phân đoạn không khí." },
      safety: { toxicity: "Không độc.", hazards: "Gây ngạt." },
    },
    styles: {
      color: "bg-cyan-500",
      border: "border-cyan-700",
      text: "text-white",
    },
  },

  // =========================================================================
  // CHU KỲ 5
  // =========================================================================
  {
    basic: {
      number: 37,
      symbol: "Rb",
      nameVI: "Rubidi",
      nameEN: "Rubidium",
      atomicMass: 85.468,
      electronConfig: "[Kr] 5s¹",
      valenceElectrons: 1,
      en: 0.82,
      ox: "+1",
    },
    details: {
      origin: "Tiếng Latin 'rubidus' (đỏ thẫm - màu vạch quang phổ).",
      position: { group: "IA", period: 5, block: "s", type: "Kim loại kiềm" },
      physical: {
        state: "Rắn",
        color: "Trắng bạc",
        density: "1.53 g/cm³",
        meltingPoint: "39.3°C (nóng chảy ngày hè)",
        properties: "Rất mềm.",
      },
      chemical: {
        type: "Kim loại kiềm, hoạt động rất mạnh.",
        reactivity: "Bốc cháy ngay trong không khí, nổ mạnh với nước.",
        notableReactions: "2Rb + 2H₂O → 2RbOH + H₂",
      },
      isotopes: {
        summary: "1 đồng vị bền (⁸⁵Rb), 1 phóng xạ nhẹ tự nhiên (⁸⁷Rb).",
        list: [],
      },
      compounds: [],
      applications:
        "Đồng hồ nguyên tử (GPS), pháo hoa (màu tím), tế bào quang điện, động cơ ion cho tàu vũ trụ (tiềm năng).",
      naturalOccurrence: "Trong khoáng vật Lepidolite.",
      preparation: { industry: "Khử RbCl bằng Canxi." },
      safety: { toxicity: "Nhẹ.", hazards: "Nguy hiểm cháy nổ cao." },
    },
    styles: {
      color: "bg-pink-500",
      border: "border-pink-700",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 38,
      symbol: "Sr",
      nameVI: "Stronti",
      nameEN: "Strontium",
      atomicMass: 87.62,
      electronConfig: "[Kr] 5s²",
      valenceElectrons: 2,
      en: 0.95,
      ox: "+2",
    },
    details: {
      origin: "Tên ngôi làng 'Strontian' ở Scotland.",
      position: {
        group: "IIA",
        period: 5,
        block: "s",
        type: "Kim loại kiềm thổ",
      },
      physical: {
        state: "Rắn",
        color: "Vàng nhạt",
        density: "2.64 g/cm³",
        meltingPoint: "777°C",
        properties: "Cháy với ngọn lửa màu đỏ rực.",
      },
      chemical: {
        type: "Kim loại kiềm thổ.",
        reactivity: "Tác dụng mạnh với nước (như Canxi nhưng mạnh hơn).",
        notableReactions: "",
      },
      isotopes: {
        summary: "4 đồng vị bền.",
        list: [
          {
            name: "⁹⁰Sr",
            abundance: "Nhân tạo",
            role: "Phóng xạ nguy hiểm từ bom hạt nhân (tích tụ vào xương)",
          },
        ],
      },
      compounds: [
        {
          formula: "Sr(NO₃)₂",
          name: "Stronti nitrat",
          desc: "Tạo màu đỏ pháo hoa.",
        },
        {
          formula: "SrFe₁₂O₁₉",
          name: "Nam châm Ferrite",
          desc: "Nam châm tủ lạnh, loa.",
        },
      ],
      applications:
        "Pháo hoa (màu đỏ), nam châm gốm, sơn dạ quang, kem đánh răng cho răng nhạy cảm (SrCl₂).",
      naturalOccurrence: "Quặng Celestite (SrSO₄).",
      preparation: { industry: "Điện phân nóng chảy SrCl₂." },
      safety: {
        toxicity:
          "Sr không độc, nhưng đồng vị phóng xạ Sr-90 gây ung thư xương.",
        hazards: "Dễ cháy.",
      },
    },
    styles: {
      color: "bg-yellow-400",
      border: "border-yellow-600",
      text: "text-gray-900",
    },
  },
  {
    basic: {
      number: 39,
      symbol: "Y",
      nameVI: "Ytri",
      nameEN: "Yttrium",
      atomicMass: 88.906,
      electronConfig: "[Kr] 4d¹ 5s²",
      valenceElectrons: 3,
      en: 1.22,
      ox: "+3",
    },
    details: {
      origin: "Làng 'Ytterby' ở Thụy Điển (nơi tìm ra 4 nguyên tố đất hiếm).",
      position: {
        group: "IIIB",
        period: 5,
        block: "d",
        type: "Kim loại chuyển tiếp (Đất hiếm)",
      },
      physical: {
        state: "Rắn",
        color: "Trắng bạc",
        density: "4.47 g/cm³",
        meltingPoint: "1526°C",
        properties: "Giống nhóm Lanthanides.",
      },
      chemical: {
        type: "Kim loại đất hiếm.",
        reactivity: "Bền trong không khí.",
        notableReactions: "",
      },
      isotopes: { summary: "1 đồng vị bền (⁸⁹Y).", list: [] },
      compounds: [
        {
          formula: "YAG",
          name: "Yttrium Aluminum Garnet",
          desc: "Laser YAG (cắt kim loại, xóa xăm).",
        },
        {
          formula: "YBCO",
          name: "Gốm siêu dẫn",
          desc: "Siêu dẫn nhiệt độ cao.",
        },
      ],
      applications:
        "Đèn LED trắng (lớp phủ phosphor), màn hình màu (tạo màu đỏ), bugi đánh lửa, chất siêu dẫn.",
      naturalOccurrence: "Trong quặng Monazite.",
      preparation: { industry: "Trao đổi ion từ quặng đất hiếm." },
      safety: { toxicity: "Bụi gây bệnh phổi.", hazards: "" },
    },
    styles: {
      color: "bg-slate-400",
      border: "border-slate-600",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 40,
      symbol: "Zr",
      nameVI: "Zirco",
      nameEN: "Zirconium",
      atomicMass: 91.224,
      electronConfig: "[Kr] 4d² 5s²",
      valenceElectrons: 4,
      en: 1.33,
      ox: "+4",
    },
    details: {
      origin: "Tiếng Ba Tư 'zargun' (màu vàng kim).",
      position: {
        group: "IVB",
        period: 5,
        block: "d",
        type: "Kim loại chuyển tiếp",
      },
      physical: {
        state: "Rắn",
        color: "Trắng xám",
        density: "6.52 g/cm³",
        meltingPoint: "1855°C",
        properties: "Rất cứng, chịu ăn mòn cực tốt.",
      },
      chemical: {
        type: "Kim loại chuyển tiếp.",
        reactivity: "Kháng axit mạnh, trơ với neutron.",
        notableReactions: "",
      },
      isotopes: { summary: "5 đồng vị bền.", list: [] },
      compounds: [
        {
          formula: "ZrO₂",
          name: "Cubic Zirconia (CZ)",
          desc: "Kim cương nhân tạo.",
        },
        { formula: "Zircon", name: "ZrSiO₄", desc: "Đá quý, gốm sứ." },
      ],
      applications:
        "Vỏ thanh nhiên liệu hạt nhân (do không hấp thụ neutron), dao gốm (sắc vĩnh cửu), răng sứ, đá giả kim cương.",
      naturalOccurrence: "Khoáng vật Zircon (cát đen biển).",
      preparation: { industry: "Quy trình Kroll (giống Titan)." },
      safety: { toxicity: "Thấp.", hazards: "Bột Zr cực dễ cháy nổ." },
    },
    styles: {
      color: "bg-slate-500",
      border: "border-slate-700",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 41,
      symbol: "Nb",
      nameVI: "Niobi",
      nameEN: "Niobium",
      atomicMass: 92.906,
      electronConfig: "[Kr] 4d⁴ 5s¹",
      valenceElectrons: 5,
      en: 1.6,
      ox: "+3, +5",
    },
    details: {
      origin:
        "Tên nữ thần 'Niobe' (con của Tantalus - do Nb hay đi cùng Tantalum).",
      position: {
        group: "VB",
        period: 5,
        block: "d",
        type: "Kim loại chuyển tiếp",
      },
      physical: {
        state: "Rắn",
        color: "Xám, chuyển xanh khi oxit hóa",
        density: "8.57 g/cm³",
        meltingPoint: "2477°C",
        properties: "Siêu dẫn ở nhiệt độ thấp.",
      },
      chemical: {
        type: "Kim loại chuyển tiếp.",
        reactivity: "Rất trơ.",
        notableReactions: "",
      },
      isotopes: { summary: "1 đồng vị bền.", list: [] },
      compounds: [
        {
          formula: "NbTi",
          name: "Hợp kim Niobi-Titan",
          desc: "Dây siêu dẫn máy MRI.",
        },
      ],
      applications:
        "Nam châm siêu dẫn (máy MRI, máy gia tốc hạt), thép hợp kim thấp (đường ống dẫn dầu, cầu), trang sức (tạo màu bằng điện phân).",
      naturalOccurrence: "Khoáng vật Columbite.",
      preparation: { industry: "Khử phức florua." },
      safety: { toxicity: "Thấp.", hazards: "" },
    },
    styles: {
      color: "bg-slate-500",
      border: "border-slate-700",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 42,
      symbol: "Mo",
      nameVI: "Molipden",
      nameEN: "Molybdenum",
      atomicMass: 95.95,
      electronConfig: "[Kr] 4d⁵ 5s¹",
      valenceElectrons: 6,
      en: 2.16,
      ox: "+2, +3, +4, +5, +6",
    },
    details: {
      origin: "Tiếng Hy Lạp 'molybdos' (chì - do quặng giống chì).",
      position: {
        group: "VIB",
        period: 5,
        block: "d",
        type: "Kim loại chuyển tiếp",
      },
      physical: {
        state: "Rắn",
        color: "Xám bạc",
        density: "10.28 g/cm³",
        meltingPoint: "2623°C",
        properties: "Nhiệt độ nóng chảy rất cao.",
      },
      chemical: {
        type: "Kim loại chuyển tiếp.",
        reactivity: "Bền.",
        notableReactions: "",
      },
      isotopes: { summary: "7 đồng vị bền.", list: [] },
      compounds: [
        {
          formula: "MoS₂",
          name: "Molipden disulfua",
          desc: "Chất bôi trơn rắn (chịu nhiệt cao).",
        },
      ],
      applications:
        "Thép siêu cứng (công cụ cắt, vỏ xe tăng), chất bôi trơn động cơ, điện cực lò nung thủy tinh.",
      naturalOccurrence: "Quặng Molybdenite (MoS₂).",
      preparation: { industry: "Tuyển nổi quặng rồi nung." },
      safety: { toxicity: "Thấp.", hazards: "" },
    },
    styles: {
      color: "bg-slate-500",
      border: "border-slate-700",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 43,
      symbol: "Tc",
      nameVI: "Tecneti",
      nameEN: "Technetium",
      atomicMass: 98,
      electronConfig: "[Kr] 4d⁵ 5s²",
      valenceElectrons: 7,
      en: 1.9,
      ox: "+4, +6, +7",
    },
    details: {
      origin: "Tiếng Hy Lạp 'technetos' (nhân tạo).",
      position: {
        group: "VIIB",
        period: 5,
        block: "d",
        type: "Kim loại chuyển tiếp (Phóng xạ)",
      },
      physical: {
        state: "Rắn",
        color: "Xám bạc",
        density: "11 g/cm³",
        meltingPoint: "2157°C",
        properties: "Nguyên tố nhân tạo đầu tiên.",
      },
      chemical: {
        type: "Kim loại phóng xạ.",
        reactivity: "Giống Rheni.",
        notableReactions: "",
      },
      isotopes: {
        summary: "Không có đồng vị bền.",
        list: [
          {
            name: "⁹⁹ᵐTc",
            abundance: "Nhân tạo",
            role: "Dùng phổ biến nhất trong chẩn đoán y học (xạ hình)",
          },
        ],
      },
      compounds: [],
      applications:
        "Y học hạt nhân (Chụp xạ hình xương, tim, thận - do chu kỳ bán rã ngắn 6h, ít hại người bệnh), chất xúc tác, tiêu chuẩn tia beta.",
      naturalOccurrence:
        "Hầu như không có tự nhiên (chỉ vết nhỏ trong mỏ uranium).",
      preparation: { industry: "Tách từ rác thải lò phản ứng hạt nhân." },
      safety: { toxicity: "Phóng xạ.", hazards: "Nguy hiểm phóng xạ." },
    },
    styles: {
      color: "bg-slate-500",
      border: "border-slate-700",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 44,
      symbol: "Ru",
      nameVI: "Ruteni",
      nameEN: "Ruthenium",
      atomicMass: 101.07,
      electronConfig: "[Kr] 4d⁷ 5s¹",
      valenceElectrons: 8,
      en: 2.2,
      ox: "+2, +3, +4, +6, +8",
    },
    details: {
      origin: "Tiếng Latin 'Ruthenia' (nước Nga).",
      position: {
        group: "VIIIB",
        period: 5,
        block: "d",
        type: "Kim loại chuyển tiếp (Nhóm Platin)",
      },
      physical: {
        state: "Rắn",
        color: "Trắng bạc",
        density: "12.45 g/cm³",
        meltingPoint: "2334°C",
        properties: "Rất cứng, giòn.",
      },
      chemical: {
        type: "Kim loại quý.",
        reactivity: "Trơ hóa học.",
        notableReactions: "",
      },
      isotopes: { summary: "7 đồng vị bền.", list: [] },
      compounds: [],
      applications:
        "Tiếp điểm điện (chống mài mòn), ngòi bút máy cao cấp, chất xúc tác hóa học, ổ cứng máy tính (lớp từ tính).",
      naturalOccurrence: "Lẫn với quặng Platin.",
      preparation: { industry: "Tinh chế từ quặng Platin." },
      safety: { toxicity: "Hợp chất RuO₄ rất độc và gây nổ.", hazards: "" },
    },
    styles: {
      color: "bg-slate-600",
      border: "border-slate-800",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 45,
      symbol: "Rh",
      nameVI: "Rodi",
      nameEN: "Rhodium",
      atomicMass: 102.91,
      electronConfig: "[Kr] 4d⁸ 5s¹",
      valenceElectrons: 9,
      en: 2.28,
      ox: "+2, +3, +4",
    },
    details: {
      origin: "Tiếng Hy Lạp 'rhodon' (hoa hồng - do dung dịch muối có màu đỏ).",
      position: {
        group: "VIIIB",
        period: 5,
        block: "d",
        type: "Kim loại chuyển tiếp (Nhóm Platin)",
      },
      physical: {
        state: "Rắn",
        color: "Trắng bạc lấp lánh",
        density: "12.41 g/cm³",
        meltingPoint: "1964°C",
        properties:
          "Phản xạ ánh sáng cực tốt, kim loại đắt nhất thế giới (thường xuyên).",
      },
      chemical: {
        type: "Kim loại quý.",
        reactivity: "Cực kỳ trơ, không bị ăn mòn ngay cả khi đun nóng.",
        notableReactions: "",
      },
      isotopes: { summary: "1 đồng vị bền.", list: [] },
      compounds: [],
      applications:
        "Bộ chuyển đổi xúc tác ô tô (giảm khí thải độc), mạ trang sức (vàng trắng/bạc được mạ Rhodium để sáng bóng), gương đèn pha.",
      naturalOccurrence: "Rất hiếm, đi cùng Platin.",
      preparation: { industry: "Tinh chế từ quặng Platin/Niken." },
      safety: { toxicity: "Hợp chất độc.", hazards: "" },
    },
    styles: {
      color: "bg-slate-600",
      border: "border-slate-800",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 46,
      symbol: "Pd",
      nameVI: "Paladi",
      nameEN: "Palladium",
      atomicMass: 106.42,
      electronConfig: "[Kr] 4d¹⁰",
      valenceElectrons: 10,
      en: 2.2,
      ox: "+2, +4",
    },
    details: {
      origin: "Tên tiểu hành tinh Pallas.",
      position: {
        group: "VIIIB",
        period: 5,
        block: "d",
        type: "Kim loại chuyển tiếp (Nhóm Platin)",
      },
      physical: {
        state: "Rắn",
        color: "Trắng bạc",
        density: "12.02 g/cm³",
        meltingPoint: "1555°C",
        properties: "Hấp thụ khí Hydro gấp 900 lần thể tích của nó.",
      },
      chemical: {
        type: "Kim loại quý.",
        reactivity: "Mềm nhất nhóm Platin.",
        notableReactions: "",
      },
      isotopes: { summary: "6 đồng vị bền.", list: [] },
      compounds: [],
      applications:
        "Bộ xúc tác ô tô, tụ điện gốm (điện tử), nha khoa (cầu răng), pin nhiên liệu hydro, trang sức.",
      naturalOccurrence: "Quặng niken-đồng.",
      preparation: { industry: "Sản phẩm phụ khai thác niken." },
      safety: { toxicity: "Thấp.", hazards: "" },
    },
    styles: {
      color: "bg-slate-600",
      border: "border-slate-800",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 47,
      symbol: "Ag",
      nameVI: "Bạc",
      nameEN: "Silver",
      atomicMass: 107.868,
      electronConfig: "[Kr] 4d¹⁰ 5s¹",
      valenceElectrons: 11,
      en: 1.93,
      ox: "+1",
    },
    details: {
      origin: "Tiếng Anh cổ 'seolfor'. Kí hiệu Ag từ Latin 'argentum'.",
      position: {
        group: "IB",
        period: 5,
        block: "d",
        type: "Kim loại chuyển tiếp",
      },
      physical: {
        state: "Rắn",
        color: "Trắng sáng",
        density: "10.49 g/cm³",
        meltingPoint: "961.8°C",
        properties:
          "Dẫn điện và dẫn nhiệt tốt nhất trong mọi kim loại, phản xạ ánh sáng cao nhất.",
      },
      chemical: {
        type: "Kim loại quý.",
        reactivity:
          "Không bị oxi hóa bởi Oxi, nhưng bị đen bởi H₂S (lưu huỳnh) trong không khí.",
        notableReactions: "4Ag + 2H₂S + O₂ → 2Ag₂S (đen) + 2H₂O",
      },
      isotopes: { summary: "2 đồng vị bền.", list: [] },
      compounds: [
        {
          formula: "AgNO₃",
          name: "Bạc nitrat",
          desc: "Sát trùng, tráng gương.",
        },
        { formula: "AgI", name: "Bạc iotua", desc: "Làm mưa nhân tạo." },
      ],
      applications:
        "Trang sức, tiền xu, pin mặt trời, gương, mạch in điện tử, tính kháng khuẩn (băng gạc y tế, tất khử mùi).",
      naturalOccurrence: "Dạng tự sinh hoặc quặng Argentite.",
      preparation: { industry: "Tách từ quặng chì/kẽm (phương pháp Parkes)." },
      safety: {
        toxicity:
          "Muối bạc độc với vi khuẩn. Tiếp xúc nhiều gây bệnh da xanh (Argyria).",
        hazards: "",
      },
    },
    styles: {
      color: "bg-gray-300",
      border: "border-gray-500",
      text: "text-gray-900",
    },
  },
  {
    basic: {
      number: 48,
      symbol: "Cd",
      nameVI: "Cadimi",
      nameEN: "Cadmium",
      atomicMass: 112.41,
      electronConfig: "[Kr] 4d¹⁰ 5s²",
      valenceElectrons: 12,
      en: 1.69,
      ox: "+2",
    },
    details: {
      origin: "Tiếng Latin 'cadmia' (khoáng vật kẽm cacbonat).",
      position: {
        group: "IIB",
        period: 5,
        block: "d",
        type: "Kim loại chuyển tiếp",
      },
      physical: {
        state: "Rắn",
        color: "Trắng bạc ánh xanh",
        density: "8.65 g/cm³",
        meltingPoint: "321°C",
        properties: "Mềm, dễ cắt.",
      },
      chemical: {
        type: "Kim loại nặng, độc.",
        reactivity: "Giống kẽm.",
        notableReactions: "",
      },
      isotopes: { summary: "8 đồng vị.", list: [] },
      compounds: [
        {
          formula: "CdS",
          name: "Cadimi sunfua",
          desc: "Sắc tố vàng tươi (Yellow pigment) cho sơn.",
        },
      ],
      applications:
        "Pin sạc Ni-Cd (đang bị thay thế), mạ điện chống ăn mòn, thanh điều khiển lò phản ứng hạt nhân (hấp thụ neutron), sắc tố sơn.",
      naturalOccurrence: "Tạp chất trong quặng kẽm.",
      preparation: { industry: "Phụ phẩm luyện kẽm." },
      safety: {
        toxicity: "CỰC ĐỘC. Gây loãng xương, suy thận (bệnh Itai-Itai ở Nhật).",
        hazards: "Tích tụ sinh học.",
      },
    },
    styles: {
      color: "bg-sky-500",
      border: "border-sky-700",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 49,
      symbol: "In",
      nameVI: "Indi",
      nameEN: "Indium",
      atomicMass: 114.82,
      electronConfig: "[Kr] 4d¹⁰ 5s² 5p¹",
      valenceElectrons: 3,
      en: 1.78,
      ox: "+3",
    },
    details: {
      origin: "Từ màu xanh 'indigo' (chàm) trong quang phổ.",
      position: { group: "IIIA", period: 5, block: "p", type: "Kim loại yếu" },
      physical: {
        state: "Rắn",
        color: "Trắng bạc",
        density: "7.31 g/cm³",
        meltingPoint: "156.6°C",
        properties: "Rất mềm, dính, kêu 'rắc' khi bị uốn cong (tin cry).",
      },
      chemical: {
        type: "Kim loại yếu.",
        reactivity: "Bền trong không khí.",
        notableReactions: "",
      },
      isotopes: { summary: "1 đồng vị bền.", list: [] },
      compounds: [
        {
          formula: "ITO",
          name: "Indium Tin Oxide",
          desc: "Trong suốt nhưng dẫn điện.",
        },
      ],
      applications:
        "Màn hình cảm ứng (điện thoại, tablet) nhờ lớp phủ ITO, hàn vi mạch, hợp kim nhiệt độ nóng chảy thấp.",
      naturalOccurrence: "Phụ phẩm quặng kẽm.",
      preparation: { industry: "Điện phân." },
      safety: { toxicity: "Thấp.", hazards: "" },
    },
    styles: {
      color: "bg-indigo-500",
      border: "border-indigo-700",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 50,
      symbol: "Sn",
      nameVI: "Thiếc",
      nameEN: "Tin",
      atomicMass: 118.71,
      electronConfig: "[Kr] 4d¹⁰ 5s² 5p²",
      valenceElectrons: 4,
      en: 1.96,
      ox: "+2, +4",
    },
    details: {
      origin: "Tiếng Anh cổ 'tin'. Kí hiệu Sn từ Latin 'stannum'.",
      position: { group: "IVA", period: 5, block: "p", type: "Kim loại yếu" },
      physical: {
        state: "Rắn",
        color: "Trắng bạc (thiếc trắng), Xám (thiếc xám - bột)",
        density: "7.31 g/cm³",
        meltingPoint: "231.9°C",
        properties:
          "Có tiếng kêu 'tin cry' khi uốn cong. Bị 'sâu thiếc' (hóa bột) ở nhiệt độ thấp (<13°C).",
      },
      chemical: {
        type: "Kim loại yếu.",
        reactivity: "Bền, không bị gỉ, không độc.",
        notableReactions: "",
      },
      isotopes: {
        summary: "10 đồng vị bền (nhiều nhất bảng tuần hoàn).",
        list: [],
      },
      compounds: [
        { formula: "SnCl₂", name: "Thiếc clorua", desc: "Chất cẩn màu vải." },
        { formula: "Bronze", name: "Đồng điếu", desc: "Hợp kim Cu-Sn." },
      ],
      applications:
        "Hàn mạch điện tử (solder), tráng lên thép làm vỏ đồ hộp (tin can), hợp kim đồng thiếc (chuông), kính phẳng (thủy tinh nổi trên thiếc lỏng).",
      naturalOccurrence: "Quặng Cassiterite (SnO₂).",
      preparation: { industry: "Khử quặng bằng than." },
      safety: {
        toxicity: "Kim loại không độc. Hợp chất hữu cơ thiếc rất độc.",
        hazards: "",
      },
    },
    styles: {
      color: "bg-indigo-500",
      border: "border-indigo-700",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 51,
      symbol: "Sb",
      nameVI: "Antimon",
      nameEN: "Antimony",
      atomicMass: 121.76,
      electronConfig: "[Kr] 4d¹⁰ 5s² 5p³",
      valenceElectrons: 5,
      en: 2.05,
      ox: "-3, +3, +5",
    },
    details: {
      origin:
        "Tiếng Hy Lạp 'anti-monos' (không ở một mình - vì luôn tìm thấy trong hợp chất). Kí hiệu Sb từ 'stibium'.",
      position: { group: "VA", period: 5, block: "p", type: "Á kim" },
      physical: {
        state: "Rắn",
        color: "Trắng bạc lấp lánh",
        density: "6.69 g/cm³",
        meltingPoint: "630.6°C",
        properties: "Giòn, dẫn điện kém.",
      },
      chemical: {
        type: "Á kim.",
        reactivity: "Giống Asen nhưng kim loại hơn.",
        notableReactions: "",
      },
      isotopes: { summary: "2 đồng vị bền.", list: [] },
      compounds: [
        { formula: "Sb₂O₃", name: "Antimon trioxit", desc: "Chất chống cháy." },
      ],
      applications:
        "Chất chống cháy (nhựa, vải, bọc ghế ô tô), làm cứng chì (ắc quy axit chì), đạn dược, mỹ phẩm cổ đại (kohl - trang điểm mắt).",
      naturalOccurrence: "Quặng Stibnite (Sb₂S₃).",
      preparation: { industry: "Nung quặng với sắt." },
      safety: {
        toxicity: "Độc (tương tự Asen).",
        hazards: "Bụi gây hại phổi.",
      },
    },
    styles: {
      color: "bg-amber-400",
      border: "border-amber-600",
      text: "text-gray-900",
    },
  },
  {
    basic: {
      number: 52,
      symbol: "Te",
      nameVI: "Telu",
      nameEN: "Tellurium",
      atomicMass: 127.6,
      electronConfig: "[Kr] 4d¹⁰ 5s² 5p⁴",
      valenceElectrons: 6,
      en: 2.05,
      ox: "-3, +3, +5",
    },
    details: {
      origin: "Tiếng Latin 'tellus' (Trái đất).",
      position: { group: "VIA", period: 5, block: "p", type: "Á kim" },
      physical: {
        state: "Rắn",
        color: "Trắng bạc kim loại",
        density: "6.24 g/cm³",
        meltingPoint: "449.5°C",
        properties: "Giòn, bán dẫn.",
      },
      chemical: {
        type: "Á kim.",
        reactivity: "Giống Selen và Lưu huỳnh.",
        notableReactions: "",
      },
      isotopes: { summary: "8 đồng vị bền.", list: [] },
      compounds: [
        {
          formula: "CdTe",
          name: "Cadimi Tellurua",
          desc: "Pin mặt trời hiệu suất cao.",
        },
      ],
      applications:
        "Pin mặt trời, đĩa quang (CD-RW, DVD-RW - lớp ghi dữ liệu), pha vào thép để dễ gia công, nhiệt điện.",
      naturalOccurrence: "Thường đi kèm vàng (Gold telluride).",
      preparation: { industry: "Phụ phẩm tinh chế đồng." },
      safety: {
        toxicity:
          "Độc nhẹ. Đặc điểm: Tiếp xúc dù ít cũng làm hơi thở có mùi tỏi nồng nặc nhiều tuần.",
        hazards: "",
      },
    },
    styles: {
      color: "bg-amber-400",
      border: "border-amber-600",
      text: "text-gray-900",
    },
  },
  {
    basic: {
      number: 53,
      symbol: "I",
      nameVI: "Iốt",
      nameEN: "Iodine",
      atomicMass: 126.9,
      electronConfig: "[Kr] 4d¹⁰ 5s² 5p⁵",
      valenceElectrons: 7,
      en: 2.66,
      ox: "-1, +1, +3, +5, +7",
    },
    details: {
      origin: "Tiếng Hy Lạp 'iodes' (màu tím - màu hơi iốt).",
      position: {
        group: "VIIA",
        period: 5,
        block: "p",
        type: "Phi kim (Halogen)",
      },
      physical: {
        state: "Rắn",
        color: "Đen tím (tinh thể)",
        density: "4.93 g/cm³",
        meltingPoint: "113.7°C",
        properties: "Dễ thăng hoa thành hơi màu tím đẹp mắt.",
      },
      chemical: {
        type: "Phi kim, oxi hóa yếu hơn Br và Cl.",
        reactivity: "Gặp hồ tinh bột tạo màu xanh tím đặc trưng.",
        notableReactions: "I₂ + Hồ tinh bột → Màu xanh dương đậm.",
      },
      isotopes: {
        summary: "1 đồng vị bền (¹²⁷I).",
        list: [
          { name: "¹³¹I", abundance: "Nhân tạo", role: "Xạ trị tuyến giáp" },
        ],
      },
      compounds: [
        {
          formula: "KI",
          name: "Kali iotua",
          desc: "Bổ sung vào muối ăn, thuốc bảo vệ phóng xạ.",
        },
        {
          formula: "Cồn Iốt",
          name: "Dung dịch Iốt",
          desc: "Sát trùng vết thương.",
        },
      ],
      applications:
        "Y tế (sát trùng, thuốc cản quang X-quang), muối Iốt (ngừa bướu cổ, đần độn), nhiếp ảnh, màn hình LCD.",
      naturalOccurrence: "Trong nước biển, rong biển.",
      preparation: { industry: "Từ nước biển hoặc mỏ diêm tiêu." },
      safety: {
        toxicity: "Cần thiết cho tuyến giáp. Dạng tinh thể gây bỏng da.",
        hazards: "",
      },
    },
    styles: {
      color: "bg-purple-600",
      border: "border-purple-800",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 54,
      symbol: "Xe",
      nameVI: "Xenon",
      nameEN: "Xenon",
      atomicMass: 131.29,
      electronConfig: "[Kr] 4d¹⁰ 5s² 5p⁶",
      valenceElectrons: 8,
      en: 2.6,
      ox: "+2, +4, +6, +8",
    },
    details: {
      origin: "Tiếng Hy Lạp 'xenos' (người lạ).",
      position: { group: "VIIIA", period: 5, block: "p", type: "Khí hiếm" },
      physical: {
        state: "Khí",
        color: "Không màu (xanh lam trong điện trường)",
        density: "5.9 g/L",
        meltingPoint: "-111.7°C",
        properties: "Rất nặng.",
      },
      chemical: {
        type: "Khí hiếm.",
        reactivity: "Có thể tạo hợp chất với Flo và Oxi (khác với He, Ne, Ar).",
        notableReactions: "Xe + F₂ → XeF₂, XeF₄...",
      },
      isotopes: { summary: "9 đồng vị bền.", list: [] },
      compounds: [
        {
          formula: "XePtF₆",
          name: "Xenon hexafluoroplatinate",
          desc: "Hợp chất khí hiếm đầu tiên được tổng hợp (1962).",
        },
      ],
      applications:
        "Động cơ ion (tàu vũ trụ NASA), đèn pha ô tô cao cấp (đèn Xenon), đèn flash nhiếp ảnh, thuốc gây mê toàn thân (đắt tiền nhưng an toàn).",
      naturalOccurrence: "Cực hiếm trong khí quyển.",
      preparation: {
        industry: "Chưng cất phân đoạn không khí lỏng (rất đắt).",
      },
      safety: {
        toxicity: "Không độc, nhưng gây ngạt.",
        hazards: "Bình khí nén áp suất cao.",
      },
    },
    styles: {
      color: "bg-cyan-500",
      border: "border-cyan-700",
      text: "text-white",
    },
  }, // =========================================================================
  // CHU KỲ 6 - PHẦN 1 (Cs, Ba, Lanthanides)
  // =========================================================================
  {
    basic: {
      number: 55,
      symbol: "Cs",
      nameVI: "Cesium",
      nameEN: "Caesium",
      atomicMass: 132.905,
      electronConfig: "[Xe] 6s¹",
      valenceElectrons: 1,
      en: 0.79,
      ox: "+1",
    },
    details: {
      origin: "Tiếng Latin 'caesius' (xanh da trời - màu vạch quang phổ).",
      position: { group: "IA", period: 6, block: "s", type: "Kim loại kiềm" },
      physical: {
        state: "Lỏng (trên 28°C)",
        color: "Vàng kim nhạt",
        density: "1.93 g/cm³",
        meltingPoint: "28.5°C",
        properties:
          "Kim loại hoạt động mạnh nhất, nhiệt độ nóng chảy thấp thứ 2 (sau Hg).",
      },
      chemical: {
        type: "Kim loại kiềm, tính khử cực mạnh.",
        reactivity: "Phản ứng nổ mạnh với nước lạnh, tự cháy trong không khí.",
        notableReactions: "2Cs + 2H₂O → 2CsOH + H₂ (nổ tức thì)",
      },
      isotopes: { summary: "1 đồng vị bền (¹³³Cs).", list: [] },
      compounds: [],
      applications:
        "Đồng hồ nguyên tử (chuẩn thời gian toàn cầu), chất hút khí (getter) trong đèn chân không, chất xúc tác.",
      naturalOccurrence: "Khoáng vật Pollucite (hiếm).",
      preparation: { industry: "Điện phân CsCN." },
      safety: { toxicity: "Thấp.", hazards: "Nguy cơ cháy nổ cực kỳ cao." },
    },
    styles: {
      color: "bg-pink-600",
      border: "border-pink-800",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 56,
      symbol: "Ba",
      nameVI: "Bari",
      nameEN: "Barium",
      atomicMass: 137.327,
      electronConfig: "[Xe] 6s²",
      valenceElectrons: 2,
      en: 0.89,
      ox: "+2",
    },
    details: {
      origin:
        "Tiếng Hy Lạp 'barys' (nặng - do mật độ cao của khoáng vật barite).",
      position: {
        group: "IIA",
        period: 6,
        block: "s",
        type: "Kim loại kiềm thổ",
      },
      physical: {
        state: "Rắn",
        color: "Trắng bạc",
        density: "3.59 g/cm³",
        meltingPoint: "727°C",
        properties: "Mềm hơn kẽm, cháy với ngọn lửa màu xanh lá cây.",
      },
      chemical: {
        type: "Kim loại kiềm thổ.",
        reactivity: "Tác dụng mạnh với nước lạnh.",
        notableReactions: "",
      },
      isotopes: { summary: "7 đồng vị bền.", list: [] },
      compounds: [
        {
          formula: "BaSO₄",
          name: "Bari sunfat",
          desc: "Không tan (an toàn), dùng làm chất cản quang X-quang.",
        },
        {
          formula: "Ba(NO₃)₂",
          name: "Bari nitrat",
          desc: "Tạo màu xanh lá cây trong pháo hoa.",
        },
      ],
      applications:
        "Pháo hoa (xanh lá), ngành dầu khí (khoan), chân không (hút khí), pin nhiệt điện.",
      naturalOccurrence: "Quặng Barite (BaSO₄).",
      preparation: { industry: "Điện phân nóng chảy BaCl₂." },
      safety: {
        toxicity: "Ion Ba²⁺ RẤT ĐỘC (trừ BaSO₄ không tan).",
        hazards: "Độc, gây tổn thương thần kinh và tim.",
      },
    },
    styles: {
      color: "bg-yellow-400",
      border: "border-yellow-600",
      text: "text-gray-900",
    },
  },

  // =========================================================================
  // LANTHANIDES (4f-BLOCK) - NHÓM ĐẤT HIẾM
  // =========================================================================
  {
    basic: {
      number: 57,
      symbol: "La",
      nameVI: "Lantan",
      nameEN: "Lanthanum",
      atomicMass: 138.905,
      electronConfig: "[Xe] 5d¹ 6s²",
      valenceElectrons: 3,
      en: 1.1,
      ox: "+3",
    },
    details: {
      origin: "Tiếng Hy Lạp 'lanthanein' (ẩn giấu).",
      position: {
        group: "IIIB",
        period: 6,
        block: "d/f",
        type: "Lanthanide (Đất hiếm)",
      },
      physical: {
        state: "Rắn",
        color: "Trắng bạc",
        density: "6.16 g/cm³",
        meltingPoint: "920°C",
        properties: "Khá mềm, dễ bị xỉn màu.",
      },
      chemical: {
        type: "Lanthanide.",
        reactivity: "Hoạt động, cháy dễ dàng.",
        notableReactions: "",
      },
      isotopes: { summary: "1 đồng vị bền, 1 phóng xạ nhẹ.", list: [] },
      compounds: [
        {
          formula: "La₂O₃",
          name: "Lantan oxit",
          desc: "Thủy tinh quang học (ống kính camera).",
        },
      ],
      applications:
        "Ống kính máy ảnh/kính thiên văn (chỉ số khúc xạ cao), pin xe hybrid (NiMH), buồng đốt hồ quang.",
      naturalOccurrence: "Quặng Monazite.",
      preparation: { industry: "Điện phân muối nóng chảy." },
      safety: { toxicity: "Độc nhẹ.", hazards: "" },
    },
    styles: {
      color: "bg-lime-200",
      border: "border-lime-400",
      text: "text-gray-900",
    },
  },
  {
    basic: {
      number: 58,
      symbol: "Ce",
      nameVI: "Xeri",
      nameEN: "Cerium",
      atomicMass: 140.116,
      electronConfig: "[Xe] 4f¹ 5d¹ 6s²",
      valenceElectrons: 4,
      en: 1.12,
      ox: "+3, +4",
    },
    details: {
      origin: "Đặt theo tên tiểu hành tinh Ceres.",
      position: { group: "IIIB", period: 6, block: "f", type: "Lanthanide" },
      physical: {
        state: "Rắn",
        color: "Trắng bạc",
        density: "6.77 g/cm³",
        meltingPoint: "795°C",
        properties: "Lanthanide phổ biến nhất.",
      },
      chemical: {
        type: "Lanthanide.",
        reactivity: "Cháy khi đập, có hai trạng thái hóa trị (+3, +4).",
        notableReactions: "",
      },
      isotopes: { summary: "4 đồng vị bền.", list: [] },
      compounds: [
        {
          formula: "CeO₂",
          name: "Xeri đioxit",
          desc: "Chất đánh bóng thủy tinh, xúc tác.",
        },
      ],
      applications:
        "Đá lửa (hợp kim Mischmetal), xúc tác lọc khí thải ô tô, chất đánh bóng kính.",
      naturalOccurrence: "Quặng Bastnasite.",
      preparation: { industry: "Khử oxit bằng canxi." },
      safety: { toxicity: "Thấp.", hazards: "Bột dễ cháy." },
    },
    styles: {
      color: "bg-lime-200",
      border: "border-lime-400",
      text: "text-gray-900",
    },
  },
  {
    basic: {
      number: 59,
      symbol: "Pr",
      nameVI: "Prazeodim",
      nameEN: "Praseodymium",
      atomicMass: 140.908,
      electronConfig: "[Xe] 4f³ 6s²",
      valenceElectrons: 3,
      en: 1.13,
      ox: "+3",
    },
    details: {
      origin: "Tiếng Hy Lạp 'prasios didymos' (cặp đôi xanh lá).",
      position: { group: "IIIB", period: 6, block: "f", type: "Lanthanide" },
      physical: {
        state: "Rắn",
        color: "Trắng bạc ánh vàng",
        density: "6.77 g/cm³",
        meltingPoint: "935°C",
        properties: "",
      },
      chemical: {
        type: "Lanthanide.",
        reactivity: "Dễ bị xỉn màu trong không khí.",
        notableReactions: "",
      },
      isotopes: { summary: "1 đồng vị bền.", list: [] },
      compounds: [
        {
          formula: "Pr₂O₃",
          name: "Oxít Prazeodim",
          desc: "Tạo màu xanh lá cây cho thủy tinh.",
        },
      ],
      applications:
        "Thủy tinh hàn (Didymium Glass - lọc tia hồng ngoại), nam châm Nd-Fe-B (tăng độ bền nhiệt), màu men gốm sứ.",
      naturalOccurrence: "Đi cùng Neodymium.",
      preparation: { industry: "Tách khỏi Neodymium (khó)." },
      safety: { toxicity: "Độc nhẹ.", hazards: "" },
    },
    styles: {
      color: "bg-lime-200",
      border: "border-lime-400",
      text: "text-gray-900",
    },
  },
  {
    basic: {
      number: 60,
      symbol: "Nd",
      nameVI: "Neodim",
      nameEN: "Neodymium",
      atomicMass: 144.242,
      electronConfig: "[Xe] 4f⁴ 6s²",
      valenceElectrons: 3,
      en: 1.14,
      ox: "+3",
    },
    details: {
      origin: "Tiếng Hy Lạp 'neos didymos' (cặp đôi mới).",
      position: { group: "IIIB", period: 6, block: "f", type: "Lanthanide" },
      physical: {
        state: "Rắn",
        color: "Trắng bạc ánh vàng (chuyển tím dưới ánh sáng khác)",
        density: "7.01 g/cm³",
        meltingPoint: "1021°C",
        properties: "",
      },
      chemical: {
        type: "Lanthanide.",
        reactivity: "Dễ phản ứng.",
        notableReactions: "",
      },
      isotopes: { summary: "7 đồng vị, 5 bền.", list: [] },
      compounds: [
        {
          formula: "Nd₂Fe₁₄B",
          name: "Nam châm NdFeB",
          desc: "Nam châm vĩnh cửu mạnh nhất thế giới.",
        },
      ],
      applications:
        "Nam châm siêu mạnh (tai nghe, động cơ xe điện, tuabin gió), laser (y tế, công nghiệp), thủy tinh tím/hồng (lọc ánh sáng vàng).",
      naturalOccurrence: "Khoáng vật Monazite.",
      preparation: { industry: "Trao đổi ion, tách khỏi Praseodymium." },
      safety: { toxicity: "Độc nhẹ.", hazards: "Bột dễ cháy." },
    },
    styles: {
      color: "bg-lime-200",
      border: "border-lime-400",
      text: "text-gray-900",
    },
  },
  {
    basic: {
      number: 61,
      symbol: "Pm",
      nameVI: "Prometi",
      nameEN: "Promethium",
      atomicMass: 145,
      electronConfig: "[Xe] 4f⁵ 6s²",
      valenceElectrons: 3,
      en: 1.13,
      ox: "+3",
    },
    details: {
      origin: "Theo Prometheus (thần đã lấy lửa từ các vị thần).",
      position: {
        group: "IIIB",
        period: 6,
        block: "f",
        type: "Lanthanide (Phóng xạ)",
      },
      physical: {
        state: "Rắn",
        color: "Chưa biết (dự đoán trắng bạc)",
        density: "7.2 g/cm³",
        meltingPoint: "1042°C",
        properties: "Nguyên tố Lanthanide duy nhất chỉ có đồng vị phóng xạ.",
      },
      chemical: {
        type: "Lanthanide.",
        reactivity: "Phóng xạ beta.",
        notableReactions: "",
      },
      isotopes: {
        summary: "Không có đồng vị bền.",
        list: [
          {
            name: "¹⁴⁷Pm",
            abundance: "Nhân tạo",
            role: "Chu kỳ bán rã 2.62 năm.",
          },
        ],
      },
      compounds: [],
      applications:
        "Nguồn pin nguyên tử (chỉ ở quy mô nhỏ), sơn phát sáng (dùng thay cho Ra/Tritium).",
      naturalOccurrence: "Chỉ tìm thấy ở dạng vết cực nhỏ (phân rã U).",
      preparation: {
        industry: "Sản phẩm phân hạch Uranium trong lò phản ứng.",
      },
      safety: { toxicity: "Phóng xạ.", hazards: "Nguy cơ chiếu xạ." },
    },
    styles: {
      color: "bg-red-300",
      border: "border-red-500",
      text: "text-gray-900",
    },
  },
  {
    basic: {
      number: 62,
      symbol: "Sm",
      nameVI: "Samari",
      nameEN: "Samarium",
      atomicMass: 150.36,
      electronConfig: "[Xe] 4f⁶ 6s²",
      valenceElectrons: 3,
      en: 1.17,
      ox: "+2, +3",
    },
    details: {
      origin: "Theo tên kỹ sư mỏ người Nga Vasili Samarsky-Bykhovets.",
      position: { group: "IIIB", period: 6, block: "f", type: "Lanthanide" },
      physical: {
        state: "Rắn",
        color: "Trắng bạc",
        density: "7.52 g/cm³",
        meltingPoint: "1072°C",
        properties: "",
      },
      chemical: {
        type: "Lanthanide.",
        reactivity: "Bền trong không khí khô.",
        notableReactions: "",
      },
      isotopes: { summary: "7 đồng vị (3 phóng xạ nhẹ).", list: [] },
      compounds: [
        {
          formula: "SmCo₅",
          name: "Nam châm Samari-Cobalt",
          desc: "Nam châm vĩnh cửu chịu nhiệt.",
        },
      ],
      applications:
        "Nam châm chịu nhiệt độ cao (quân sự, hàng không vũ trụ), thanh điều khiển lò phản ứng hạt nhân (hấp thụ neutron), laser.",
      naturalOccurrence: "Quặng Monazite.",
      preparation: { industry: "Khử oxit bằng Lanthan." },
      safety: { toxicity: "Độc nhẹ.", hazards: "" },
    },
    styles: {
      color: "bg-lime-200",
      border: "border-lime-400",
      text: "text-gray-900",
    },
  },
  {
    basic: {
      number: 63,
      symbol: "Eu",
      nameVI: "Europi",
      nameEN: "Europium",
      atomicMass: 151.964,
      electronConfig: "[Xe] 4f⁷ 6s²",
      valenceElectrons: 3,
      en: 1.2,
      ox: "+2, +3",
    },
    details: {
      origin: "Theo tên lục địa Châu Âu (Europe).",
      position: { group: "IIIB", period: 6, block: "f", type: "Lanthanide" },
      physical: {
        state: "Rắn",
        color: "Trắng bạc",
        density: "5.24 g/cm³",
        meltingPoint: "822°C",
        properties: "Lanthanide mềm nhất và có mật độ thấp nhất.",
      },
      chemical: {
        type: "Lanthanide.",
        reactivity: "Hoạt động mạnh nhất trong nhóm, dễ bị oxi hóa.",
        notableReactions: "",
      },
      isotopes: { summary: "2 đồng vị bền (¹⁵¹Eu, ¹⁵³Eu).", list: [] },
      compounds: [
        {
          formula: "Eu³⁺",
          name: "Ion Europi",
          desc: "Phát xạ ánh sáng đỏ rực rỡ.",
        },
      ],
      applications:
        "Phốt pho đỏ (màn hình CRT cũ, đèn huỳnh quang), vật liệu chống hàng giả (tờ tiền, thẻ căn cước), quang điện tử.",
      naturalOccurrence: "Quặng Monazite.",
      preparation: { industry: "Điện phân EuCl₃." },
      safety: { toxicity: "Độc nhẹ.", hazards: "" },
    },
    styles: {
      color: "bg-lime-200",
      border: "border-lime-400",
      text: "text-gray-900",
    },
  },
  {
    basic: {
      number: 64,
      symbol: "Gd",
      nameVI: "Gadolini",
      nameEN: "Gadolinium",
      atomicMass: 157.25,
      electronConfig: "[Xe] 4f⁷ 5d¹ 6s²",
      valenceElectrons: 3,
      en: 1.2,
      ox: "+3",
    },
    details: {
      origin: "Theo tên nhà hóa học Johan Gadolin.",
      position: { group: "IIIB", period: 6, block: "f", type: "Lanthanide" },
      physical: {
        state: "Rắn",
        color: "Trắng bạc",
        density: "7.9 g/cm³",
        meltingPoint: "1313°C",
        properties: "Từ tính mạnh nhất ở nhiệt độ thấp (siêu từ).",
      },
      chemical: {
        type: "Lanthanide.",
        reactivity: "Tương đối ổn định trong không khí khô.",
        notableReactions: "",
      },
      isotopes: {
        summary: "7 đồng vị bền.",
        list: [
          {
            name: "¹⁵⁷Gd",
            abundance: "15.6%",
            role: "Hấp thụ neutron mạnh nhất",
          },
        ],
      },
      compounds: [
        {
          formula: "Gd-DTPA",
          name: "Gadoteridol",
          desc: "Chất cản quang máy MRI.",
        },
      ],
      applications:
        "Chất cản quang cho máy chụp cộng hưởng từ (MRI), thanh điều khiển lò phản ứng (hấp thụ neutron), công nghệ làm lạnh từ tính.",
      naturalOccurrence: "Quặng Monazite, Bastnasite.",
      preparation: { industry: "Khử muối fluoride bằng Canxi." },
      safety: {
        toxicity: "Độc nhẹ.",
        hazards: "Có thể gây lắng đọng trong cơ thể (MRI).",
      },
    },
    styles: {
      color: "bg-lime-200",
      border: "border-lime-400",
      text: "text-gray-900",
    },
  },
  {
    basic: {
      number: 65,
      symbol: "Tb",
      nameVI: "Terbi",
      nameEN: "Terbium",
      atomicMass: 158.925,
      electronConfig: "[Xe] 4f⁹ 6s²",
      valenceElectrons: 3,
      en: 1.2,
      ox: "+3, +4",
    },
    details: {
      origin: "Làng 'Ytterby' ở Thụy Điển.",
      position: { group: "IIIB", period: 6, block: "f", type: "Lanthanide" },
      physical: {
        state: "Rắn",
        color: "Trắng bạc",
        density: "8.23 g/cm³",
        meltingPoint: "1356°C",
        properties: "Khá mềm, dễ uốn.",
      },
      chemical: { type: "Lanthanide.", reactivity: "", notableReactions: "" },
      isotopes: { summary: "1 đồng vị bền.", list: [] },
      compounds: [
        {
          formula: "Tb³⁺",
          name: "Ion Terbi",
          desc: "Phát xạ ánh sáng xanh lá.",
        },
      ],
      applications:
        "Phốt pho xanh lá cây (màn hình, đèn huỳnh quang), ổ đĩa quang từ, hợp kim Magnetostrictive (chuyển đổi từ tính thành cơ học).",
      naturalOccurrence: "Hiếm, đi cùng Gadolinium.",
      preparation: { industry: "Trao đổi ion từ quặng." },
      safety: { toxicity: "Độc nhẹ.", hazards: "" },
    },
    styles: {
      color: "bg-lime-200",
      border: "border-lime-400",
      text: "text-gray-900",
    },
  },
  {
    basic: {
      number: 66,
      symbol: "Dy",
      nameVI: "Đisprosi",
      nameEN: "Dysprosium",
      atomicMass: 162.5,
      electronConfig: "[Xe] 4f¹⁰ 6s²",
      valenceElectrons: 3,
      en: 1.22,
      ox: "+3",
    },
    details: {
      origin: "Tiếng Hy Lạp 'dysprositos' (khó tiếp cận).",
      position: { group: "IIIB", period: 6, block: "f", type: "Lanthanide" },
      physical: {
        state: "Rắn",
        color: "Trắng bạc",
        density: "8.55 g/cm³",
        meltingPoint: "1407°C",
        properties: "",
      },
      chemical: { type: "Lanthanide.", reactivity: "", notableReactions: "" },
      isotopes: { summary: "7 đồng vị bền.", list: [] },
      compounds: [],
      applications:
        "Nam châm NdFeB (tăng lực từ và chịu nhiệt), đĩa ghi dữ liệu, lò phản ứng hạt nhân.",
      naturalOccurrence: "Tương đối phổ biến trong nhóm Lanthanides.",
      preparation: { industry: "Trao đổi ion." },
      safety: { toxicity: "Độc nhẹ.", hazards: "" },
    },
    styles: {
      color: "bg-lime-200",
      border: "border-lime-400",
      text: "text-gray-900",
    },
  },
  {
    basic: {
      number: 67,
      symbol: "Ho",
      nameVI: "Homi",
      nameEN: "Holmium",
      atomicMass: 164.93,
      electronConfig: "[Xe] 4f¹¹ 6s²",
      valenceElectrons: 3,
      en: 1.23,
      ox: "+3",
    },
    details: {
      origin: "Tiếng Latin 'Holmia' (Stockholm, quê hương của khám phá).",
      position: { group: "IIIB", period: 6, block: "f", type: "Lanthanide" },
      physical: {
        state: "Rắn",
        color: "Trắng bạc",
        density: "8.79 g/cm³",
        meltingPoint: "1474°C",
        properties: "Có mô men từ mạnh nhất trong các nguyên tố.",
      },
      chemical: { type: "Lanthanide.", reactivity: "", notableReactions: "" },
      isotopes: { summary: "1 đồng vị bền.", list: [] },
      compounds: [
        {
          formula: "Ho₂O₃",
          name: "Holmi oxit",
          desc: "Tạo màu vàng/đỏ cho thủy tinh.",
        },
      ],
      applications:
        "Laser YAG (phẫu thuật), nam châm cực mạnh (nghiên cứu), chất tạo màu trong thủy tinh quang học.",
      naturalOccurrence: "Tương đối hiếm.",
      preparation: { industry: "Trao đổi ion." },
      safety: { toxicity: "Độc nhẹ.", hazards: "" },
    },
    styles: {
      color: "bg-lime-200",
      border: "border-lime-400",
      text: "text-gray-900",
    },
  },
  {
    basic: {
      number: 68,
      symbol: "Er",
      nameVI: "Erbi",
      nameEN: "Erbium",
      atomicMass: 167.259,
      electronConfig: "[Xe] 4f¹² 6s²",
      valenceElectrons: 3,
      en: 1.24,
      ox: "+3",
    },
    details: {
      origin: "Làng 'Ytterby' ở Thụy Điển.",
      position: { group: "IIIB", period: 6, block: "f", type: "Lanthanide" },
      physical: {
        state: "Rắn",
        color: "Trắng bạc",
        density: "9.07 g/cm³",
        meltingPoint: "1529°C",
        properties: "",
      },
      chemical: { type: "Lanthanide.", reactivity: "", notableReactions: "" },
      isotopes: { summary: "6 đồng vị bền.", list: [] },
      compounds: [],
      applications:
        "Bộ khuếch đại sợi quang (EDFA) cho cáp quang dưới biển, laser hồng ngoại (thẩm mỹ, nha khoa), tạo màu hồng cho thủy tinh.",
      naturalOccurrence: "Tương đối phổ biến trong nhóm Đất hiếm.",
      preparation: { industry: "Trao đổi ion." },
      safety: { toxicity: "Độc nhẹ.", hazards: "" },
    },
    styles: {
      color: "bg-lime-200",
      border: "border-lime-400",
      text: "text-gray-900",
    },
  },
  {
    basic: {
      number: 69,
      symbol: "Tm",
      nameVI: "Thuli",
      nameEN: "Thulium",
      atomicMass: 168.934,
      electronConfig: "[Xe] 4f¹³ 6s²",
      valenceElectrons: 3,
      en: 1.25,
      ox: "+3",
    },
    details: {
      origin: "Tên cổ của Scandinavia, 'Thule'.",
      position: { group: "IIIB", period: 6, block: "f", type: "Lanthanide" },
      physical: {
        state: "Rắn",
        color: "Trắng bạc",
        density: "9.32 g/cm³",
        meltingPoint: "1545°C",
        properties: "Lanthanide hiếm thứ 2 (sau Pm).",
      },
      chemical: { type: "Lanthanide.", reactivity: "", notableReactions: "" },
      isotopes: { summary: "1 đồng vị bền.", list: [] },
      compounds: [],
      applications:
        "Nguồn tia X di động (dùng đồng vị ¹⁷⁰Tm), laser rắn trạng thái rắn.",
      naturalOccurrence: "Rất hiếm, đi kèm Erbi.",
      preparation: { industry: "Trao đổi ion." },
      safety: { toxicity: "Độc nhẹ.", hazards: "" },
    },
    styles: {
      color: "bg-lime-200",
      border: "border-lime-400",
      text: "text-gray-900",
    },
  },
  {
    basic: {
      number: 70,
      symbol: "Yb",
      nameVI: "Ytebi",
      nameEN: "Ytterbium",
      atomicMass: 173.054,
      electronConfig: "[Xe] 4f¹⁴ 6s²",
      valenceElectrons: 2,
      en: 1.1,
      ox: "+2, +3",
    },
    details: {
      origin: "Làng 'Ytterby' ở Thụy Điển.",
      position: { group: "IIIB", period: 6, block: "f", type: "Lanthanide" },
      physical: {
        state: "Rắn",
        color: "Trắng bạc",
        density: "6.97 g/cm³",
        meltingPoint: "819°C",
        properties:
          "Có mật độ và nhiệt độ nóng chảy thấp bất thường trong nhóm.",
      },
      chemical: {
        type: "Lanthanide.",
        reactivity: "Dễ phản ứng.",
        notableReactions: "",
      },
      isotopes: { summary: "7 đồng vị bền.", list: [] },
      compounds: [],
      applications:
        "Đồng hồ nguyên tử chính xác nhất, hợp kim cường độ cao, laser sợi quang (cắt, hàn).",
      naturalOccurrence: "Quặng Monazite.",
      preparation: { industry: "Khử oxit bằng Lanthan/Mischmetal." },
      safety: { toxicity: "Độc nhẹ.", hazards: "" },
    },
    styles: {
      color: "bg-lime-200",
      border: "border-lime-400",
      text: "text-gray-900",
    },
  },
  {
    basic: {
      number: 71,
      symbol: "Lu",
      nameVI: "Luteti",
      nameEN: "Lutetium",
      atomicMass: 174.967,
      electronConfig: "[Xe] 4f¹⁴ 5d¹ 6s²",
      valenceElectrons: 3,
      en: 1.27,
      ox: "+3",
    },
    details: {
      origin: "Tên Latin của Paris, 'Lutetia'.",
      position: { group: "IIIB", period: 6, block: "d/f", type: "Lanthanide" },
      physical: {
        state: "Rắn",
        color: "Trắng bạc",
        density: "9.84 g/cm³",
        meltingPoint: "1663°C",
        properties: "Lanthanide cứng nhất và nặng nhất.",
      },
      chemical: {
        type: "Lanthanide.",
        reactivity: "Bền trong không khí.",
        notableReactions: "",
      },
      isotopes: { summary: "1 đồng vị bền, 1 phóng xạ nhẹ (¹⁷⁶Lu).", list: [] },
      compounds: [
        {
          formula: "Lu-oxyorthosilicate",
          name: "LSO",
          desc: "Máy quét PET (Y học hạt nhân).",
        },
      ],
      applications:
        "Máy chụp cắt lớp phát xạ positron (PET Scan), chất xúc tác hóa dầu, nghiên cứu khoa học.",
      naturalOccurrence: "Rất hiếm, đi kèm Ytterbium.",
      preparation: { industry: "Trao đổi ion, điện phân." },
      safety: { toxicity: "Độc nhẹ.", hazards: "" },
    },
    styles: {
      color: "bg-lime-200",
      border: "border-lime-400",
      text: "text-gray-900",
    },
  },
  {
    basic: {
      number: 72,
      symbol: "Hf",
      nameVI: "Hafni",
      nameEN: "Hafnium",
      atomicMass: 178.49,
      electronConfig: "[Xe] 4f¹⁴ 5d² 6s²",
      valenceElectrons: 4,
      en: 1.3,
      ox: "+4",
    },
    details: {
      origin: "Tên Latin của Copenhagen, 'Hafnia'.",
      position: {
        group: "IVB",
        period: 6,
        block: "d",
        type: "Kim loại chuyển tiếp",
      },
      physical: {
        state: "Rắn",
        color: "Trắng bạc",
        density: "13.31 g/cm³",
        meltingPoint: "2233°C",
        properties: "Khó tách khỏi Zirconium.",
      },
      chemical: {
        type: "Kim loại chuyển tiếp.",
        reactivity: "Kháng ăn mòn. Hấp thụ neutron kém (ngược với Zirconium).",
        notableReactions: "",
      },
      isotopes: { summary: "6 đồng vị bền.", list: [] },
      compounds: [],
      applications:
        "Thanh điều khiển lò phản ứng hạt nhân (do hấp thụ neutron mạnh), chất phụ gia hợp kim chịu nhiệt (động cơ phản lực), vi mạch bán dẫn (hợp chất Hafnium oxide).",
      naturalOccurrence: "Luôn đi kèm Zirconium.",
      preparation: { industry: "Tách từ Zirconium bằng chiết dung môi." },
      safety: { toxicity: "Độc nhẹ.", hazards: "Bột dễ cháy." },
    },
    styles: {
      color: "bg-slate-600",
      border: "border-slate-800",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 73,
      symbol: "Ta",
      nameVI: "Tantan",
      nameEN: "Tantalum",
      atomicMass: 180.948,
      electronConfig: "[Xe] 4f¹⁴ 5d³ 6s²",
      valenceElectrons: 5,
      en: 1.5,
      ox: "+5",
    },
    details: {
      origin: "Tên nhân vật thần thoại Hy Lạp 'Tantalus' (vì khó phân tách).",
      position: {
        group: "VB",
        period: 6,
        block: "d",
        type: "Kim loại chuyển tiếp",
      },
      physical: {
        state: "Rắn",
        color: "Xám ánh xanh",
        density: "16.69 g/cm³",
        meltingPoint: "3017°C",
        properties: "Điểm nóng chảy cao, dẻo dai.",
      },
      chemical: {
        type: "Kim loại chuyển tiếp.",
        reactivity: "Kháng axit mạnh gần như hoàn hảo (trừ HF).",
        notableReactions: "",
      },
      isotopes: { summary: "1 đồng vị bền.", list: [] },
      compounds: [
        { formula: "Ta₂O₅", name: "Tantan pentoxit", desc: "Tụ điện." },
      ],
      applications:
        "Tụ điện gốm (điện thoại, máy tính), cấy ghép y tế/phẫu thuật (trơ hóa học, cơ thể không đào thải), hợp kim siêu bền (động cơ máy bay).",
      naturalOccurrence: "Trong khoáng vật Tantalite.",
      preparation: { industry: "Điện phân." },
      safety: { toxicity: "Thấp.", hazards: "" },
    },
    styles: {
      color: "bg-slate-600",
      border: "border-slate-800",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 74,
      symbol: "W",
      nameVI: "Vonfram",
      nameEN: "Tungsten",
      atomicMass: 183.84,
      electronConfig: "[Xe] 4f¹⁴ 5d⁴ 6s²",
      valenceElectrons: 6,
    },
    details: {
      origin:
        "Ký hiệu W từ tiếng Đức 'Wolfram'. Tên tiếng Anh từ tiếng Thụy Điển 'tung sten' (đá nặng).",
      position: {
        group: "VIB",
        period: 6,
        block: "d",
        type: "Kim loại chuyển tiếp",
        en: 2.36,
        ox: "+2, +3, +4, +5, +6",
      },
      physical: {
        state: "Rắn",
        color: "Xám bạc",
        density: "19.25 g/cm³",
        meltingPoint: "3422°C",
        properties: "Điểm nóng chảy cao nhất trong các kim loại, cứng nhất.",
      },
      chemical: {
        type: "Kim loại chuyển tiếp.",
        reactivity: "Trơ, bền trong không khí.",
        notableReactions: "",
      },
      isotopes: {
        summary: "4 đồng vị bền (và 1 đồng vị phóng xạ nhẹ).",
        list: [],
      },
      compounds: [
        {
          formula: "WC",
          name: "Vonfram cacbua",
          desc: "Vật liệu cắt siêu cứng.",
        },
      ],
      applications:
        "Dây tóc bóng đèn sợi đốt (chịu nhiệt), điện cực hàn TIG, đầu mũi khoan, đạn xuyên giáp, trang sức chịu xước.",
      naturalOccurrence: "Quặng Wolframite.",
      preparation: { industry: "Khử oxit bằng Hydro." },
      safety: { toxicity: "Thấp.", hazards: "" },
    },
    styles: {
      color: "bg-slate-600",
      border: "border-slate-800",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 75,
      symbol: "Re",
      nameVI: "Reni",
      nameEN: "Rhenium",
      atomicMass: 186.207,
      electronConfig: "[Xe] 4f¹⁴ 5d⁵ 6s²",
      valenceElectrons: 7,
      en: 1.9,
      ox: "+2, +4, +6, +7",
    },
    details: {
      origin: "Tên sông Rhine (Rheinland, Đức).",
      position: {
        group: "VIIB",
        period: 6,
        block: "d",
        type: "Kim loại chuyển tiếp",
      },
      physical: {
        state: "Rắn",
        color: "Trắng bạc",
        density: "21.04 g/cm³",
        meltingPoint: "3186°C",
        properties:
          "Điểm nóng chảy cao thứ 3 (sau W và C), kim loại nặng nhất trong nhóm.",
      },
      chemical: {
        type: "Kim loại chuyển tiếp.",
        reactivity: "Kháng ăn mòn.",
        notableReactions: "",
      },
      isotopes: { summary: "1 đồng vị bền, 1 phóng xạ nhẹ.", list: [] },
      compounds: [],
      applications:
        "Hợp kim siêu bền chịu nhiệt (lưỡi tuabin động cơ phản lực, lên đến 6% Reni), chất xúc tác cho xăng không chì.",
      naturalOccurrence:
        "Sản phẩm phụ khai thác Molypden (một trong những nguyên tố hiếm nhất).",
      preparation: { industry: "Khử Amoni Perrhenate." },
      safety: { toxicity: "Thấp.", hazards: "" },
    },
    styles: {
      color: "bg-slate-600",
      border: "border-slate-800",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 76,
      symbol: "Os",
      nameVI: "Osmi",
      nameEN: "Osmium",
      atomicMass: 190.23,
      electronConfig: "[Xe] 4f¹⁴ 5d⁶ 6s²",
      valenceElectrons: 8,
      en: 2.2,
      ox: "+2, +3, +4, +6, +8",
    },
    details: {
      origin: "Tiếng Hy Lạp 'osme' (mùi hôi - do Oxit OsO₄ có mùi khó chịu).",
      position: {
        group: "VIIIB",
        period: 6,
        block: "d",
        type: "Kim loại chuyển tiếp (Nhóm Platin)",
      },
      physical: {
        state: "Rắn",
        color: "Xám xanh nhạt",
        density: "22.59 g/cm³",
        meltingPoint: "3033°C",
        properties: "NGUYÊN TỐ TỰ NHIÊN NẶNG NHẤT (Densest). Rất cứng, giòn.",
      },
      chemical: {
        type: "Kim loại quý.",
        reactivity: "Khó phản ứng.",
        notableReactions: "",
      },
      isotopes: { summary: "6 đồng vị bền.", list: [] },
      compounds: [
        {
          formula: "OsO₄",
          name: "Osmi Tetroxide",
          desc: "Chất cố định (nhuộm) mẫu sinh học (kính hiển vi điện tử).",
        },
      ],
      applications:
        "Hợp kim siêu cứng (ngòi bút máy cao cấp, trục la bàn, tiếp điểm điện), quang học.",
      naturalOccurrence: "Hiếm, trong quặng Platin.",
      preparation: { industry: "Sản phẩm phụ tinh chế Platin." },
      safety: {
        toxicity: "OsO₄ cực độc (hơi gây mù mắt và tổn thương phổi).",
        hazards: "Độc cao.",
      },
    },
    styles: {
      color: "bg-slate-600",
      border: "border-slate-800",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 77,
      symbol: "Ir",
      nameVI: "Iridi",
      nameEN: "Iridium",
      atomicMass: 192.217,
      electronConfig: "[Xe] 4f¹⁴ 5d⁷ 6s²",
      valenceElectrons: 9,
      en: 2.2,
      ox: "+2, +3, +4, +6",
    },
    details: {
      origin:
        "Tên Nữ thần Hy Lạp 'Iris' (cầu vồng - do muối có nhiều màu sắc).",
      position: {
        group: "VIIIB",
        period: 6,
        block: "d",
        type: "Kim loại chuyển tiếp (Nhóm Platin)",
      },
      physical: {
        state: "Rắn",
        color: "Trắng bạc",
        density: "22.56 g/cm³",
        meltingPoint: "2466°C",
        properties:
          "Kim loại kháng ăn mòn nhất (ngay cả nước cường toan), cứng, giòn.",
      },
      chemical: {
        type: "Kim loại quý.",
        reactivity: "Cực kỳ trơ.",
        notableReactions: "",
      },
      isotopes: { summary: "2 đồng vị bền.", list: [] },
      compounds: [],
      applications:
        "Đầu bugi ô tô cao cấp, ngòi bút máy (làm cứng Platin), phát hiện va chạm thiên thạch (nồng độ cao tại ranh giới K/T).",
      naturalOccurrence:
        "Hiếm, trong quặng Platin. Phổ biến trong thiên thạch.",
      preparation: { industry: "Sản phẩm phụ tinh chế Platin." },
      safety: { toxicity: "Thấp.", hazards: "" },
    },
    styles: {
      color: "bg-slate-600",
      border: "border-slate-800",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 78,
      symbol: "Pt",
      nameVI: "Bạch kim",
      nameEN: "Platinum",
      atomicMass: 195.084,
      electronConfig: "[Xe] 4f¹⁴ 5d⁹ 6s¹",
      valenceElectrons: 10,
      en: 2.28,
      ox: "+2, +4",
    },
    details: {
      origin: "Tiếng Tây Ban Nha 'platina' (bạc nhỏ).",
      position: {
        group: "VIIIB",
        period: 6,
        block: "d",
        type: "Kim loại chuyển tiếp (Nhóm Platin)",
      },
      physical: {
        state: "Rắn",
        color: "Trắng xám",
        density: "21.45 g/cm³",
        meltingPoint: "1768°C",
        properties: "Dẻo, có khả năng xúc tác cao.",
      },
      chemical: {
        type: "Kim loại quý.",
        reactivity: "Rất trơ, tan trong nước cường toan.",
        notableReactions: "",
      },
      isotopes: { summary: "6 đồng vị bền.", list: [] },
      compounds: [
        {
          formula: "Cisplatin",
          name: "Cis-Diamminedichloroplatinum(II)",
          desc: "Thuốc hóa trị ung thư.",
        },
      ],
      applications:
        "Bộ chuyển đổi xúc tác ô tô, trang sức cao cấp, điện cực trong pin nhiên liệu, nhiệt kế kháng nhiệt độ.",
      naturalOccurrence: "Quặng Platin (hiếm).",
      preparation: { industry: "Sản phẩm phụ khai thác Niken/Đồng." },
      safety: { toxicity: "Kim loại trơ. Hợp chất phức tạp độc.", hazards: "" },
    },
    styles: {
      color: "bg-slate-600",
      border: "border-slate-800",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 79,
      symbol: "Au",
      nameVI: "Vàng",
      nameEN: "Gold",
      atomicMass: 196.967,
      electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹",
      valenceElectrons: 11,
      en: 2.54,
      ox: "+1, +3",
    },
    details: {
      origin:
        "Tiếng Anh cổ 'geolu'. Ký hiệu Au từ Latin 'aurum' (bình minh rạng rỡ).",
      position: {
        group: "IB",
        period: 6,
        block: "d",
        type: "Kim loại chuyển tiếp",
      },
      physical: {
        state: "Rắn",
        color: "Vàng kim",
        density: "19.32 g/cm³",
        meltingPoint: "1064°C",
        properties: "Dễ dát mỏng nhất, dễ kéo sợi nhất (1g kéo được 3km dây).",
      },
      chemical: {
        type: "Kim loại quý.",
        reactivity: "Cực kỳ trơ, tan trong nước cường toan và cyanide.",
        notableReactions: "Au + HNO₃ + 3HCl → H[AuCl₄] + NO + 2H₂O",
      },
      isotopes: { summary: "1 đồng vị bền.", list: [] },
      compounds: [],
      applications:
        "Trang sức, dự trữ tiền tệ, lớp mạ bảo vệ trong điện tử (kháng ăn mòn), nha khoa.",
      naturalOccurrence: "Dạng tự sinh (quặng vàng, phù sa).",
      preparation: { industry: "Khai thác mỏ, chiết xuất cyanide." },
      safety: { toxicity: "Kim loại không độc.", hazards: "" },
    },
    styles: {
      color: "bg-yellow-700",
      border: "border-yellow-900",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 80,
      symbol: "Hg",
      nameVI: "Thủy ngân",
      nameEN: "Mercury",
      atomicMass: 200.59,
      electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s²",
      valenceElectrons: 12,
      en: 2.0,
      ox: "+1, +2",
    },
    details: {
      origin:
        "Đặt theo tên thần Mercury (Hy Lạp). Ký hiệu Hg từ Latin 'hydrargyrum' (bạc nước).",
      position: {
        group: "IIB",
        period: 6,
        block: "d",
        type: "Kim loại chuyển tiếp",
      },
      physical: {
        state: "Lỏng",
        color: "Trắng bạc",
        density: "13.53 g/cm³",
        meltingPoint: "-38.8°C",
        properties:
          "Kim loại lỏng duy nhất ở nhiệt độ phòng. Tạo hỗn hống (amalgam) với nhiều kim loại khác.",
      },
      chemical: {
        type: "Kim loại chuyển tiếp.",
        reactivity: "Ít hoạt động.",
        notableReactions: "",
      },
      isotopes: { summary: "7 đồng vị bền.", list: [] },
      compounds: [
        {
          formula: "HgS",
          name: "Chì chu sa (Cinnabar)",
          desc: "Quặng và sắc tố đỏ.",
        },
        {
          formula: "Methylmercury",
          name: "Methyl thủy ngân",
          desc: "Hợp chất hữu cơ cực độc.",
        },
      ],
      applications:
        "Nhiệt kế (đã cấm nhiều nơi), áp kế, đèn huỳnh quang/đèn hơi thủy ngân, khai thác vàng (đã cấm nhiều nơi).",
      naturalOccurrence: "Quặng Cinnabar (HgS).",
      preparation: { industry: "Nung quặng Cinnabar." },
      safety: {
        toxicity:
          "CỰC KỲ ĐỘC. Hơi thủy ngân và hợp chất hữu cơ gây tổn thương thần kinh nghiêm trọng.",
        hazards: "Độc qua đường hô hấp và da.",
      },
    },
    styles: {
      color: "bg-gray-400",
      border: "border-gray-600",
      text: "text-gray-900",
    },
  },
  {
    basic: {
      number: 81,
      symbol: "Tl",
      nameVI: "Tali",
      nameEN: "Thallium",
      atomicMass: 204.38,
      electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹",
      valenceElectrons: 3,
      en: 1.62,
      ox: "+1, +3",
    },
    details: {
      origin:
        "Tiếng Hy Lạp 'thallos' (chồi xanh - màu vạch quang phổ xanh lá).",
      position: { group: "IIIA", period: 6, block: "p", type: "Kim loại yếu" },
      physical: {
        state: "Rắn",
        color: "Trắng bạc ánh xanh",
        density: "11.85 g/cm³",
        meltingPoint: "304°C",
        properties: "Mềm như sáp, cắt dễ dàng.",
      },
      chemical: {
        type: "Kim loại yếu.",
        reactivity: "Dễ bị xỉn màu trong không khí.",
        notableReactions: "",
      },
      isotopes: { summary: "2 đồng vị bền.", list: [] },
      compounds: [],
      applications:
        "Chất bán dẫn (quang điện), sợi quang hồng ngoại, bẫy chuột (đã cấm vì quá độc).",
      naturalOccurrence: "Tạp chất trong quặng Kali và Selen.",
      preparation: { industry: "Sản phẩm phụ luyện kẽm/chì." },
      safety: {
        toxicity:
          "CỰC KỲ ĐỘC. Độc hơn Chì. Gây rụng tóc, tổn thương thần kinh và tử vong. Chất độc ám sát nổi tiếng.",
        hazards: "Độc cao.",
      },
    },
    styles: {
      color: "bg-indigo-600",
      border: "border-indigo-800",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 82,
      symbol: "Pb",
      nameVI: "Chì",
      nameEN: "Lead",
      atomicMass: 207.2,
      electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²",
      valenceElectrons: 4,
      en: 2.33,
      ox: "+2, +4",
    },
    details: {
      origin: "Tiếng Anh cổ 'lead'. Ký hiệu Pb từ Latin 'plumbum'.",
      position: { group: "IVA", period: 6, block: "p", type: "Kim loại yếu" },
      physical: {
        state: "Rắn",
        color: "Xám xanh (mới cắt), chuyển xám mờ (xỉn)",
        density: "11.34 g/cm³",
        meltingPoint: "327.5°C",
        properties: "Mềm, dẻo, nặng.",
      },
      chemical: {
        type: "Kim loại yếu.",
        reactivity: "Kháng ăn mòn (tạo lớp oxit bảo vệ).",
        notableReactions: "",
      },
      isotopes: {
        summary: "4 đồng vị bền (nguồn gốc của chuỗi phân rã).",
        list: [],
      },
      compounds: [
        { formula: "Pb(NO₃)₂", name: "Chì nitrat", desc: "Thuốc nhuộm." },
        {
          formula: "Tetraethyllead",
          name: "Chì tetraetyl",
          desc: "Phụ gia xăng (đã cấm).",
        },
      ],
      applications:
        "Ắc quy axit chì (ô tô), chắn bức xạ X/Gamma, đạn dược, hợp kim hàn (đang bị thay thế bằng thiếc).",
      naturalOccurrence: "Quặng Galena (PbS).",
      preparation: { industry: "Nung chảy PbS." },
      safety: {
        toxicity:
          "ĐỘC. Gây tổn thương thần kinh, đặc biệt ở trẻ em (gây giảm IQ).",
        hazards: "Tích tụ trong cơ thể.",
      },
    },
    styles: {
      color: "bg-indigo-600",
      border: "border-indigo-800",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 83,
      symbol: "Bi",
      nameVI: "Bismut",
      nameEN: "Bismuth",
      atomicMass: 208.98,
      electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³",
      valenceElectrons: 5,
      en: 2.02,
      ox: "+3, +5",
    },
    details: {
      origin: "Tiếng Đức 'Wissmuth' (khối trắng).",
      position: { group: "VA", period: 6, block: "p", type: "Kim loại yếu" },
      physical: {
        state: "Rắn",
        color: "Trắng bạc (thường chuyển màu cầu vồng khi bị oxit hóa)",
        density: "9.78 g/cm³",
        meltingPoint: "271.4°C",
        properties:
          "Nguyên tố NẶNG NHẤT KHÔNG PHÓNG XẠ một cách hiệu quả (đồng vị ¹¹⁷Bi có chu kỳ bán rã cực dài).",
      },
      chemical: {
        type: "Kim loại yếu.",
        reactivity: "Ổn định trong không khí.",
        notableReactions: "",
      },
      isotopes: {
        summary: "1 đồng vị bền (thực chất phóng xạ cực nhẹ).",
        list: [],
      },
      compounds: [
        {
          formula: "Bismuth subsalicylate",
          name: "Pepto-Bismol",
          desc: "Thuốc trị đau bụng.",
        },
      ],
      applications:
        "Thuốc (Pepto-Bismol), hợp kim nóng chảy thấp (cần chữa cháy, thay thế chì trong hàn), sắc tố mỹ phẩm (bột ngọc trai).",
      naturalOccurrence: "Dạng tự sinh, quặng Bismuthinite (Bi₂S₃).",
      preparation: { industry: "Phụ phẩm tinh chế đồng, chì." },
      safety: {
        toxicity:
          "Kim loại nặng KHÔNG ĐỘC (thay thế chì trong nhiều ứng dụng).",
        hazards: "",
      },
    },
    styles: {
      color: "bg-indigo-600",
      border: "border-indigo-800",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 84,
      symbol: "Po",
      nameVI: "Poloni",
      nameEN: "Polonium",
      atomicMass: 209,
      electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴",
      valenceElectrons: 6,
      en: 2.0,
      ox: "-2, +2, +4, +6",
    },
    details: {
      origin: "Đặt theo tên quê hương của Marie Curie, 'Poland' (Ba Lan).",
      position: {
        group: "VIA",
        period: 6,
        block: "p",
        type: "Á kim (Phóng xạ)",
      },
      physical: {
        state: "Rắn",
        color: "Bạc",
        density: "9.32 g/cm³",
        meltingPoint: "254°C",
        properties:
          "Phát ra bức xạ Alpha mạnh (¹¹⁰Po - chu kỳ bán rã 138 ngày).",
      },
      chemical: {
        type: "Phi kim, cực kỳ phóng xạ.",
        reactivity: "Tự phát sáng (do phóng xạ).",
        notableReactions: "",
      },
      isotopes: {
        summary: "Không có đồng vị bền.",
        list: [
          {
            name: "²¹⁰Po",
            abundance: "Vết tự nhiên",
            role: "Nguồn nhiệt trong vệ tinh, cực độc (ám sát).",
          },
        ],
      },
      compounds: [],
      applications:
        "Nguồn nhiệt trong vệ tinh/tàu thăm dò không gian (radioisotope thermoelectric generator - RTG), loại bỏ tĩnh điện trong công nghiệp.",
      naturalOccurrence: "Phân rã Uranium (cực hiếm).",
      preparation: { industry: "Chiếu xạ Bismuth trong lò phản ứng." },
      safety: {
        toxicity:
          "CỰC KỲ ĐỘC. Độc nhất theo trọng lượng (tàn phá tế bào do Alpha).",
        hazards: "Độc tính phóng xạ cao.",
      },
    },
    styles: {
      color: "bg-red-400",
      border: "border-red-600",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 85,
      symbol: "At",
      nameVI: "Astatin",
      nameEN: "Astatine",
      atomicMass: 210,
      electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵",
      valenceElectrons: 7,
      en: 2.2,
      ox: "-1, +1, +3, +5, +7",
    },
    details: {
      origin: "Tiếng Hy Lạp 'astatos' (không ổn định).",
      position: {
        group: "VIIA",
        period: 6,
        block: "p",
        type: "Phi kim (Halogen/Phóng xạ)",
      },
      physical: {
        state: "Rắn",
        color: "Đen (dự đoán)",
        density: "6.2 g/cm³ (dự đoán)",
        meltingPoint: "302°C (dự đoán)",
        properties:
          "Nguyên tố TỰ NHIÊN HIẾM NHẤT Trái đất (chỉ tồn tại vài gram trên toàn hành tinh).",
      },
      chemical: {
        type: "Halogen phóng xạ.",
        reactivity: "Tính kim loại hơn Iốt.",
        notableReactions: "",
      },
      isotopes: {
        summary: "Không có đồng vị bền.",
        list: [
          {
            name: "²¹¹At",
            abundance: "Nhân tạo",
            role: "Xạ trị ung thư (chỉ Alpha, ít hại mô khỏe).",
          },
        ],
      },
      compounds: [],
      applications:
        "Y học hạt nhân (xạ trị Alpha nhắm mục tiêu), nghiên cứu khoa học.",
      naturalOccurrence: "Phân rã Uranium và Thorium (dạng vết).",
      preparation: { industry: "Bắn phá Bismuth bằng hạt Alpha." },
      safety: {
        toxicity: "CỰC KỲ ĐỘC. Phóng xạ mạnh.",
        hazards: "Độc tính phóng xạ cao.",
      },
    },
    styles: {
      color: "bg-red-400",
      border: "border-red-600",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 86,
      symbol: "Rn",
      nameVI: "Radon",
      nameEN: "Radon",
      atomicMass: 222,
      electronConfig: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶",
      valenceElectrons: 8,
      en: 2.2,
      ox: "+2",
    },
    details: {
      origin: "Phát hiện từ quá trình phân rã Radium.",
      position: {
        group: "VIIIA",
        period: 6,
        block: "p",
        type: "Khí hiếm (Phóng xạ)",
      },
      physical: {
        state: "Khí",
        color: "Không màu",
        density: "9.73 g/L",
        meltingPoint: "-71°C",
        properties: "Khí hiếm nặng nhất. Tự phát sáng trong điều kiện lạnh.",
      },
      chemical: {
        type: "Khí hiếm phóng xạ.",
        reactivity: "Trơ, nhưng có tạo hợp chất.",
        notableReactions: "",
      },
      isotopes: {
        summary: "Không có đồng vị bền.",
        list: [
          {
            name: "²²²Rn",
            abundance: "Tự nhiên",
            role: "Chu kỳ bán rã 3.8 ngày.",
          },
        ],
      },
      compounds: [],
      applications:
        "Chẩn đoán chất phóng xạ, nghiên cứu địa chất (dự báo động đất), một số ứng dụng trị liệu ung thư (đã lỗi thời).",
      naturalOccurrence: "Sản phẩm phân rã Uranium và Thorium trong đất đá.",
      preparation: { industry: "Tách từ nước chứa Radium." },
      safety: {
        toxicity:
          "CỰC ĐỘC. Là nguyên nhân gây ung thư phổi phổ biến thứ hai (sau hút thuốc).",
        hazards: "Phóng xạ Alpha trong nhà.",
      },
    },
    styles: {
      color: "bg-cyan-500",
      border: "border-cyan-700",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 87,
      symbol: "Fr",
      nameVI: "Franxi",
      nameEN: "Francium",
      atomicMass: 223,
      electronConfig: "[Rn] 7s¹",
      valenceElectrons: 1,
      en: 0.7,
      ox: "+1",
    },
    details: {
      origin: "Theo tên nước Pháp, 'France'.",
      position: {
        group: "IA",
        period: 7,
        block: "s",
        type: "Kim loại kiềm (Phóng xạ)",
      },
      physical: {
        state: "Rắn (dự đoán)",
        color: "Vàng kim (dự đoán)",
        density: "1.87 g/cm³ (dự đoán)",
        meltingPoint: "27°C (dự đoán)",
        properties:
          "Nguyên tố kém bền nhất (chu kỳ bán rã 22 phút). Kim loại hoạt động mạnh nhất.",
      },
      chemical: {
        type: "Kim loại kiềm, phóng xạ.",
        reactivity: "Phản ứng nổ mạnh với nước.",
        notableReactions: "",
      },
      isotopes: {
        summary: "Không có đồng vị bền.",
        list: [
          {
            name: "²²³Fr",
            abundance: "Vết tự nhiên",
            role: "Chu kỳ bán rã ngắn (22 phút).",
          },
        ],
      },
      compounds: [],
      applications: "Chỉ dùng trong nghiên cứu cơ bản (quang phổ).",
      naturalOccurrence: "Dạng vết cực hiếm (phân rã của Uranium).",
      preparation: { industry: "Sản xuất từ phản ứng hạt nhân." },
      safety: {
        toxicity: "Cực kỳ phóng xạ.",
        hazards: "Không thể thu thập số lượng lớn.",
      },
    },
    styles: {
      color: "bg-pink-800",
      border: "border-pink-950",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 88,
      symbol: "Ra",
      nameVI: "Radium",
      nameEN: "Radium",
      atomicMass: 226,
      electronConfig: "[Rn] 7s²",
      valenceElectrons: 2,
      en: 0.9,
      ox: "+2",
    },
    details: {
      origin: "Tiếng Latin 'radius' (tia - vì phát ra bức xạ mạnh).",
      position: {
        group: "IIA",
        period: 7,
        block: "s",
        type: "Kim loại kiềm thổ (Phóng xạ)",
      },
      physical: {
        state: "Rắn",
        color: "Trắng tinh (chuyển đen khi tiếp xúc không khí)",
        density: "5.5 g/cm³",
        meltingPoint: "700°C",
        properties: "Phát quang yếu (xanh lam) trong bóng tối.",
      },
      chemical: {
        type: "Kim loại kiềm thổ, phóng xạ.",
        reactivity: "Hoạt động mạnh, tạo hợp chất dễ tan.",
        notableReactions: "",
      },
      isotopes: {
        summary: "Không có đồng vị bền.",
        list: [
          {
            name: "²²⁶Ra",
            abundance: "Vết tự nhiên",
            role: "Chu kỳ bán rã 1600 năm.",
          },
        ],
      },
      compounds: [],
      applications:
        "Điều trị ung thư (đã lỗi thời), sơn phát quang (đồng hồ cũ - đã bị thay thế vì độc), nguồn neutron (Be-Ra).",
      naturalOccurrence: "Phân rã Uranium (1 tấn U chứa 0.14g Ra).",
      preparation: { industry: "Tách từ quặng Uranium (rất khó)." },
      safety: {
        toxicity: "CỰC KỲ ĐỘC. Gây ung thư xương (do tính chất giống Canxi).",
        hazards: "Phóng xạ Alpha và Gamma.",
      },
    },
    styles: {
      color: "bg-red-500",
      border: "border-red-700",
      text: "text-white",
    },
  },

  // =========================================================================
  // ACTINIDES (5f-BLOCK) - NHÓM PHÓNG XẠ
  // =========================================================================
  {
    basic: {
      number: 89,
      symbol: "Ac",
      nameVI: "Actini",
      nameEN: "Actinium",
      atomicMass: 227,
      electronConfig: "[Rn] 6d¹ 7s²",
      valenceElectrons: 3,
      en: 1.1,
      ox: "+3",
    },
    details: {
      origin: "Tiếng Hy Lạp 'aktinos' (tia sáng - vì phát quang).",
      position: {
        group: "IIIB",
        period: 7,
        block: "d/f",
        type: "Actinide (Phóng xạ)",
      },
      physical: {
        state: "Rắn",
        color: "Trắng bạc",
        density: "10.07 g/cm³ (dự đoán)",
        meltingPoint: "1050°C",
        properties: "Mạnh mẽ phóng xạ, phát quang màu xanh lam.",
      },
      chemical: {
        type: "Actinide, phóng xạ.",
        reactivity: "Hoạt động hóa học mạnh.",
        notableReactions: "",
      },
      isotopes: {
        summary: "Không có đồng vị bền.",
        list: [
          {
            name: "²²⁷Ac",
            abundance: "Vết tự nhiên",
            role: "Chu kỳ bán rã 21.7 năm.",
          },
        ],
      },
      compounds: [],
      applications: "Nguồn neutron, điều trị ung thư (đang nghiên cứu).",
      naturalOccurrence: "Vết nhỏ trong quặng Uranium.",
      preparation: { industry: "Chiếu xạ Radium bằng neutron." },
      safety: { toxicity: "Cực kỳ phóng xạ.", hazards: "Độc tính cao." },
    },
    styles: {
      color: "bg-fuchsia-800",
      border: "border-fuchsia-950",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 90,
      symbol: "Th",
      nameVI: "Thori",
      nameEN: "Thorium",
      atomicMass: 232.038,
      electronConfig: "[Rn] 6d² 7s²",
      valenceElectrons: 4,
      en: 1.3,
      ox: "+4",
    },
    details: {
      origin: "Theo tên thần sấm Na Uy 'Thor'.",
      position: {
        group: "IIIB",
        period: 7,
        block: "f",
        type: "Actinide (Phóng xạ nhẹ)",
      },
      physical: {
        state: "Rắn",
        color: "Trắng bạc (chuyển xám/đen khi oxit hóa)",
        density: "11.72 g/cm³",
        meltingPoint: "1750°C",
        properties: "Chu kỳ bán rã dài (¹⁴.05 tỷ năm).",
      },
      chemical: {
        type: "Actinide.",
        reactivity: "Tự bốc cháy khi nung nóng.",
        notableReactions: "",
      },
      isotopes: {
        summary: "Không có đồng vị bền.",
        list: [
          {
            name: "²³²Th",
            abundance: "Tự nhiên (dư)",
            role: "Chu kỳ bán rã dài.",
          },
        ],
      },
      compounds: [
        {
          formula: "ThO₂",
          name: "Thori oxit",
          desc: "Đèn măng xông cắm trại.",
        },
      ],
      applications:
        "Nhiên liệu hạt nhân tiềm năng (chu trình Thori), ống kính máy ảnh (chỉ số khúc xạ cao), đèn măng xông.",
      naturalOccurrence: "Phổ biến hơn Uranium (quặng Monazite).",
      preparation: { industry: "Tách từ Monazite." },
      safety: {
        toxicity: "Phóng xạ nhẹ, độc (tích tụ trong cơ thể).",
        hazards: "Bột dễ cháy.",
      },
    },
    styles: {
      color: "bg-fuchsia-800",
      border: "border-fuchsia-950",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 91,
      symbol: "Pa",
      nameVI: "Protactini",
      nameEN: "Protactinium",
      atomicMass: 231.036,
      electronConfig: "[Rn] 5f² 6d¹ 7s²",
      valenceElectrons: 5,
      en: 1.5,
      ox: "+4, +5",
    },
    details: {
      origin: "Tiếng Hy Lạp 'protos' (đầu tiên) - phân rã thành Actinium.",
      position: {
        group: "IIIB",
        period: 7,
        block: "f",
        type: "Actinide (Phóng xạ)",
      },
      physical: {
        state: "Rắn",
        color: "Trắng bạc",
        density: "15.37 g/cm³",
        meltingPoint: "1568°C",
        properties: "",
      },
      chemical: {
        type: "Actinide.",
        reactivity: "Dễ phản ứng.",
        notableReactions: "",
      },
      isotopes: {
        summary: "Không có đồng vị bền.",
        list: [
          {
            name: "²³¹Pa",
            abundance: "Vết tự nhiên",
            role: "Chu kỳ bán rã 32,500 năm.",
          },
        ],
      },
      compounds: [],
      applications: "Nghiên cứu khoa học cơ bản (rất hiếm).",
      naturalOccurrence: "Phân rã Uranium-235 (cực hiếm).",
      preparation: { industry: "Tách từ quặng Uranium." },
      safety: {
        toxicity:
          "CỰC KỲ ĐỘC. Phóng xạ Alpha mạnh, rất hiếm (rất nguy hiểm nếu bị nhiễm).",
        hazards: "Độc tính và phóng xạ cao.",
      },
    },
    styles: {
      color: "bg-fuchsia-800",
      border: "border-fuchsia-950",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 92,
      symbol: "U",
      nameVI: "Urani",
      nameEN: "Uranium",
      atomicMass: 238.029,
      electronConfig: "[Rn] 5f³ 6d¹ 7s²",
      valenceElectrons: 6,
      en: 1.13,
      ox: "+3, +4, +5, +6",
    },
    details: {
      origin: "Theo tên hành tinh Uranus (Thiên Vương Tinh).",
      position: {
        group: "IIIB",
        period: 7,
        block: "f",
        type: "Actinide (Phóng xạ)",
      },
      physical: {
        state: "Rắn",
        color: "Trắng bạc",
        density: "19.1 g/cm³",
        meltingPoint: "1132°C",
        properties: "Kim loại nặng nhất còn được dùng phổ biến. Dễ bị mài mòn.",
      },
      chemical: {
        type: "Actinide.",
        reactivity: "Hoạt động mạnh, tạo nhiều hợp chất màu sắc.",
        notableReactions: "",
      },
      isotopes: {
        summary: "Không có đồng vị bền.",
        list: [
          {
            name: "²³⁸U",
            abundance: "99.28%",
            role: "Không phân hạch, nhiên liệu cho lò phản ứng",
          },
          {
            name: "²³⁵U",
            abundance: "0.71%",
            role: "Phân hạch, nhiên liệu bom hạt nhân/lò phản ứng",
          },
        ],
      },
      compounds: [
        {
          formula: "Uranium glass",
          name: "Thủy tinh Uranium",
          desc: "Phát quang màu xanh lá dưới tia UV.",
        },
      ],
      applications:
        "Nhiên liệu lò phản ứng hạt nhân, vũ khí hạt nhân, vật liệu xuyên giáp (Uranium nghèo), tạo màu cho gốm sứ (cũ).",
      naturalOccurrence: "Quặng Uraninite (phổ biến hơn Au/Ag).",
      preparation: { industry: "Khai thác mỏ, làm giàu đồng vị (ly tâm khí)." },
      safety: {
        toxicity: "Độc hóa học (gây suy thận) và phóng xạ.",
        hazards: "Độc tính cao.",
      },
    },
    styles: {
      color: "bg-fuchsia-800",
      border: "border-fuchsia-950",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 93,
      symbol: "Np",
      nameVI: "Neptuni",
      nameEN: "Neptunium",
      atomicMass: 237,
      electronConfig: "[Rn] 5f⁴ 6d¹ 7s²",
      valenceElectrons: 7,
      en: 1.13,
      ox: "+3, +4, +5, +6",
    },
    details: {
      origin: "Theo tên hành tinh Neptune (Hải Vương Tinh - sau Uranus).",
      position: {
        group: "IIIB",
        period: 7,
        block: "f",
        type: "Actinide (Phóng xạ, Tổng hợp)",
      },
      physical: {
        state: "Rắn",
        color: "Bạc",
        density: "20.45 g/cm³",
        meltingPoint: "637°C",
        properties: "Nguyên tố transuranic (sau Uranium) đầu tiên.",
      },
      chemical: {
        type: "Actinide.",
        reactivity: "Nhiều trạng thái oxi hóa.",
        notableReactions: "",
      },
      isotopes: {
        summary: "Không có đồng vị bền.",
        list: [
          {
            name: "²³⁷Np",
            abundance: "Nhân tạo",
            role: "Chu kỳ bán rã 2.14 triệu năm.",
          },
        ],
      },
      compounds: [],
      applications:
        "Sản xuất Plutonium (từ chiếu xạ ²³⁸U), nghiên cứu hạt nhân, chất thải hạt nhân.",
      naturalOccurrence: "Vết cực nhỏ (phản ứng neutron tự nhiên).",
      preparation: { industry: "Phụ phẩm lò phản ứng hạt nhân." },
      safety: {
        toxicity: "Cực kỳ phóng xạ và độc hóa học.",
        hazards: "Độc tính cao.",
      },
    },
    styles: {
      color: "bg-fuchsia-800",
      border: "border-fuchsia-950",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 94,
      symbol: "Pu",
      nameVI: "Plutoni",
      nameEN: "Plutonium",
      atomicMass: 244,
      electronConfig: "[Rn] 5f⁶ 7s²",
      valenceElectrons: 4,
      en: 1.13,
      ox: "+3, +4, +5, +6",
    },
    details: {
      origin: "Theo tên hành tinh Pluto (Sao Diêm Vương - sau Neptune).",
      position: {
        group: "IIIB",
        period: 7,
        block: "f",
        type: "Actinide (Phóng xạ, Tổng hợp)",
      },
      physical: {
        state: "Rắn",
        color: "Trắng bạc (chuyển xám)",
        density: "19.8 g/cm³",
        meltingPoint: "640°C",
        properties: "Mật độ cao. Có 6 dạng thù hình (allotropes).",
      },
      chemical: {
        type: "Actinide.",
        reactivity: "Tự phát nhiệt (nóng).",
        notableReactions: "",
      },
      isotopes: {
        summary: "Không có đồng vị bền.",
        list: [
          {
            name: "²³⁹Pu",
            abundance: "Nhân tạo",
            role: "Phân hạch (vũ khí hạt nhân, nhiên liệu).",
          },
        ],
      },
      compounds: [],
      applications:
        "Vũ khí hạt nhân (bom nguyên tử), nhiên liệu MOX (lò phản ứng), nguồn điện RTG (sứ mệnh không gian).",
      naturalOccurrence: "Vết cực nhỏ trong quặng U.",
      preparation: {
        industry: "Chiếu xạ ²³⁸U bằng neutron trong lò phản ứng.",
      },
      safety: {
        toxicity: "CỰC KỲ ĐỘC. Gây ung thư (nếu hít phải - độc Alpha).",
        hazards: "Độc tính và phóng xạ cực cao.",
      },
    },
    styles: {
      color: "bg-fuchsia-800",
      border: "border-fuchsia-950",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 95,
      symbol: "Am",
      nameVI: "Amerixi",
      nameEN: "Americium",
      atomicMass: 243,
      electronConfig: "[Rn] 5f⁷ 7s²",
      valenceElectrons: 3,
      en: 1.13,
      ox: "+3, +4, +5, +6",
    },
    details: {
      origin: "Theo tên Châu Mỹ (America).",
      position: {
        group: "IIIB",
        period: 7,
        block: "f",
        type: "Actinide (Phóng xạ, Tổng hợp)",
      },
      physical: {
        state: "Rắn",
        color: "Trắng bạc",
        density: "13.6 g/cm³",
        meltingPoint: "1176°C",
        properties: "Tự phát sáng yếu trong bóng tối.",
      },
      chemical: { type: "Actinide.", reactivity: "", notableReactions: "" },
      isotopes: {
        summary: "Không có đồng vị bền.",
        list: [
          {
            name: "²⁴¹Am",
            abundance: "Nhân tạo",
            role: "Chu kỳ bán rã 432 năm.",
          },
        ],
      },
      compounds: [],
      applications:
        "Đầu dò khói gia đình (nguồn Alpha), máy đo độ dày trong công nghiệp, nghiên cứu hạt nhân.",
      naturalOccurrence: "Tổng hợp.",
      preparation: { industry: "Chiếu xạ Plutonium bằng neutron." },
      safety: { toxicity: "Cực kỳ phóng xạ.", hazards: "Độc tính cao." },
    },
    styles: {
      color: "bg-fuchsia-800",
      border: "border-fuchsia-950",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 96,
      symbol: "Cm",
      nameVI: "Curi",
      nameEN: "Curium",
      atomicMass: 247,
      electronConfig: "[Rn] 5f⁷ 6d¹ 7s²",
      valenceElectrons: 4,
      en: 1.3,
      ox: "+3, +4",
    },
    details: {
      origin: "Theo tên nhà khoa học Marie và Pierre Curie.",
      position: {
        group: "IIIB",
        period: 7,
        block: "f",
        type: "Actinide (Phóng xạ, Tổng hợp)",
      },
      physical: {
        state: "Rắn",
        color: "Trắng bạc",
        density: "13.5 g/cm³",
        meltingPoint: "1340°C",
        properties: "Phát nhiệt mạnh (cao hơn Plutonium).",
      },
      chemical: { type: "Actinide.", reactivity: "", notableReactions: "" },
      isotopes: {
        summary: "Không có đồng vị bền.",
        list: [
          {
            name: "²⁴⁸Cm",
            abundance: "Nhân tạo",
            role: "Chu kỳ bán rã 348,000 năm.",
          },
        ],
      },
      compounds: [],
      applications:
        "Nguồn điện RTG (thăm dò không gian), thiết bị đo phổ tia X Alpha (APXS) trên sao Hỏa.",
      naturalOccurrence: "Tổng hợp.",
      preparation: { industry: "Chiếu xạ Americium." },
      safety: { toxicity: "Cực kỳ phóng xạ.", hazards: "Độc tính cao." },
    },
    styles: {
      color: "bg-fuchsia-800",
      border: "border-fuchsia-950",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 97,
      symbol: "Bk",
      nameVI: "Berkeli",
      nameEN: "Berkelium",
      atomicMass: 247,
      electronConfig: "[Rn] 5f⁹ 7s²",
      valenceElectrons: 3,
      en: 1.3,
      ox: "+3, +4",
    },
    details: {
      origin: "Theo tên thành phố Berkeley, California.",
      position: {
        group: "IIIB",
        period: 7,
        block: "f",
        type: "Actinide (Phóng xạ, Tổng hợp)",
      },
      physical: {
        state: "Rắn",
        color: "Bạc",
        density: "14.8 g/cm³ (dự đoán)",
        meltingPoint: "986°C",
        properties: "Khó tổng hợp, chỉ có thể tạo ra số lượng rất nhỏ.",
      },
      chemical: { type: "Actinide.", reactivity: "", notableReactions: "" },
      isotopes: {
        summary: "Không có đồng vị bền.",
        list: [
          {
            name: "²⁴⁹Bk",
            abundance: "Nhân tạo",
            role: "Sản xuất nguyên tố nặng hơn (ví dụ: Tennessine).",
          },
        ],
      },
      compounds: [],
      applications:
        "Sản xuất nguyên tố siêu nặng (sử dụng như mục tiêu bắn phá).",
      naturalOccurrence: "Tổng hợp.",
      preparation: {
        industry:
          "Chiếu xạ Americium bằng neutron trong lò phản ứng năng lượng cao.",
      },
      safety: { toxicity: "Cực kỳ phóng xạ.", hazards: "Độc tính cao." },
    },
    styles: {
      color: "bg-fuchsia-800",
      border: "border-fuchsia-950",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 98,
      symbol: "Cf",
      nameVI: "Californi",
      nameEN: "Californium",
      atomicMass: 251,
      electronConfig: "[Rn] 5f¹⁰ 7s²",
      valenceElectrons: 3,
      en: 1.3,
      ox: "+3, +4",
    },
    details: {
      origin: "Theo tên bang California và Đại học California, Berkeley.",
      position: {
        group: "IIIB",
        period: 7,
        block: "f",
        type: "Actinide (Phóng xạ, Tổng hợp)",
      },
      physical: {
        state: "Rắn",
        color: "Bạc",
        density: "15.1 g/cm³ (dự đoán)",
        meltingPoint: "900°C",
        properties: "Là nguồn phát neutron mạnh mẽ.",
      },
      chemical: { type: "Actinide.", reactivity: "", notableReactions: "" },
      isotopes: {
        summary: "Không có đồng vị bền.",
        list: [
          {
            name: "²⁵²Cf",
            abundance: "Nhân tạo",
            role: "Nguồn neutron (chu kỳ bán rã 2.6 năm).",
          },
        ],
      },
      compounds: [],
      applications:
        "Khởi động lò phản ứng hạt nhân, thăm dò dầu khí (phân tích vật liệu), điều trị ung thư (hiếm).",
      naturalOccurrence: "Tổng hợp.",
      preparation: { industry: "Chiếu xạ Curium." },
      safety: {
        toxicity: "Cực kỳ phóng xạ. Rất ít cần thiết để gây nguy hiểm.",
        hazards: "Nguồn neutron nguy hiểm.",
      },
    },
    styles: {
      color: "bg-fuchsia-800",
      border: "border-fuchsia-950",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 99,
      symbol: "Es",
      nameVI: "Einsteini",
      nameEN: "Einsteinium",
      atomicMass: 252,
      electronConfig: "[Rn] 5f¹¹ 7s²",
      valenceElectrons: 3,
      en: 1.3,
      ox: "+3",
    },
    details: {
      origin: "Theo tên nhà vật lý Albert Einstein.",
      position: {
        group: "IIIB",
        period: 7,
        block: "f",
        type: "Actinide (Phóng xạ, Tổng hợp)",
      },
      physical: {
        state: "Rắn",
        color: "Bạc",
        density: "13.5 g/cm³ (dự đoán)",
        meltingPoint: "860°C (dự đoán)",
        properties: "Lần đầu được tìm thấy trong bụi sau vụ nổ bom nhiệt hạch.",
      },
      chemical: { type: "Actinide.", reactivity: "", notableReactions: "" },
      isotopes: {
        summary: "Không có đồng vị bền.",
        list: [
          {
            name: "²⁵³Es",
            abundance: "Nhân tạo",
            role: "Chỉ dùng trong nghiên cứu (chu kỳ bán rã 20.47 ngày).",
          },
        ],
      },
      compounds: [],
      applications:
        "Chỉ dùng trong nghiên cứu (sản xuất các nguyên tố nặng hơn).",
      naturalOccurrence: "Tổng hợp.",
      preparation: { industry: "Chiếu xạ Plutonium bằng neutron." },
      safety: { toxicity: "Cực kỳ phóng xạ.", hazards: "Độc tính cao." },
    },
    styles: {
      color: "bg-fuchsia-800",
      border: "border-fuchsia-950",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 100,
      symbol: "Fm",
      nameVI: "Fermi",
      nameEN: "Fermium",
      atomicMass: 257,
      electronConfig: "[Rn] 5f¹² 7s²",
      valenceElectrons: 3,
      en: 1.3,
      ox: "+3",
    },
    details: {
      origin: "Theo tên nhà vật lý Enrico Fermi.",
      position: {
        group: "IIIB",
        period: 7,
        block: "f",
        type: "Actinide (Phóng xạ, Tổng hợp)",
      },
      physical: {
        state: "Rắn",
        color: "Bạc (dự đoán)",
        density: "13.5 g/cm³ (dự đoán)",
        meltingPoint: "1527°C (dự đoán)",
        properties: "Nguyên tố nặng nhất có thể tạo ra bằng chiếu xạ neutron.",
      },
      chemical: { type: "Actinide.", reactivity: "", notableReactions: "" },
      isotopes: {
        summary: "Không có đồng vị bền.",
        list: [
          {
            name: "²⁵⁷Fm",
            abundance: "Nhân tạo",
            role: "Chỉ dùng trong nghiên cứu (chu kỳ bán rã 100 ngày).",
          },
        ],
      },
      compounds: [],
      applications: "Chỉ dùng trong nghiên cứu khoa học cơ bản (rất hiếm).",
      naturalOccurrence: "Tổng hợp.",
      preparation: { industry: "Phân hạch hạt nhân." },
      safety: { toxicity: "Cực kỳ phóng xạ.", hazards: "Độc tính cao." },
    },
    styles: {
      color: "bg-fuchsia-800",
      border: "border-fuchsia-950",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 101,
      symbol: "Md",
      nameVI: "Mendelevi",
      nameEN: "Mendelevium",
      atomicMass: 258,
      electronConfig: "[Rn] 5f¹³ 7s²",
      valenceElectrons: 3,
      en: 1.3,
      ox: "+2, +3",
    },
    details: {
      origin:
        "Theo tên nhà hóa học Dmitri Mendeleev (người tạo ra Bảng tuần hoàn).",
      position: {
        group: "IIIB",
        period: 7,
        block: "f",
        type: "Actinide (Phóng xạ, Tổng hợp)",
      },
      physical: {
        state: "Rắn (dự đoán)",
        color: "Bạc (dự đoán)",
        density: "10.3 g/cm³ (dự đoán)",
        meltingPoint: "827°C (dự đoán)",
        properties:
          "Nguyên tố đầu tiên được tổng hợp nguyên tử từng nguyên tử một.",
      },
      chemical: { type: "Actinide.", reactivity: "", notableReactions: "" },
      isotopes: {
        summary: "Không có đồng vị bền.",
        list: [
          {
            name: "²⁵⁸Md",
            abundance: "Nhân tạo",
            role: "Chỉ dùng trong nghiên cứu (chu kỳ bán rã 51.5 ngày).",
          },
        ],
      },
      compounds: [],
      applications: "Chỉ dùng trong nghiên cứu khoa học cơ bản (rất hiếm).",
      naturalOccurrence: "Tổng hợp.",
      preparation: { industry: "Bắn phá Einsteinium bằng hạt Alpha." },
      safety: { toxicity: "Cực kỳ phóng xạ.", hazards: "Độc tính cao." },
    },
    styles: {
      color: "bg-fuchsia-800",
      border: "border-fuchsia-950",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 102,
      symbol: "No",
      nameVI: "Nobeli",
      nameEN: "Nobelium",
      atomicMass: 259,
      electronConfig: "[Rn] 5f¹⁴ 7s²",
      valenceElectrons: 2,
      en: 1.3,
      ox: "+2, +3",
    },
    details: {
      origin: "Theo tên nhà hóa học Alfred Nobel.",
      position: {
        group: "IIIB",
        period: 7,
        block: "f",
        type: "Actinide (Phóng xạ, Tổng hợp)",
      },
      physical: {
        state: "Rắn (dự đoán)",
        color: "Bạc (dự đoán)",
        density: "9.9 g/cm³ (dự đoán)",
        meltingPoint: "827°C (dự đoán)",
        properties: "",
      },
      chemical: {
        type: "Actinide.",
        reactivity: "Phức tạp (hóa trị +2, +3).",
        notableReactions: "",
      },
      isotopes: {
        summary: "Không có đồng vị bền.",
        list: [
          {
            name: "²⁵⁹No",
            abundance: "Nhân tạo",
            role: "Chỉ dùng trong nghiên cứu (chu kỳ bán rã 58 phút).",
          },
        ],
      },
      compounds: [],
      applications: "Chỉ dùng trong nghiên cứu khoa học cơ bản (rất hiếm).",
      naturalOccurrence: "Tổng hợp.",
      preparation: { industry: "Bắn phá Curium bằng Carbon." },
      safety: { toxicity: "Cực kỳ phóng xạ.", hazards: "Độc tính cao." },
    },
    styles: {
      color: "bg-fuchsia-800",
      border: "border-fuchsia-950",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 103,
      symbol: "Lr",
      nameVI: "Lorenxi",
      nameEN: "Lawrencium",
      atomicMass: 262,
      electronConfig: "[Rn] 5f¹⁴ 6d¹ 7s²",
      valenceElectrons: 3,
      en: 1.3,
      ox: "+3",
    },
    details: {
      origin:
        "Theo tên nhà vật lý Ernest O. Lawrence (người phát minh máy gia tốc cyclotron).",
      position: {
        group: "IIIB",
        period: 7,
        block: "d/f",
        type: "Actinide (Phóng xạ, Tổng hợp)",
      },
      physical: {
        state: "Rắn (dự đoán)",
        color: "Bạc (dự đoán)",
        density: "15.6 g/cm³ (dự đoán)",
        meltingPoint: "1627°C (dự đoán)",
        properties: "Nguyên tố nặng nhất của nhóm Actinides.",
      },
      chemical: { type: "Actinide.", reactivity: "", notableReactions: "" },
      isotopes: {
        summary: "Không có đồng vị bền.",
        list: [
          {
            name: "²⁶²Lr",
            abundance: "Nhân tạo",
            role: "Chỉ dùng trong nghiên cứu (chu kỳ bán rã 3.6 giờ).",
          },
        ],
      },
      compounds: [],
      applications: "Chỉ dùng trong nghiên cứu khoa học cơ bản.",
      naturalOccurrence: "Tổng hợp.",
      preparation: { industry: "Bắn phá Californium bằng Boron." },
      safety: { toxicity: "Cực kỳ phóng xạ.", hazards: "Độc tính cao." },
    },
    styles: {
      color: "bg-fuchsia-800",
      border: "border-fuchsia-950",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 104,
      symbol: "Rf",
      nameVI: "Rutherfordi",
      nameEN: "Rutherfordium",
      atomicMass: 267,
      electronConfig: "[Rn] 5f¹⁴ 6d² 7s²",
      valenceElectrons: 4,
      en: null,
      ox: "+4",
    },
    details: {
      origin: "Theo tên nhà vật lý Ernest Rutherford.",
      position: {
        group: "IVB",
        period: 7,
        block: "d",
        type: "Kim loại chuyển tiếp (Tổng hợp)",
      },
      physical: {
        state: "Rắn (dự đoán)",
        color: "Xám bạc (dự đoán)",
        density: "23.2 g/cm³ (dự đoán)",
        meltingPoint: "2100°C (dự đoán)",
        properties:
          "Nguyên tố d-block đầu tiên sau Actinides. Chu kỳ bán rã ngắn.",
      },
      chemical: {
        type: "Siêu nặng, phóng xạ.",
        reactivity: "Dự đoán giống Hafnium (Hf).",
        notableReactions: "",
      },
      isotopes: {
        summary: "Không có đồng vị bền.",
        list: [
          {
            name: "²⁶⁷Rf",
            abundance: "Nhân tạo",
            role: "Chu kỳ bán rã 1.3 giờ.",
          },
        ],
      },
      compounds: [],
      applications: "Chỉ dùng trong nghiên cứu khoa học cơ bản.",
      naturalOccurrence: "Tổng hợp.",
      preparation: { industry: "Bắn phá Californium bằng Carbon." },
      safety: {
        toxicity: "Cực kỳ phóng xạ.",
        hazards: "Độc tính cao (dự đoán).",
      },
    },
    styles: {
      color: "bg-blue-900",
      border: "border-blue-950",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 105,
      symbol: "Db",
      nameVI: "Đubni",
      nameEN: "Dubnium",
      atomicMass: 268,
      electronConfig: "[Rn] 5f¹⁴ 6d³ 7s²",
      valenceElectrons: 5,
      en: null,
      ox: "+5",
    },
    details: {
      origin: "Theo tên thành phố Dubna, Nga.",
      position: {
        group: "VB",
        period: 7,
        block: "d",
        type: "Kim loại chuyển tiếp (Tổng hợp)",
      },
      physical: {
        state: "Rắn (dự đoán)",
        color: "Xám bạc (dự đoán)",
        density: "29.3 g/cm³ (dự đoán)",
        meltingPoint: "Không rõ",
        properties: "Chu kỳ bán rã cực ngắn (28 giờ).",
      },
      chemical: {
        type: "Siêu nặng, phóng xạ.",
        reactivity: "Dự đoán giống Tantalum (Ta).",
        notableReactions: "",
      },
      isotopes: {
        summary: "Không có đồng vị bền.",
        list: [
          {
            name: "²⁶⁸Db",
            abundance: "Nhân tạo",
            role: "Chỉ dùng trong nghiên cứu.",
          },
        ],
      },
      compounds: [],
      applications: "Chỉ dùng trong nghiên cứu khoa học cơ bản.",
      naturalOccurrence: "Tổng hợp.",
      preparation: { industry: "Bắn phá Californium bằng Nitơ." },
      safety: { toxicity: "Cực kỳ phóng xạ.", hazards: "" },
    },
    styles: {
      color: "bg-blue-900",
      border: "border-blue-950",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 106,
      symbol: "Sg",
      nameVI: "Seaborgi",
      nameEN: "Seaborgium",
      atomicMass: 271,
      electronConfig: "[Rn] 5f¹⁴ 6d⁴ 7s²",
      valenceElectrons: 6,
      en: null,
      ox: "+6",
    },
    details: {
      origin: "Theo tên nhà vật lý Glenn T. Seaborg.",
      position: {
        group: "VIB",
        period: 7,
        block: "d",
        type: "Kim loại chuyển tiếp (Tổng hợp)",
      },
      physical: {
        state: "Rắn (dự đoán)",
        color: "Xám bạc (dự đoán)",
        density: "35.0 g/cm³ (dự đoán)",
        meltingPoint: "Không rõ",
        properties: "Có đồng vị tương đối bền (0.9 phút).",
      },
      chemical: {
        type: "Siêu nặng, phóng xạ.",
        reactivity: "Dự đoán giống Tungsten (W).",
        notableReactions: "",
      },
      isotopes: {
        summary: "Không có đồng vị bền.",
        list: [
          {
            name: "²⁷¹Sg",
            abundance: "Nhân tạo",
            role: "Chỉ dùng trong nghiên cứu.",
          },
        ],
      },
      compounds: [],
      applications: "Chỉ dùng trong nghiên cứu khoa học cơ bản.",
      naturalOccurrence: "Tổng hợp.",
      preparation: { industry: "Bắn phá Californium bằng Oxi." },
      safety: { toxicity: "Cực kỳ phóng xạ.", hazards: "" },
    },
    styles: {
      color: "bg-blue-900",
      border: "border-blue-950",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 107,
      symbol: "Bh",
      nameVI: "Bohri",
      nameEN: "Bohrium",
      atomicMass: 272,
      electronConfig: "[Rn] 5f¹⁴ 6d⁵ 7s²",
      valenceElectrons: 7,
      en: null,
      ox: "+7",
    },
    details: {
      origin: "Theo tên nhà vật lý Niels Bohr.",
      position: {
        group: "VIIB",
        period: 7,
        block: "d",
        type: "Kim loại chuyển tiếp (Tổng hợp)",
      },
      physical: {
        state: "Rắn (dự đoán)",
        color: "Xám bạc (dự đoán)",
        density: "37.1 g/cm³ (dự đoán)",
        meltingPoint: "Không rõ",
        properties: "",
      },
      chemical: {
        type: "Siêu nặng, phóng xạ.",
        reactivity: "Dự đoán giống Rhenium (Re).",
        notableReactions: "",
      },
      isotopes: {
        summary: "Không có đồng vị bền.",
        list: [
          {
            name: "²⁷²Bh",
            abundance: "Nhân tạo",
            role: "Chỉ dùng trong nghiên cứu.",
          },
        ],
      },
      compounds: [],
      applications: "Chỉ dùng trong nghiên cứu khoa học cơ bản.",
      naturalOccurrence: "Tổng hợp.",
      preparation: { industry: "Bắn phá Bismuth bằng Crom." },
      safety: { toxicity: "Cực kỳ phóng xạ.", hazards: "" },
    },
    styles: {
      color: "bg-blue-900",
      border: "border-blue-950",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 108,
      symbol: "Hs",
      nameVI: "Hassi",
      nameEN: "Hassium",
      atomicMass: 270,
      electronConfig: "[Rn] 5f¹⁴ 6d⁶ 7s²",
      valenceElectrons: 8,
      en: null,
      ox: "+8",
    },
    details: {
      origin: "Theo tên bang Hesse, Đức.",
      position: {
        group: "VIIIB",
        period: 7,
        block: "d",
        type: "Kim loại chuyển tiếp (Tổng hợp)",
      },
      physical: {
        state: "Rắn (dự đoán)",
        color: "Xám bạc (dự đoán)",
        density: "40.7 g/cm³ (dự đoán)",
        meltingPoint: "Không rõ",
        properties: "",
      },
      chemical: {
        type: "Siêu nặng, phóng xạ.",
        reactivity: "Dự đoán tạo Osmium Tetroxide (HsO₄).",
        notableReactions: "",
      },
      isotopes: {
        summary: "Không có đồng vị bền.",
        list: [
          {
            name: "²⁷⁰Hs",
            abundance: "Nhân tạo",
            role: "Chỉ dùng trong nghiên cứu.",
          },
        ],
      },
      compounds: [],
      applications: "Chỉ dùng trong nghiên cứu khoa học cơ bản.",
      naturalOccurrence: "Tổng hợp.",
      preparation: { industry: "Bắn phá Curium bằng Sắt." },
      safety: { toxicity: "Cực kỳ phóng xạ.", hazards: "" },
    },
    styles: {
      color: "bg-blue-900",
      border: "border-blue-950",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 109,
      symbol: "Mt",
      nameVI: "Meitneri",
      nameEN: "Meitnerium",
      atomicMass: 276,
      electronConfig: "[Rn] 5f¹⁴ 6d⁷ 7s²",
      valenceElectrons: 9,
      en: null,
      ox: "N/A",
    },
    details: {
      origin: "Theo tên nhà vật lý Lise Meitner.",
      position: {
        group: "VIIIB",
        period: 7,
        block: "d",
        type: "Kim loại chuyển tiếp (Tổng hợp)",
      },
      physical: {
        state: "Rắn (dự đoán)",
        color: "Xám bạc (dự đoán)",
        density: "37.4 g/cm³ (dự đoán)",
        meltingPoint: "Không rõ",
        properties: "Chu kỳ bán rã ngắn.",
      },
      chemical: {
        type: "Siêu nặng, phóng xạ.",
        reactivity: "Dự đoán giống Iridium (Ir).",
        notableReactions: "",
      },
      isotopes: {
        summary: "Không có đồng vị bền.",
        list: [
          {
            name: "²⁷⁶Mt",
            abundance: "Nhân tạo",
            role: "Chỉ dùng trong nghiên cứu.",
          },
        ],
      },
      compounds: [],
      applications: "Chỉ dùng trong nghiên cứu khoa học cơ bản.",
      naturalOccurrence: "Tổng hợp.",
      preparation: { industry: "Bắn phá Bismuth bằng Sắt." },
      safety: { toxicity: "Cực kỳ phóng xạ.", hazards: "" },
    },
    styles: {
      color: "bg-blue-900",
      border: "border-blue-950",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 110,
      symbol: "Ds",
      nameVI: "Darmstadti",
      nameEN: "Darmstadtium",
      atomicMass: 281,
      electronConfig: "[Rn] 5f¹⁴ 6d⁸ 7s²",
      valenceElectrons: 10,
      en: null,
      ox: "N/A",
    },
    details: {
      origin: "Theo tên thành phố Darmstadt, Đức.",
      position: {
        group: "VIIIB",
        period: 7,
        block: "d",
        type: "Kim loại chuyển tiếp (Tổng hợp)",
      },
      physical: {
        state: "Rắn (dự đoán)",
        color: "Xám bạc (dự đoán)",
        density: "34.8 g/cm³ (dự đoán)",
        meltingPoint: "Không rõ",
        properties: "",
      },
      chemical: {
        type: "Siêu nặng, phóng xạ.",
        reactivity: "Dự đoán giống Platin (Pt).",
        notableReactions: "",
      },
      isotopes: {
        summary: "Không có đồng vị bền.",
        list: [
          {
            name: "²⁸¹Ds",
            abundance: "Nhân tạo",
            role: "Chỉ dùng trong nghiên cứu.",
          },
        ],
      },
      compounds: [],
      applications: "Chỉ dùng trong nghiên cứu khoa học cơ bản.",
      naturalOccurrence: "Tổng hợp.",
      preparation: { industry: "Bắn phá Chì bằng Niken." },
      safety: { toxicity: "Cực kỳ phóng xạ.", hazards: "" },
    },
    styles: {
      color: "bg-blue-900",
      border: "border-blue-950",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 111,
      symbol: "Rg",
      nameVI: "Roentgeni",
      nameEN: "Roentgenium",
      atomicMass: 280,
      electronConfig: "[Rn] 5f¹⁴ 6d⁹ 7s²",
      valenceElectrons: 11,
      en: null,
      ox: "N/A",
    },
    details: {
      origin: "Theo tên nhà vật lý Wilhelm Conrad Röntgen.",
      position: {
        group: "IB",
        period: 7,
        block: "d",
        type: "Kim loại chuyển tiếp (Tổng hợp)",
      },
      physical: {
        state: "Rắn (dự đoán)",
        color: "Vàng kim (dự đoán)",
        density: "28.7 g/cm³ (dự đoán)",
        meltingPoint: "Không rõ",
        properties: "",
      },
      chemical: {
        type: "Siêu nặng, phóng xạ.",
        reactivity: "Dự đoán giống Vàng (Au).",
        notableReactions: "",
      },
      isotopes: {
        summary: "Không có đồng vị bền.",
        list: [
          {
            name: "²⁸⁰Rg",
            abundance: "Nhân tạo",
            role: "Chỉ dùng trong nghiên cứu.",
          },
        ],
      },
      compounds: [],
      applications: "Chỉ dùng trong nghiên cứu khoa học cơ bản.",
      naturalOccurrence: "Tổng hợp.",
      preparation: { industry: "Bắn phá Bismuth bằng Niken." },
      safety: { toxicity: "Cực kỳ phóng xạ.", hazards: "" },
    },
    styles: {
      color: "bg-blue-900",
      border: "border-blue-950",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 112,
      symbol: "Cn",
      nameVI: "Copernici",
      nameEN: "Copernicium",
      atomicMass: 285,
      electronConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s²",
      valenceElectrons: 12,
      Cn: { en: null, ox: "+2" },
    },
    details: {
      origin: "Theo tên nhà thiên văn học Nicolaus Copernicus.",
      position: {
        group: "IIB",
        period: 7,
        block: "d",
        type: "Kim loại chuyển tiếp (Tổng hợp)",
      },
      physical: {
        state: "Khí/Lỏng (dự đoán)",
        color: "Không màu (dự đoán)",
        density: "14 g/cm³ (dự đoán)",
        meltingPoint: "Dự đoán bay hơi ở nhiệt độ phòng",
        properties:
          "Dự đoán là nguyên tố dễ bay hơi nhất trong Chu kỳ 7 (Giống Thủy ngân).",
      },
      chemical: {
        type: "Siêu nặng, phóng xạ.",
        reactivity: "Dự đoán giống Thủy ngân (Hg).",
        notableReactions: "",
      },
      isotopes: {
        summary: "Không có đồng vị bền.",
        list: [
          {
            name: "²⁸⁵Cn",
            abundance: "Nhân tạo",
            role: "Chỉ dùng trong nghiên cứu.",
          },
        ],
      },
      compounds: [],
      applications: "Chỉ dùng trong nghiên cứu khoa học cơ bản.",
      naturalOccurrence: "Tổng hợp.",
      preparation: { industry: "Bắn phá Chì bằng Kẽm." },
      safety: { toxicity: "Cực kỳ phóng xạ.", hazards: "" },
    },
    styles: {
      color: "bg-blue-900",
      border: "border-blue-950",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 113,
      symbol: "Nh",
      nameVI: "Nihoni",
      nameEN: "Nihonium",
      atomicMass: 286,
      electronConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹",
      valenceElectrons: 3,
      en: null,
      ox: "N/A",
    },
    details: {
      origin: "Từ 'Nihon' (tên gọi Nhật Bản trong tiếng Nhật).",
      position: {
        group: "IIIA",
        period: 7,
        block: "p",
        type: "Kim loại yếu (Tổng hợp)",
      },
      physical: {
        state: "Rắn (dự đoán)",
        color: "Xám bạc (dự đoán)",
        density: "16 g/cm³ (dự đoán)",
        meltingPoint: "430°C (dự đoán)",
        properties: "",
      },
      chemical: {
        type: "Siêu nặng, phóng xạ.",
        reactivity: "Dự đoán giống Thallium (Tl).",
        notableReactions: "",
      },
      isotopes: {
        summary: "Không có đồng vị bền.",
        list: [
          {
            name: "²⁸⁶Nh",
            abundance: "Nhân tạo",
            role: "Chu kỳ bán rã 8 giây.",
          },
        ],
      },
      compounds: [],
      applications: "Chỉ dùng trong nghiên cứu khoa học cơ bản.",
      naturalOccurrence: "Tổng hợp.",
      preparation: { industry: "Bắn phá Bismuth bằng Kẽm." },
      safety: { toxicity: "Cực kỳ phóng xạ.", hazards: "" },
    },
    styles: {
      color: "bg-teal-700",
      border: "border-teal-900",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 114,
      symbol: "Fl",
      nameVI: "Flerovi",
      nameEN: "Flerovium",
      atomicMass: 289,
      electronConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²",
      valenceElectrons: 4,
      en: null,
      ox: "N/A",
    },
    details: {
      origin: "Theo tên nhà vật lý Georgy Flyorov.",
      position: {
        group: "IVA",
        period: 7,
        block: "p",
        type: "Kim loại yếu (Tổng hợp)",
      },
      physical: {
        state: "Khí/Lỏng (dự đoán)",
        color: "Không màu (dự đoán)",
        density: "14 g/cm³ (dự đoán)",
        meltingPoint: "Dự đoán là kim loại dễ bay hơi",
        properties:
          "Nằm trong Đảo Ổn định (có đồng vị có chu kỳ bán rã dài hơn Nh-Og).",
      },
      chemical: {
        type: "Siêu nặng, phóng xạ.",
        reactivity: "Dự đoán giống Chì (Pb).",
        notableReactions: "",
      },
      isotopes: {
        summary: "Không có đồng vị bền.",
        list: [
          {
            name: "²⁸⁹Fl",
            abundance: "Nhân tạo",
            role: "Chu kỳ bán rã 2.6 giây.",
          },
        ],
      },
      compounds: [],
      applications: "Chỉ dùng trong nghiên cứu khoa học cơ bản.",
      naturalOccurrence: "Tổng hợp.",
      preparation: { industry: "Bắn phá Plutonium bằng Canxi." },
      safety: { toxicity: "Cực kỳ phóng xạ.", hazards: "" },
    },
    styles: {
      color: "bg-teal-700",
      border: "border-teal-900",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 115,
      symbol: "Mc",
      nameVI: "Moscovi",
      nameEN: "Moscovium",
      atomicMass: 290,
      electronConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³",
      valenceElectrons: 5,
      en: null,
      ox: "N/A",
    },
    details: {
      origin: "Theo tên tỉnh Moscow, Nga.",
      position: {
        group: "VA",
        period: 7,
        block: "p",
        type: "Kim loại yếu (Tổng hợp)",
      },
      physical: {
        state: "Rắn (dự đoán)",
        color: "Xám bạc (dự đoán)",
        density: "13.5 g/cm³ (dự đoán)",
        meltingPoint: "400°C (dự đoán)",
        properties: "",
      },
      chemical: {
        type: "Siêu nặng, phóng xạ.",
        reactivity: "Dự đoán giống Bismuth (Bi).",
        notableReactions: "",
      },
      isotopes: {
        summary: "Không có đồng vị bền.",
        list: [
          {
            name: "²⁹⁰Mc",
            abundance: "Nhân tạo",
            role: "Chỉ dùng trong nghiên cứu (chu kỳ bán rã 0.8 giây).",
          },
        ],
      },
      compounds: [],
      applications: "Chỉ dùng trong nghiên cứu khoa học cơ bản.",
      naturalOccurrence: "Tổng hợp.",
      preparation: { industry: "Bắn phá Americium bằng Canxi." },
      safety: { toxicity: "Cực kỳ phóng xạ.", hazards: "" },
    },
    styles: {
      color: "bg-teal-700",
      border: "border-teal-900",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 116,
      symbol: "Lv",
      nameVI: "Livermori",
      nameEN: "Livermorium",
      atomicMass: 293,
      electronConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴",
      valenceElectrons: 6,
      en: null,
      ox: "N/A",
    },
    details: {
      origin: "Theo tên Phòng thí nghiệm Quốc gia Lawrence Livermore, Mỹ.",
      position: {
        group: "VIA",
        period: 7,
        block: "p",
        type: "Phi kim (Tổng hợp)",
      },
      physical: {
        state: "Rắn (dự đoán)",
        color: "Xám bạc (dự đoán)",
        density: "13.0 g/cm³ (dự đoán)",
        meltingPoint: "360°C (dự đoán)",
        properties: "",
      },
      chemical: {
        type: "Siêu nặng, phóng xạ.",
        reactivity: "Dự đoán giống Polonium (Po).",
        notableReactions: "",
      },
      isotopes: {
        summary: "Không có đồng vị bền.",
        list: [
          {
            name: "²⁹³Lv",
            abundance: "Nhân tạo",
            role: "Chỉ dùng trong nghiên cứu (chu kỳ bán rã 0.05 giây).",
          },
        ],
      },
      compounds: [],
      applications: "Chỉ dùng trong nghiên cứu khoa học cơ bản.",
      naturalOccurrence: "Tổng hợp.",
      preparation: { industry: "Bắn phá Curium bằng Canxi." },
      safety: { toxicity: "Cực kỳ phóng xạ.", hazards: "" },
    },
    styles: {
      color: "bg-teal-700",
      border: "border-teal-900",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 117,
      symbol: "Ts",
      nameVI: "Tennessine",
      nameEN: "Tennessine",
      atomicMass: 294,
      electronConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵",
      valenceElectrons: 7,
      en: null,
      ox: "N/A",
    },
    details: {
      origin: "Theo tên bang Tennessee, Mỹ.",
      position: {
        group: "VIIA",
        period: 7,
        block: "p",
        type: "Phi kim (Halogen/Tổng hợp)",
      },
      physical: {
        state: "Rắn (dự đoán)",
        color: "Đen (dự đoán)",
        density: "7.2 g/cm³ (dự đoán)",
        meltingPoint: "350°C (dự đoán)",
        properties: "Nguyên tố halogen nặng nhất. Dự đoán có tính kim loại.",
      },
      chemical: {
        type: "Siêu nặng, phóng xạ.",
        reactivity: "Dự đoán giống Astatine (At).",
        notableReactions: "",
      },
      isotopes: {
        summary: "Không có đồng vị bền.",
        list: [
          {
            name: "²⁹⁴Ts",
            abundance: "Nhân tạo",
            role: "Chỉ dùng trong nghiên cứu (chu kỳ bán rã 0.05 giây).",
          },
        ],
      },
      compounds: [],
      applications: "Chỉ dùng trong nghiên cứu khoa học cơ bản.",
      naturalOccurrence: "Tổng hợp.",
      preparation: { industry: "Bắn phá Berkelium bằng Canxi." },
      safety: { toxicity: "Cực kỳ phóng xạ.", hazards: "" },
    },
    styles: {
      color: "bg-teal-700",
      border: "border-teal-900",
      text: "text-white",
    },
  },
  {
    basic: {
      number: 118,
      symbol: "Og",
      nameVI: "Oganesson",
      nameEN: "Oganesson",
      atomicMass: 294,
      electronConfig: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶",
      valenceElectrons: 8,
    },
    details: {
      origin: "Theo tên nhà vật lý Yuri Oganessian.",
      position: {
        group: "VIIIA",
        period: 7,
        block: "p",
        type: "Khí hiếm (Tổng hợp)",
        en: null,
        ox: "N/A",
      },
      physical: {
        state: "Khí/Lỏng (dự đoán)",
        color: "Không màu (dự đoán)",
        density: "Dự đoán lỏng ở nhiệt độ phòng",
        meltingPoint: "Dự đoán cao hơn Rn",
        properties:
          "Nguyên tố nặng nhất trong Bảng tuần hoàn. Dự đoán không phải là khí hiếm điển hình (do hiệu ứng tương đối tính).",
      },
      chemical: {
        type: "Siêu nặng, phóng xạ.",
        reactivity: "Dự đoán có thể phản ứng hơn các khí hiếm khác.",
        notableReactions: "",
      },
      isotopes: {
        summary: "Không có đồng vị bền.",
        list: [
          {
            name: "²⁹⁴Og",
            abundance: "Nhân tạo",
            role: "Chỉ dùng trong nghiên cứu (chu kỳ bán rã 0.00089 giây).",
          },
        ],
      },
      compounds: [],
      applications: "Chỉ dùng trong nghiên cứu khoa học cơ bản.",
      naturalOccurrence: "Tổng hợp.",
      preparation: { industry: "Bắn phá Californium bằng Canxi." },
      safety: { toxicity: "Cực kỳ phóng xạ.", hazards: "" },
    },
    styles: {
      color: "bg-teal-700",
      border: "border-teal-900",
      text: "text-white",
    },
  },
];
