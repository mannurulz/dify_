const translation = {
  api: {
    success: 'موفقیت',
    actionSuccess: 'عملیات موفق',
    saved: 'ذخیره شد',
    create: 'ایجاد شد',
    remove: 'حذف شد',
  },
  operation: {
    create: 'ایجاد',
    confirm: 'تایید',
    cancel: 'لغو',
    clear: 'پاک کردن',
    save: 'ذخیره',
    saveAndEnable: 'ذخیره و فعال سازی',
    edit: 'ویرایش',
    add: 'افزودن',
    added: 'اضافه شد',
    refresh: 'شروع مجدد',
    reset: 'بازنشانی',
    search: 'جستجو',
    change: 'تغییر',
    remove: 'حذف',
    send: 'ارسال',
    copy: 'کپی',
    lineBreak: 'خط جدید',
    sure: 'مطمئن هستم',
    download: 'دانلود',
    delete: 'حذف',
    settings: 'تنظیمات',
    setup: 'راه اندازی',
    getForFree: 'دریافت رایگان',
    reload: 'بارگذاری مجدد',
    ok: 'تایید',
    log: 'گزارش',
    learnMore: 'اطلاعات بیشتر',
    params: 'پارامترها',
    duplicate: 'تکرار',
    rename: 'تغییر نام',
    audioSourceUnavailable: 'منبع صوتی در دسترس نیست',
    zoomIn: 'بزرگنمایی',
    copyImage: 'کپی تصویر',
    openInNewTab: 'باز کردن در برگه جدید',
    zoomOut: 'کوچک نمایی',
    close: 'نزدیک',
    regenerate: 'بازسازی',
    view: 'مشاهده',
    viewMore: 'بیشتر ببینید',
    saveAndRegenerate: 'ذخیره و بازسازی تکه های فرزند',
    submit: 'ارسال',
    skip: 'کشتی',
    imageCopied: 'تصویر کپی شده',
    deleteApp: 'حذف برنامه',
    copied: 'کپی',
    viewDetails: 'دیدن جزئیات',
    in: 'در',
    downloadFailed: 'دانلود ناموفق بود. لطفاً بعداً دوباره تلاش کنید.',
    more: 'بیشتر',
    format: 'قالب',
    downloadSuccess: 'دانلود کامل شد.',
    selectAll: 'انتخاب همه',
    deSelectAll: 'همه را انتخاب نکنید',
  },
  errorMsg: {
    fieldRequired: '{{field}} الزامی است',
    urlError: 'آدرس باید با http:// یا https:// شروع شود',
  },
  placeholder: {
    input: 'لطفا وارد کنید',
    select: 'لطفا انتخاب کنید',
  },
  voice: {
    language: {
      zhHans: 'چینی',
      zhHant: 'چینی سنتی',
      enUS: 'انگلیسی',
      deDE: 'آلمانی',
      frFR: 'فرانسوی',
      esES: 'اسپانیایی',
      itIT: 'ایتالیایی',
      thTH: 'تایلندی',
      idID: 'اندونزیایی',
      jaJP: 'ژاپنی',
      koKR: 'کره‌ای',
      ptBR: 'پرتغالی',
      ruRU: 'روسی',
      ukUA: 'اوکراینی',
      viVN: 'ویتنامی',
      plPL: 'لهستانی',
      roRO: 'رومانیایی',
      hiIN: 'هندی',
      trTR: 'ترکی',
      faIR: 'فارسی',
    },
  },
  unit: {
    char: 'کاراکتر',
  },
  actionMsg: {
    noModification: 'در حال حاضر تغییری وجود ندارد.',
    modifiedSuccessfully: 'با موفقیت تغییر یافت',
    modifiedUnsuccessfully: 'تغییر ناموفق بود',
    copySuccessfully: 'با موفقیت کپی شد',
    paySucceeded: 'پرداخت موفق',
    payCancelled: 'پرداخت لغو شد',
    generatedSuccessfully: 'با موفقیت تولید شد',
    generatedUnsuccessfully: 'تولید ناموفق بود',
  },
  model: {
    params: {
      temperature: 'دما',
      temperatureTip:
        'تصادفی بودن را کنترل می‌کند: کاهش آن منجر به تکمیل‌های کمتر تصادفی می‌شود. با نزدیک شدن دما به صفر، مدل قطعی و تکراری می‌شود.',
      top_p: 'بالاترین P',
      top_pTip:
        'تنوع را از طریق نمونه‌گیری هسته کنترل می‌کند: 0.5 به این معنی است که نیمی از همه گزینه‌های وزن‌دار احتمالی در نظر گرفته می‌شوند.',
      presence_penalty: 'جریمه حضور',
      presence_penaltyTip:
        'چقدر توکن‌های جدید را بر اساس اینکه آیا در متن تاکنون ظاهر شده‌اند جریمه کنیم.\nاحتمال مدل برای صحبت در مورد موضوعات جدید را افزایش می‌دهد.',
      frequency_penalty: 'جریمه تکرار',
      frequency_penaltyTip:
        'چقدر توکن‌های جدید را بر اساس فراوانی موجود آنها در متن تاکنون جریمه کنیم.\nاحتمال تکرار دقیق همان خط توسط مدل را کاهش می‌دهد.',
      max_tokens: 'حداکثر توکن',
      max_tokensTip:
        'برای محدود کردن حداکثر طول پاسخ، در توکن‌ها استفاده می‌شود. \nمقادیر بزرگتر ممکن است فضای باقیمانده برای کلمات راهنما، گزارش‌های چت و دانش را محدود کند. \nتوصیه می‌شود آن را کمتر از دو سوم تنظیم کنید\ngpt-4-1106-preview، gpt-4-vision-preview حداکثر توکن (ورودی 128k خروجی 4k)',
      maxTokenSettingTip: 'تنظیم حداکثر توکن شما بالاست، که ممکن است فضا را برای راهنماها، پرس و جوها و داده‌ها محدود کند. در نظر بگیرید آن را زیر 2/3 تنظیم کنید.',
      setToCurrentModelMaxTokenTip: 'حداکثر توکن به 80٪ حداکثر توکن مدل فعلی {{maxToken}} به‌روزرسانی شد.',
      stop_sequences: 'توالی‌های توقف',
      stop_sequencesTip: 'حداکثر چهار توالی که API تولید توکن‌های بیشتر را متوقف می‌کند. متن برگردانده شده شامل توالی توقف نخواهد بود.',
      stop_sequencesPlaceholder: 'توالی را وارد کنید و Tab را فشار دهید',
    },
    tone: {
      Creative: 'خلاقانه',
      Balanced: 'متعادل',
      Precise: 'دقیق',
      Custom: 'سفارشی',
    },
    addMoreModel: 'برای افزودن مدل‌های بیشتر به تنظیمات بروید',
    settingsLink: 'تنظیمات ارائه دهنده مدل',
    capabilities: 'قابلیت های چند وجهی',
  },
  menus: {
    status: 'بتا',
    explore: 'کاوش',
    apps: 'استودیو',
    plugins: 'افزونه‌ها',
    pluginsTips: 'افزونه‌های شخص ثالث را ادغام کنید یا افزونه‌های هوش مصنوعی سازگار با ChatGPT ایجاد کنید.',
    datasets: 'دانش',
    datasetsTips: 'به زودی: داده‌های متنی خود را وارد کنید یا از طریق Webhook داده‌ها را در زمان واقعی برای بهبود زمینه LLM بنویسید.',
    newApp: 'برنامه جدید',
    newDataset: 'ایجاد دانش',
    tools: 'ابزارها',
    exploreMarketplace: 'بازار را کاوش کنید',
    appDetail: 'جزئیات برنامه',
    account: 'حساب',
  },
  userProfile: {
    settings: 'تنظیمات',
    emailSupport: 'پشتیبانی ایمیل',
    workspace: 'فضای کاری',
    createWorkspace: 'ایجاد فضای کاری',
    helpCenter: 'راهنما',
    communityFeedback: 'بازخورد',
    roadmap: 'نقشه راه',
    community: 'انجمن',
    about: 'درباره',
    logout: 'خروج',
    github: 'گیت‌هاب',
    compliance: 'انطباق',
    support: 'پشتیبانی',
  },
  settings: {
    accountGroup: 'حساب کاربری',
    workplaceGroup: 'فضای کاری',
    account: 'حساب من',
    members: 'اعضا',
    billing: 'صورتحساب',
    integrations: 'ادغام‌ها',
    language: 'زبان',
    provider: 'ارائه دهنده مدل',
    dataSource: 'منبع داده',
    plugin: 'افزونه‌ها',
    apiBasedExtension: 'توسعه مبتنی بر API',
    generalGroup: 'عمومی',
  },
  account: {
    avatar: 'آواتار',
    name: 'نام',
    email: 'ایمیل',
    password: 'رمز عبور',
    passwordTip: 'اگر نمی‌خواهید از کدهای ورود موقت استفاده کنید، می‌توانید یک رمز عبور دائمی تنظیم کنید',
    setPassword: 'تنظیم رمز عبور',
    resetPassword: 'بازنشانی رمز عبور',
    currentPassword: 'رمز عبور فعلی',
    newPassword: 'رمز عبور جدید',
    confirmPassword: 'تأیید رمز عبور',
    notEqual: 'دو رمز عبور متفاوت هستند.',
    langGeniusAccount: 'حساب Dify',
    langGeniusAccountTip: 'حساب Dify شما و داده‌های کاربری مرتبط.',
    editName: 'ویرایش نام',
    showAppLength: 'نمایش {{length}} برنامه',
    delete: 'حذف حساب کاربری',
    deleteTip: 'حذف حساب کاربری شما تمام داده‌های شما را به طور دائمی پاک می‌کند و قابل بازیابی نیست.',
    deleteConfirmTip: 'برای تأیید، لطفاً موارد زیر را از ایمیل ثبت‌نام شده خود به این آدرس ارسال کنید ',
    account: 'حساب',
    myAccount: 'حساب من',
    studio: 'استودیو Dify',
    feedbackTitle: 'بازخورد',
    verificationPlaceholder: 'کد 6 رقمی را جایگذاری کنید',
    deletePlaceholder: 'لطفا ایمیل خود را وارد کنید',
    permanentlyDeleteButton: 'حذف دائمی حساب',
    verificationLabel: 'کد تأیید',
    feedbackPlaceholder: 'اختیاری',
    sendVerificationButton: 'ارسال کد تأیید',
    deletePrivacyLink: 'سیاست حفظ حریم خصوصی.',
    deleteLabel: 'برای تایید، لطفا ایمیل خود را در زیر تایپ کنید',
    deleteSuccessTip: 'حساب شما برای پایان دادن به حذف به زمان نیاز دارد. وقتی همه چیز تمام شد به شما ایمیل خواهیم زد.',
    deletePrivacyLinkTip: 'برای کسب اطلاعات بیشتر در مورد نحوه مدیریت داده های شما، لطفا به ما مراجعه کنید',
    feedbackLabel: 'به ما بگویید چرا حساب خود را حذف کرده اید؟',
    editWorkspaceInfo: 'ویرایش اطلاعات فضای کار',
    workspaceName: 'نام فضای کاری',
    workspaceIcon: 'آیکون محیط کار',
    changeEmail: {
      changeTo: 'تغییر به {{email}}',
      resendTip: 'کدی دریافت نکردید؟',
      codeLabel: 'کد تأیید',
      resend: 'دوباره ارسال کنید',
      emailLabel: 'ایمیل جدید',
      title: 'تغییر ایمیل',
      verifyNew: 'ایمیل جدید خود را تأیید کنید',
      sendVerifyCode: 'کد تأیید را ارسال کنید',
      newEmail: 'یک آدرس ایمیل جدید راه‌اندازی کنید',
      emailPlaceholder: 'یک ایمیل جدید وارد کنید',
      codePlaceholder: 'کد ۶ رقمی را وارد کنید',
      existingEmail: 'کاربری با این ایمیل از قبل وجود دارد.',
      content2: 'ایمیل فعلی شما <email>{{email}}</email> است. کد تأیید به این آدرس ایمیل ارسال شده است.',
      resendCount: 'دوباره ارسال کنید در {{count}} ثانیه',
      continue: 'ادامه دهید',
      verifyEmail: 'ایمیل فعلی خود را تأیید کنید',
      content4: 'ما یک کد تأیید موقت برای شما به <email>{{email}}</email> ارسال کردیم.',
      content1: 'اگر ادامه دهید، ما یک کد تأیید به <email>{{email}}</email> برای بازگشایی مجدد ارسال خواهیم کرد.',
      content3: 'یک ایمیل جدید وارد کنید و ما یک کد تأیید برای شما ارسال خواهیم کرد.',
      authTip: 'زمانی که ایمیل شما تغییر کند، حساب‌های گوگل یا گیت‌هاب مرتبط با ایمیل قدیمی شما دیگر قادر به ورود به این حساب نخواهند بود.',
    },
  },
  members: {
    team: 'تیم',
    invite: 'افزودن',
    name: 'نام',
    lastActive: 'آخرین فعالیت',
    role: 'نقش‌ها',
    pending: 'در انتظار...',
    owner: 'مالک',
    admin: 'مدیر',
    adminTip: 'می‌تواند برنامه‌ها را بسازد و تنظیمات تیم را مدیریت کند',
    normal: 'عادی',
    normalTip: 'فقط می‌تواند از برنامه‌ها استفاده کند، نمی‌تواند برنامه بسازد',
    builder: 'سازنده',
    builderTip: 'می‌تواند برنامه‌های خود را بسازد و ویرایش کند',
    editor: 'ویرایشگر',
    editorTip: 'می‌تواند برنامه‌ها را بسازد و ویرایش کند',
    datasetOperator: 'مدیر دانش',
    datasetOperatorTip: 'فقط می‌تواند پایگاه دانش را مدیریت کند',
    inviteTeamMember: 'افزودن عضو تیم',
    inviteTeamMemberTip: 'آنها می‌توانند پس از ورود به سیستم، مستقیماً به داده‌های تیم شما دسترسی پیدا کنند.',
    emailNotSetup: 'سرور ایمیل راه‌اندازی نشده است، بنابراین ایمیل‌های دعوت نمی‌توانند ارسال شوند. لطفاً کاربران را از لینک دعوت که پس از دعوت صادر خواهد شد مطلع کنید。',
    email: 'ایمیل',
    emailInvalid: 'فرمت ایمیل نامعتبر است',
    emailPlaceholder: 'لطفاً ایمیل‌ها را وارد کنید',
    sendInvite: 'ارسال دعوت',
    invitedAsRole: 'به عنوان کاربر {{role}} دعوت شده',
    invitationSent: 'دعوت‌نامه ارسال شد',
    invitationSentTip: 'دعوت‌نامه ارسال شد و آنها می‌توانند وارد Dify شوند تا به داده‌های تیم شما دسترسی پیدا کنند.',
    invitationLink: 'لینک دعوت',
    failedInvitationEmails: 'کاربران زیر با موفقیت دعوت نشدند',
    ok: 'تایید',
    removeFromTeam: 'حذف از تیم',
    removeFromTeamTip: 'دسترسی تیم را حذف می‌کند',
    setAdmin: 'تنظیم به عنوان مدیر',
    setMember: 'تنظیم به عنوان عضو عادی',
    setBuilder: 'تنظیم به عنوان سازنده',
    setEditor: 'تنظیم به عنوان ویرایشگر',
    disInvite: 'لغو دعوت',
    deleteMember: 'حذف عضو',
    you: '(شما)',
    transferModal: {
      resendTip: 'کدی دریافت نکردید؟',
      resend: 'دوباره ارسال کنید',
      continue: 'ادامه دهید',
      codeLabel: 'کد تأیید',
      sendVerifyCode: 'کد تأیید را ارسال کنید',
      title: 'انتقال مالکیت فضای کاری',
      verifyContent: 'ایمیل فعلی شما <email>{{email}}</email> است.',
      transfer: 'انتقال مالکیت فضای کاری',
      warning: 'شما در حال انتقال مالکیت "{{workspace}}" هستید. این بلافاصله اجرایی می‌شود و قابل بازگشت نیست.',
      resendCount: 'دوباره ارسال کنید در {{count}} ثانیه',
      warningTip: 'شما به یک عضو مدیر تبدیل خواهید شد و مالک جدید کنترل کامل خواهد داشت.',
      transferLabel: 'مالکیت فضای کار را به منتقل کنید',
      verifyEmail: 'ایمیل فعلی خود را تأیید کنید',
      sendTip: 'اگر ادامه دهید، ما یک کد تأیید به <email>{{email}}</email> برای بازگشایی مجدد ارسال خواهیم کرد.',
      codePlaceholder: 'کد ۶ رقمی را وارد کنید',
      transferPlaceholder: 'یک عضو از فضای کاری را انتخاب کنید…',
      verifyContent2: 'ما یک کد تأیید موقت به این ایمیل برای تأیید مجدد ارسال خواهیم کرد.',
    },
    transferOwnership: 'انتقال مالکیت',
  },
  integrations: {
    connected: 'متصل شده',
    google: 'گوگل',
    googleAccount: 'ورود با حساب گوگل',
    github: 'گیت‌هاب',
    githubAccount: 'ورود با حساب گیت‌هاب',
    connect: 'اتصال',
  },
  language: {
    displayLanguage: 'زبان نمایش',
    timezone: 'منطقه زمانی',
  },
  provider: {
    apiKey: 'کلید API',
    enterYourKey: 'کلید API خود را اینجا وارد کنید',
    invalidKey: 'کلید API OpenAI نامعتبر است',
    validatedError: 'اعتبارسنجی ناموفق بود: ',
    validating: 'در حال اعتبارسنجی کلید...',
    saveFailed: 'ذخیره کلید API ناموفق بود',
    apiKeyExceedBill: 'این کلید API سهمیه موجود ندارد، لطفاً بخوانید',
    addKey: 'افزودن کلید',
    comingSoon: 'به زودی',
    editKey: 'ویرایش',
    invalidApiKey: 'کلید API نامعتبر',
    azure: {
      apiBase: 'پایه API',
      apiBasePlaceholder: 'آدرس پایه API نقطه پایانی Azure OpenAI شما.',
      apiKey: 'کلید API',
      apiKeyPlaceholder: 'کلید API خود را اینجا وارد کنید',
      helpTip: 'آشنایی با سرویس Azure OpenAI',
    },
    openaiHosted: {
      openaiHosted: 'OpenAI میزبانی شده',
      onTrial: 'در حال آزمایش',
      exhausted: 'سهمیه تمام شده',
      desc: 'سرویس میزبانی OpenAI ارائه شده توسط Dify به شما اجازه می‌دهد از مدل‌هایی مانند GPT-3.5 استفاده کنید. قبل از اتمام سهمیه آزمایشی خود، باید سایر ارائه‌دهندگان مدل را تنظیم کنید.',
      callTimes: 'تعداد فراخوانی',
      usedUp: 'سهمیه آزمایشی تمام شده است. ارائه‌دهنده مدل خود را اضافه کنید.',
      useYourModel: 'در حال حاضر از ارائه‌دهنده مدل خود استفاده می‌کنید.',
      close: 'بستن',
    },
    anthropicHosted: {
      anthropicHosted: 'Anthropic Claude',
      onTrial: 'در حال آزمایش',
      exhausted: 'سهمیه تمام شده',
      desc: 'مدل قدرتمند که در طیف گسترده‌ای از وظایف از گفتگوی پیشرفته و تولید محتوای خلاقانه تا دستورالعمل‌های دقیق عالی عمل می‌کند.',
      callTimes: 'تعداد فراخوانی',
      usedUp: 'سهمیه آزمایشی تمام شده است. ارائه‌دهنده مدل خود را اضافه کنید.',
      useYourModel: 'در حال حاضر از ارائه‌دهنده مدل خود استفاده می‌کنید.',
      close: 'بستن',
      trialQuotaTip: 'سهمیه آزمایشی Anthropic شما در تاریخ 2025/03/11 منقضی می شود و پس از آن دیگر در دسترس نخواهد بود. لطفا به موقع از آن استفاده کنید.',
    },
    anthropic: {
      using: 'قابلیت تعبیه از این استفاده می‌کند',
      enableTip: 'برای فعال‌سازی مدل Anthropic، ابتدا باید به OpenAI یا سرویس Azure OpenAI متصل شوید.',
      notEnabled: 'فعال نشده',
      keyFrom: 'کلید API خود را از Anthropic دریافت کنید',
    },
    encrypted: {
      front: 'کلید API شما با استفاده از فناوری',
      back: ' رمزگذاری و ذخیره خواهد شد.',
    },
  },
  modelProvider: {
    notConfigured: 'مدل سیستم هنوز به طور کامل پیکربندی نشده است و برخی از عملکردها ممکن است در دسترس نباشند.',
    systemModelSettings: 'تنظیمات مدل سیستم',
    systemModelSettingsLink: 'چرا تنظیم مدل سیستم ضروری است؟',
    selectModel: 'مدل خود را انتخاب کنید',
    setupModelFirst: 'لطفاً ابتدا مدل خود را تنظیم کنید',
    systemReasoningModel: {
      key: 'مدل استدلال سیستم',
      tip: 'مدل استنتاج پیش‌فرض را برای ایجاد برنامه‌ها تنظیم کنید. ویژگی‌هایی مانند تولید نام گفتگو و پیشنهاد سوال بعدی نیز از مدل استنتاج پیش‌فرض استفاده خواهند کرد.',
    },
    embeddingModel: {
      key: 'مدل تعبیه',
      tip: 'مدل پیش‌فرض را برای پردازش تعبیه اسناد دانش تنظیم کنید. هر دو بازیابی و وارد کردن دانش از این مدل تعبیه برای پردازش برداری استفاده می‌کنند. تغییر باعث ناسازگاری بُعد برداری بین دانش وارد شده و سوال می‌شود که منجر به شکست بازیابی می‌شود. برای جلوگیری از شکست بازیابی، لطفاً این مدل را به دلخواه تغییر ندهید.',
      required: 'مدل تعبیه الزامی است',
    },
    speechToTextModel: {
      key: 'مدل تبدیل گفتار به متن',
      tip: 'مدل پیش‌فرض را برای ورودی گفتار به متن در مکالمه تنظیم کنید.',
    },
    ttsModel: {
      key: 'مدل تبدیل متن به گفتار',
      tip: 'مدل پیش‌فرض را برای ورودی متن به گفتار در مکالمه تنظیم کنید.',
    },
    rerankModel: {
      key: 'مدل رتبه‌بندی مجدد',
      tip: 'مدل رتبه‌بندی مجدد، لیست اسناد کاندید را بر اساس تطابق معنایی با پرسش کاربر مرتب می‌کند و نتایج رتبه‌بندی معنایی را بهبود می‌بخشد',
    },
    apiKey: 'کلید API',
    quota: 'سهمیه',
    searchModel: 'جستجوی مدل',
    noModelFound: 'هیچ مدلی برای {{model}} یافت نشد',
    models: 'مدل‌ها',
    showMoreModelProvider: 'نمایش ارائه‌دهندگان مدل بیشتر',
    selector: {
      tip: 'این مدل حذف شده است. لطفاً یک مدل اضافه کنید یا مدل دیگری را انتخاب کنید.',
      emptyTip: 'هیچ مدل موجودی وجود ندارد',
      emptySetting: 'لطفاً به تنظیمات بروید تا پیکربندی کنید',
      rerankTip: 'لطفاً مدل رتبه‌بندی مجدد را تنظیم کنید',
    },
    card: {
      quota: 'سهمیه',
      onTrial: 'در حال آزمایش',
      paid: 'پرداخت شده',
      quotaExhausted: 'سهمیه تمام شده',
      callTimes: 'تعداد فراخوانی',
      tokens: 'توکن‌ها',
      buyQuota: 'خرید سهمیه',
      priorityUse: 'استفاده با اولویت',
      removeKey: 'حذف کلید API',
      tip: 'اولویت به سهمیه پرداخت شده داده می‌شود. سهمیه آزمایشی پس از اتمام سهمیه پرداخت شده استفاده خواهد شد.',
    },
    item: {
      deleteDesc: '{{modelName}} به عنوان مدل‌های استدلال سیستم استفاده می‌شوند. برخی از عملکردها پس از حذف در دسترس نخواهند بود. لطفاً تأیید کنید.',
      freeQuota: 'سهمیه رایگان',
    },
    addApiKey: 'کلید API خود را اضافه کنید',
    invalidApiKey: 'کلید API نامعتبر',
    encrypted: {
      front: 'کلید API شما با استفاده از فناوری',
      back: ' رمزگذاری و ذخیره خواهد شد.',
    },
    freeQuota: {
      howToEarn: 'چگونه کسب کنیم',
    },
    addMoreModelProvider: 'افزودن ارائه‌دهنده مدل بیشتر',
    addModel: 'افزودن مدل',
    modelsNum: '{{num}} مدل',
    showModels: 'نمایش مدل‌ها',
    showModelsNum: 'نمایش {{num}} مدل',
    collapse: 'جمع کردن',
    config: 'پیکربندی',
    modelAndParameters: 'مدل و پارامترها',
    model: 'مدل',
    featureSupported: '{{feature}} پشتیبانی می‌شود',
    callTimes: 'تعداد فراخوانی',
    credits: 'اعتبار پیام',
    buyQuota: 'خرید سهمیه',
    getFreeTokens: 'دریافت توکن‌های رایگان',
    priorityUsing: 'استفاده با اولویت',
    deprecated: 'منسوخ شده',
    confirmDelete: 'تأیید حذف؟',
    quotaTip: 'توکن‌های رایگان باقی‌مانده در دسترس',
    loadPresets: 'بارگیری تنظیمات از پیش تعیین شده',
    parameters: 'پارامترها',
    loadBalancing: 'تعادل بار',
    loadBalancingDescription: 'کاهش فشار با چندین مجموعه اعتبارنامه.',
    loadBalancingHeadline: 'تعادل بار',
    configLoadBalancing: 'پیکربندی تعادل بار',
    modelHasBeenDeprecated: 'این مدل منسوخ شده است',
    providerManaged: 'مدیریت شده توسط ارائه‌دهنده',
    providerManagedDescription: 'استفاده از مجموعه واحد اعتبارنامه ارائه شده توسط ارائه‌دهنده مدل.',
    defaultConfig: 'پیکربندی پیش‌فرض',
    apiKeyStatusNormal: 'وضعیت کلید API عادی است',
    apiKeyRateLimit: 'محدودیت نرخ به دست آمد، پس از {{seconds}} ثانیه در دسترس خواهد بود',
    addConfig: 'افزودن پیکربندی',
    editConfig: 'ویرایش پیکربندی',
    loadBalancingLeastKeyWarning: 'برای فعال کردن تعادل بار، حداقل 2 کلید باید فعال باشند.',
    loadBalancingInfo: 'به طور پیش‌فرض، تعادل بار از استراتژی Round-robin استفاده می‌کند. اگر محدودیت نرخ فعال شود، یک دوره خنک شدن 1 دقیقه‌ای اعمال خواهد شد.',
    upgradeForLoadBalancing: 'برای فعال کردن تعادل بار، طرح خود را ارتقا دهید.',
    emptyProviderTitle: 'ارائه دهنده مدل راه اندازی نشده است',
    toBeConfigured: 'پیکربندی شود',
    configureTip: 'api-key را راه اندازی کنید یا مدل را برای استفاده اضافه کنید',
    installProvider: 'نصب ارائه دهندگان مدل',
    discoverMore: 'اطلاعات بیشتر در',
    emptyProviderTip: 'لطفا ابتدا یک ارائه دهنده مدل نصب کنید.',
  },
  dataSource: {
    add: 'افزودن منبع داده',
    connect: 'اتصال',
    configure: 'پیکربندی',
    notion: {
      title: 'نوشن',
      description: 'استفاده از نوشن به عنوان منبع داده برای دانش.',
      connectedWorkspace: 'فضای کاری متصل',
      addWorkspace: 'افزودن فضای کاری',
      connected: 'متصل شده',
      disconnected: 'قطع شده',
      changeAuthorizedPages: 'تغییر صفحات مجاز',
      pagesAuthorized: 'صفحات مجاز',
      sync: 'همگام‌سازی',
      remove: 'حذف',
      selector: {
        pageSelected: 'صفحات انتخاب شده',
        searchPages: 'جستجوی صفحات...',
        noSearchResult: 'نتیجه جستجویی یافت نشد',
        addPages: 'افزودن صفحات',
        preview: 'پیش‌نمایش',
      },
      integratedAlert: 'نوشته به طور داخلی از طریق اعتبارنامه یکپارچه شده است، نیازی به دوباره مجاز کردن نیست.',
    },
    website: {
      title: 'وب‌سایت',
      description: 'وارد کردن محتوا از وب‌سایت‌ها با استفاده از خزنده وب.',
      with: 'با',
      configuredCrawlers: 'خزنده‌های پیکربندی شده',
      active: 'فعال',
      inactive: 'غیرفعال',
    },
  },
  plugin: {
    serpapi: {
      apiKey: 'کلید API',
      apiKeyPlaceholder: 'کلید API خود را وارد کنید',
      keyFrom: 'کلید SerpAPI خود را از صفحه حساب SerpAPI دریافت کنید',
    },
  },
  apiBasedExtension: {
    title: 'افزونه‌های مبتنی بر API مدیریت متمرکز API را فراهم می‌کنند و پیکربندی را برای استفاده آسان در برنامه‌های Dify ساده می‌کنند.',
    link: 'نحوه توسعه افزونه API خود را بیاموزید.',
    add: 'افزودن افزونه API',
    selector: {
      title: 'افزونه API',
      placeholder: 'لطفاً افزونه API را انتخاب کنید',
      manage: 'مدیریت افزونه API',
    },
    modal: {
      title: 'افزودن افزونه API',
      editTitle: 'ویرایش افزونه API',
      name: {
        title: 'نام',
        placeholder: 'لطفاً نام را وارد کنید',
      },
      apiEndpoint: {
        title: 'نقطه پایانی API',
        placeholder: 'لطفاً نقطه پایانی API را وارد کنید',
      },
      apiKey: {
        title: 'کلید API',
        placeholder: 'لطفاً کلید API را وارد کنید',
        lengthError: 'طول کلید API نمی‌تواند کمتر از ۵ کاراکتر باشد',
      },
    },
    type: 'نوع',
  },
  about: {
    changeLog: 'تغییرات',
    updateNow: 'به‌روزرسانی اکنون',
    nowAvailable: 'Dify {{version}} اکنون در دسترس است.',
    latestAvailable: 'Dify {{version}} آخرین نسخه در دسترس است.',
  },
  appMenus: {
    overview: 'نظارت',
    promptEng: 'هماهنگ‌سازی',
    apiAccess: 'دسترسی API',
    logAndAnn: 'گزارش‌ها و اعلانات',
    logs: 'گزارش‌ها',
  },
  environment: {
    testing: 'آزمایشی',
    development: 'توسعه',
  },
  appModes: {
    completionApp: 'تولیدکننده متن',
    chatApp: 'برنامه چت',
  },
  datasetMenus: {
    documents: 'اسناد',
    hitTesting: 'آزمایش بازیابی',
    settings: 'تنظیمات',
    emptyTip: 'دانش مرتبط نشده است، لطفاً به برنامه یا افزونه بروید تا ارتباط را کامل کنید.',
    viewDoc: 'مشاهده مستندات',
    relatedApp: 'برنامه‌های مرتبط',
    noRelatedApp: 'هیچ برنامه پیوندی وجود ندارد',
  },
  voiceInput: {
    speaking: 'اکنون صحبت کنید...',
    converting: 'در حال تبدیل به متن...',
    notAllow: 'میکروفون مجاز نیست',
  },
  modelName: {
    'gpt-3.5-turbo': 'جی‌پی‌تی-۳.۵-توربو',
    'gpt-3.5-turbo-16k': 'جی‌پی‌تی-۳.۵-توربو-۱۶کا',
    'gpt-4': 'جی‌پی‌تی-۴',
    'gpt-4-32k': 'جی‌پی‌تی-۴-۳۲کا',
    'text-davinci-003': 'متن-داوینچی-۰۰۳',
    'text-embedding-ada-002': 'متن-تعبیه-آدا-۰۰۲',
    'whisper-1': 'ویسپر-۱',
    'claude-instant-1': 'کلاود-فوری',
    'claude-2': 'کلاود-۲',
  },
  chat: {
    renameConversation: 'تغییر نام مکالمه',
    conversationName: 'نام مکالمه',
    conversationNamePlaceholder: 'لطفاً نام مکالمه را وارد کنید',
    conversationNameCanNotEmpty: 'نام مکالمه الزامی است',
    citation: {
      title: 'استنادها',
      linkToDataset: 'پیوند به دانش',
      characters: 'کاراکترها:',
      hitCount: 'تعداد بازیابی:',
      vectorHash: 'هش بردار:',
      hitScore: 'امتیاز بازیابی:',
    },
    inputPlaceholder: 'با ربات صحبت کنید',
    thought: 'فکر',
    thinking: 'تفکر...',
    resend: 'دوباره ارسال کنید',
  },
  promptEditor: {
    placeholder: 'دستور خود را اینجا بنویسید، «{» را وارد کنید تا یک متغیر درج کنید، «/» را وارد کنید تا یک بلوک محتوای دستور درج کنید',
    context: {
      item: {
        title: 'زمینه',
        desc: 'درج الگوی زمینه',
      },
      modal: {
        title: '{{num}} دانش در زمینه',
        add: 'افزودن زمینه',
        footer: 'شما می‌توانید زمینه‌ها را در بخش زمینه در زیر مدیریت کنید.',
      },
    },
    history: {
      item: {
        title: 'تاریخچه مکالمه',
        desc: 'درج الگوی پیام تاریخی',
      },
      modal: {
        title: 'مثال',
        user: 'سلام',
        assistant: 'سلام! چطور می‌توانم امروز به شما کمک کنم؟',
        edit: 'ویرایش نام‌های نقش مکالمه',
      },
    },
    variable: {
      item: {
        title: 'متغیرها و ابزارهای خارجی',
        desc: 'درج متغیرها و ابزارهای خارجی',
      },
      outputToolDisabledItem: {
        title: 'متغیرها',
        desc: 'درج متغیرها',
      },
      modal: {
        add: 'متغیر جدید',
        addTool: 'ابزار جدید',
      },
    },
    query: {
      item: {
        title: 'پرس‌وجو',
        desc: 'درج الگوی پرس‌وجوی کاربر',
      },
    },
    existed: 'در حال حاضر در دستور وجود دارد',
  },
  imageUploader: {
    uploadFromComputer: 'بارگذاری از کامپیوتر',
    uploadFromComputerReadError: 'خواندن تصویر ناموفق بود، لطفاً دوباره تلاش کنید.',
    uploadFromComputerUploadError: 'بارگذاری تصویر ناموفق بود، لطفاً دوباره بارگذاری کنید.',
    uploadFromComputerLimit: 'بارگذاری تصاویر نمی‌تواند از {{size}} مگابایت بیشتر باشد',
    pasteImageLink: 'پیوند تصویر را بچسبانید',
    pasteImageLinkInputPlaceholder: 'پیوند تصویر را اینجا بچسبانید',
    pasteImageLinkInvalid: 'پیوند تصویر نامعتبر',
    imageUpload: 'بارگذاری تصویر',
  },
  tag: {
    placeholder: 'همه برچسب‌ها',
    addNew: 'افزودن برچسب جدید',
    noTag: 'بدون برچسب',
    noTagYet: 'هنوز برچسبی وجود ندارد',
    addTag: 'افزودن برچسب‌ها',
    editTag: 'ویرایش برچسب‌ها',
    manageTags: 'مدیریت برچسب‌ها',
    selectorPlaceholder: 'برای جستجو یا ایجاد تایپ کنید',
    create: 'ایجاد',
    delete: 'حذف برچسب',
    deleteTip: 'برچسب در حال استفاده است، آیا آن را حذف می‌کنید؟',
    created: 'برچسب با موفقیت ایجاد شد',
    failed: 'ایجاد برچسب ناموفق بود',
  },
  fileUploader: {
    uploadFromComputer: 'آپلود محلی',
    pasteFileLinkInputPlaceholder: 'URL را وارد کنید...',
    pasteFileLinkInvalid: 'پیوند فایل نامعتبر',
    fileExtensionNotSupport: 'پسوند فایل پشتیبانی نمی شود',
    uploadFromComputerReadError: 'خواندن فایل انجام نشد، لطفا دوباره امتحان کنید.',
    uploadFromComputerUploadError: 'آپلود فایل انجام نشد، لطفا دوباره آپلود کنید.',
    pasteFileLink: 'پیوند فایل را جایگذاری کنید',
    uploadFromComputerLimit: 'آپلود فایل نمی تواند از {{size}} تجاوز کند',
  },
  license: {
    expiring_plural: 'انقضا در {{count}} روز',
    expiring: 'انقضا در یک روز',
    unlimited: 'نامحدود',
  },
  pagination: {
    perPage: 'موارد در هر صفحه',
  },
  theme: {
    auto: 'سیستم',
    theme: 'تم',
    dark: 'تاریک',
    light: 'نور',
  },
  compliance: {
    soc2Type1: 'گزارش نوع I SOC 2',
    sandboxUpgradeTooltip: 'تنها با برنامه حرفه‌ای یا تیمی در دسترس است.',
    gdpr: 'GDPR DPA',
    soc2Type2: 'گزارش نوع II SOC 2',
    iso27001: 'گواهینامه ISO 27001:2022',
    professionalUpgradeTooltip: 'تنها با برنامه تیم یا بالاتر در دسترس است.',
  },
  imageInput: {
    dropImageHere: 'عکس خود را اینجا رها کنید، یا',
    supportedFormats: 'از فرمت‌های PNG، JPG، JPEG، WEBP و GIF پشتیبانی می‌کند',
    browse: 'مرورگر',
  },
  you: 'تو',
}

export default translation
