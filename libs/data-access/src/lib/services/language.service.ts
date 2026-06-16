import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';

export type AppLanguage = 'en' | 'vi' | 'zh-TW';

const translations: Record<AppLanguage, Record<string, string>> = {
  en: {
    account: 'Account',
    aiProcessingError: 'AI Processing Error',
    backToWorkbench: 'Back to workbench',
    baselineBom: 'Baseline BOM ID / Pattern Reference',
    cancel: 'Cancel',
    chatbot: 'Chatbot',
    cost: 'Cost',
    costProjection: 'Cost Projection',
    currentFormula: 'Current Formula',
    customerSpecification: 'Customer Specification Details',
    darkMode: 'Dark Mode',
    delete: 'Delete',
    deleteConfirm: 'Delete this saved formula?',
    drinkName: 'Drink Name',
    edit: 'Edit',
    editingInTargetMatrix: 'Editing in target matrix',
    emptyOutput: 'Submit the target formulation parameters to begin AI ratio calibration.',
    formulaManagement: 'Formula management',
    formulaNotFound: 'Formula not found',
    generateFormula: 'Generate R&D Formula',
    generatingFormula: 'Generating Formula...',
    help: 'Help',
    ingredients: 'Ingredients',
    ingredientsMatrix: 'Ingredients Matrix (100% Mass Balance)',
    language: 'Language',
    lightMode: 'Light Mode',
    liveFormulaStream: 'Live Formula Stream',
    marketDestination: 'Market Destination',
    massPercentage: 'Mass Percentage',
    message: 'Message',
    missingFormulaMessage: 'This saved formula is not available in the current workbench session.',
    noSavedFormulas: 'No formulas saved yet.',
    operationalConstraints: 'Operational & Production Constraints',
    outputTitle: 'R&D Formulation Output',
    placeholderReady: 'This area is ready for {menu} tools.',
    productionArea: 'Production Area / Line ID',
    rawMaterialKey: 'Raw Material Key',
    regenerate: 'Regenerate',
    regeneratingFormula: 'Regenerating Formula...',
    reports: 'Reports',
    reviewGenerated: 'Review the generated material ratios before saving.',
    reviewRegenerated: 'Review the regenerated material ratios before updating.',
    savedFormula: 'Saved Formula',
    savedFormulas: 'Saved Formulas',
    save: 'Save',
    sendToOllama: 'Send to Ollama',
    sending: 'Sending...',
    settings: 'Settings',
    stabilityAlerts: 'Stability & Compliance Alerts',
    targetBrix: 'Target Brix (°Bx)',
    targetMatrix: 'Target Formulation Matrix',
    targetParameters: 'Target Parameters',
    update: 'Update',
    varianceAnalysis: 'Variance & Sensory Impact Analysis',
    workbenchSubtitle: 'Powered by Local Ollama AI Engine',
    workbenchTitle: 'Beverage Formulation & R&D Workbench',
  },
  vi: {
    account: 'Tài khoản',
    aiProcessingError: 'Lỗi xử lý AI',
    backToWorkbench: 'Quay lại trang làm việc',
    baselineBom: 'Mã BOM / Công thức tham chiếu',
    cancel: 'Hủy',
    chatbot: 'Trợ lý AI',
    cost: 'Chi phí',
    costProjection: 'Dự báo chi phí',
    currentFormula: 'Công thức hiện tại',
    customerSpecification: 'Chi tiết yêu cầu khách hàng',
    darkMode: 'Chế độ tối',
    delete: 'Xóa',
    deleteConfirm: 'Xóa công thức đã lưu này?',
    drinkName: 'Tên đồ uống',
    edit: 'Sửa',
    editingInTargetMatrix: 'Đang sửa trong ma trận mục tiêu',
    emptyOutput: 'Nhập thông số công thức mục tiêu để bắt đầu hiệu chỉnh tỷ lệ bằng AI.',
    formulaManagement: 'Quản lý công thức',
    formulaNotFound: 'Không tìm thấy công thức',
    generateFormula: 'Tạo công thức R&D',
    generatingFormula: 'Đang tạo công thức...',
    help: 'Trợ giúp',
    ingredients: 'Thành phần',
    ingredientsMatrix: 'Ma trận thành phần (cân bằng khối lượng 100%)',
    language: 'Ngôn ngữ',
    lightMode: 'Chế độ sáng',
    liveFormulaStream: 'Luồng tạo công thức trực tiếp',
    marketDestination: 'Thị trường mục tiêu',
    massPercentage: 'Phần trăm khối lượng',
    message: 'Tin nhắn',
    missingFormulaMessage: 'Công thức đã lưu này không có trong phiên làm việc hiện tại.',
    noSavedFormulas: 'Chưa có công thức đã lưu.',
    operationalConstraints: 'Ràng buộc vận hành & sản xuất',
    outputTitle: 'Kết quả công thức R&D',
    placeholderReady: 'Khu vực này đã sẵn sàng cho công cụ {menu}.',
    productionArea: 'Khu vực / dây chuyền sản xuất',
    rawMaterialKey: 'Mã nguyên liệu',
    regenerate: 'Tạo lại',
    regeneratingFormula: 'Đang tạo lại công thức...',
    reports: 'Báo cáo',
    reviewGenerated: 'Kiểm tra tỷ lệ nguyên liệu đã tạo trước khi lưu.',
    reviewRegenerated: 'Kiểm tra tỷ lệ nguyên liệu đã tạo lại trước khi cập nhật.',
    savedFormula: 'Công thức đã lưu',
    savedFormulas: 'Công thức đã lưu',
    save: 'Lưu',
    sendToOllama: 'Gửi đến Ollama',
    sending: 'Đang gửi...',
    settings: 'Cài đặt',
    stabilityAlerts: 'Cảnh báo ổn định & tuân thủ',
    targetBrix: 'Brix mục tiêu (°Bx)',
    targetMatrix: 'Ma trận công thức mục tiêu',
    targetParameters: 'Thông số mục tiêu',
    update: 'Cập nhật',
    varianceAnalysis: 'Phân tích sai lệch & cảm quan',
    workbenchSubtitle: 'Vận hành bởi AI Ollama cục bộ',
    workbenchTitle: 'Bàn làm việc R&D công thức đồ uống',
  },
  'zh-TW': {
    account: '帳戶',
    aiProcessingError: 'AI 處理錯誤',
    backToWorkbench: '返回工作台',
    baselineBom: '基準 BOM ID / 配方參考',
    cancel: '取消',
    chatbot: 'AI 聊天助理',
    cost: '成本',
    costProjection: '成本預估',
    currentFormula: '目前配方',
    customerSpecification: '客戶規格詳細資訊',
    darkMode: '深色模式',
    delete: '刪除',
    deleteConfirm: '要刪除此已儲存配方嗎？',
    drinkName: '飲品名稱',
    edit: '編輯',
    editingInTargetMatrix: '正在目標矩陣中編輯',
    emptyOutput: '提交目標配方參數後，開始 AI 比例校準。',
    formulaManagement: '配方管理',
    formulaNotFound: '找不到配方',
    generateFormula: '產生 R&D 配方',
    generatingFormula: '正在產生配方...',
    help: '說明',
    ingredients: '成分',
    ingredientsMatrix: '成分矩陣（100% 質量平衡）',
    language: '語言',
    lightMode: '淺色模式',
    liveFormulaStream: '即時配方流程',
    marketDestination: '目標市場',
    massPercentage: '質量百分比',
    message: '訊息',
    missingFormulaMessage: '目前工作台工作階段中沒有此已儲存配方。',
    noSavedFormulas: '尚無已儲存配方。',
    operationalConstraints: '營運與生產限制',
    outputTitle: 'R&D 配方輸出',
    placeholderReady: '此區域已準備好使用 {menu} 工具。',
    productionArea: '生產區域 / 產線 ID',
    rawMaterialKey: '原料代碼',
    regenerate: '重新產生',
    regeneratingFormula: '正在重新產生配方...',
    reports: '報表',
    reviewGenerated: '儲存前請先檢查已產生的原料比例。',
    reviewRegenerated: '更新前請先檢查重新產生的原料比例。',
    savedFormula: '已儲存配方',
    savedFormulas: '已儲存配方',
    save: '儲存',
    sendToOllama: '傳送至 Ollama',
    sending: '傳送中...',
    settings: '設定',
    stabilityAlerts: '穩定性與合規警示',
    targetBrix: '目標 Brix（°Bx）',
    targetMatrix: '目標配方矩陣',
    targetParameters: '目標參數',
    update: '更新',
    varianceAnalysis: '差異與感官影響分析',
    workbenchSubtitle: '由本機 Ollama AI 引擎提供支援',
    workbenchTitle: '飲品配方與 R&D 工作台',
  },
};

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly document = inject(DOCUMENT);
  private readonly storageKey = 'giavico-language';

  public readonly language = signal<AppLanguage>(this.getInitialLanguage());

  constructor() {
    this.applyLanguage(this.language());
  }

  public setLanguage(language: AppLanguage): void {
    this.language.set(language);
    try {
      this.document.defaultView?.localStorage.setItem(this.storageKey, language);
    } catch {
      // Storage can be unavailable in private/SSR-like contexts.
    }
    this.applyLanguage(language);
  }

  public translate(key: string): string {
    return translations[this.language()][key] ?? translations.en[key] ?? key;
  }

  private getInitialLanguage(): AppLanguage {
    try {
      const storedLanguage = this.document.defaultView?.localStorage.getItem(this.storageKey);

      return storedLanguage === 'vi' || storedLanguage === 'zh-TW' ? storedLanguage : 'en';
    } catch {
      return 'en';
    }
  }

  private applyLanguage(language: AppLanguage): void {
    this.document.documentElement.lang = language;
  }
}
