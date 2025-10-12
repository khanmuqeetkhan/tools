// Data file
const verses = [
    {
        source: "Quran 03:16",
        title: "Surah Al-Imran verse 16",
        verse: "رَبَّنَآ إِنَّنَآ ءَامَنَّا فَٱغْفِرْ لَنَا ذُنُوبَنَا وَقِنَا عَذَابَ ٱلنَّارِ",
        meaning: "Our Lord! We have indeed believed, so forgive us our sins and save us from the punishment of the Fire. Herre, vi tror; förlåt oss våra synder och förskona oss från Eldens straff!"
    },
    {
        source: "Quran 03:16",
        title: "Surah Al-Imran verse 26",
        verse: "قُلِ ٱللَّهُمَّ مَـٰلِكَ ٱلْمُلْكِ تُؤْتِى ٱلْمُلْكَ مَن تَشَآءُ وَتَنزِعُ ٱلْمُلْكَ مِمَّن تَشَآءُ وَتُعِزُّ مَن تَشَآءُ وَتُذِلُّ مَن تَشَآءُ ۖ بِيَدِكَ ٱلْخَيْرُ ۖ إِنَّكَ عَلَىٰ كُلِّ شَىْءٍۢ قَدِيرٌِۭ",
        meaning: "Say (O Muhammad صلى الله عليه وسلم): O Allâh! Possessor of the kingdom, You give the kingdom to whom You will, and You take the kingdom from whom You will, and You endue with honour whom You will, and You humiliate whom You will. In Your Hand1 is the good. Verily, You are Able to do all thing"
    },
    {
        source: "Quran 21:30",
        title: "Creation of Heavens and Earth",
        verse: "أَوَلَمْ يَرَ ٱلَّذِينَ كَفَرُوٓا۟ أَنَّ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضَ كَانَتَا رَتْقًۭا فَفَتَقْنَـٰهُمَا ۖ وَجَعَلْنَا مِنَ ٱلْمَآءِ كُلَّ شَىْءٍ",
        meaning: "Do not the disbelievers see that the heavens and the earth were joined together, and We separated them and made every living thing from water?"
    },
    {
        source: "Quran 54:49",
        title: "Measure and Wisdom",
        verse: "إِنَّا كُلَّ شَىْءٍ خَلَقْنَـٰهُ بِقَدَرٍۢ ٍ",
        meaning: "Indeed, all things We created with measure. Everything has been created according to a specific measure and wisdom."
    },
    {
        source: "Quran 55:26-27",
        title: "Faces Humbled",
        verse: "كُلُّ مَنْ عَلَيْهَا فَانٍۢ. وَيَبْقَىٰ وَجْهُ رَبِّكَ ذُو ٱلْجَلَـٰلِ وَٱلْإِكْرَامِ.",
        meaning: "Everyone upon the earth will perish. And there will remain the Face of your Lord, possessor of majesty and honor."
    },
    {
        source: "Quran 73:20",
        title: "Reading the Quran",
        verse: "-",
        meaning: "-"
    },
    {
        source: "Quran 2:255",
        title: "The Throne Verse",
        verse: "ٱللَّهُ لَآ إِلَـٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ ۚ لَا تَأْخُذُهُۥ سِنَةٌۭ وَلَا نَوْمٌۭ ۚ لَّهُۥ مَا فِى ٱلسَّمَـٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۗ مَن ذَا ٱلَّذِى يَشْفَعُ عِندَهُۥٓ إِلَّا بِإِذْنِهِۦ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَىْءٍۢ مِّنْ عِلْمِهِۦٓ إِلَّا بِمَا شَآءَ ۚ وَسِعَ كُرْسِيُّهُ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضَ ۖ وَلَا يَـُٔودُهُۥ حِفْظُهُمَا ۚ وَهُوَ ٱلْعَلِىُّ ٱلْعَظِيمٌُ",
        meaning: "Allâh! Lâ ilâha illa Huwa (none has the right to be worshipped but He), Al-Hayyul-Qayyum (the Ever Living, the One Who sustains and protects all that exists). Neither slumber nor sleep overtakes Him. To Him belongs whatever is in the heavens and whatever is on the earth. Who is he that can intercede with Him except with His Permission? He knows what happens to them (His creatures) in this world, and what will happen to them in the Hereafter. And they will never compass anything of His Knowledge except that which He wills. His Kursî 1 extends over the heavens and the earth, and He feels no fatigue in guarding and preserving them. And He is the Most High, the Most Great."
    }

];