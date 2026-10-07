/* Colony Power – language (English / नेपाली) and theme (light / dark).
   Works by translating the text the app draws, so every screen of the admin
   and consumer dashboards follows the chosen language. */
(function(){
'use strict';
function lsGet(k){try{return localStorage.getItem(k)}catch(e){return null}}
function lsSet(k,v){try{localStorage.setItem(k,v)}catch(e){}}
var lang=lsGet('cpLang')==='ne'?'ne':'en';

/* ---------- dictionary: English phrase -> Nepali ---------- */
var D=[
['Colony Power','कोलोनी पावर'],
['Electricity billing for your colony','तपाईंको कोलोनीको बिजुली बिलिङ'],
['Consumer electricity billing','उपभोक्ताको बिजुली बिलिङ'],
['Consumers use their Consumer ID and password. Admin signs in with the Supabase email and password created for the administrator.','उपभोक्ताले आफ्नो उपभोक्ता आईडी र पासवर्ड प्रयोग गर्छन्। एडमिनले प्रशासकका लागि बनाइएको इमेल र पासवर्डबाट लगइन गर्छ।'],
['Consumer ID','उपभोक्ता आईडी'],['Consumer password','उपभोक्ताको पासवर्ड'],
['Login as consumer','उपभोक्ताको रूपमा लगइन'],['Admin dashboard','एडमिन ड्यासबोर्ड'],
['Admin Login','एडमिन लगइन'],['Administrator access','प्रशासक पहुँच'],['Admin email','एडमिन इमेल'],
['Login to dashboard','ड्यासबोर्डमा लगइन'],['Back','पछाडि'],['Password','पासवर्ड'],
['The email is only used to sign in securely through Supabase Auth.','इमेल सुरक्षित रूपमा लगइन गर्न मात्र प्रयोग हुन्छ।'],
['Loading…','लोड हुँदैछ…'],['Logout','लगआउट'],['Consumer login','उपभोक्ता लगइन'],
['📲 Install app','📲 एप इन्स्टल गर्नुहोस्'],
['On iPhone: tap Share, then Add to Home Screen.','आईफोनमा: सेयर थिच्नुहोस्, त्यसपछि "Add to Home Screen"।'],
['Powered by Sohan Kumar Yadav','सोहन कुमार यादवद्वारा सञ्चालित'],
['Sohan Kumar Yadav','सोहन कुमार यादव'],
['WhatsApp:','ह्वाट्सएप:'],['Facebook','फेसबुक'],['Janakpurdham-14, Nepal','जनकपुरधाम-१४, नेपाल'],
/* tabs */
['Consumers','उपभोक्ताहरू'],['Billing settings','बिलिङ सेटिङ'],['Deleted records','मेटिएका रेकर्ड'],['Main meter','मुख्य मिटर'],['Notes','टिपोट'],['Storage','भण्डारण'],
/* consumers list */
['Each consumer has a private ID and sees only their own records.','प्रत्येक उपभोक्ताको आफ्नै आईडी हुन्छ र उसले आफ्नै रेकर्ड मात्र देख्छ।'],
['+ Add','+ थप्नुहोस्'],['Open','खोल्नुहोस्'],['Edit','सच्याउनुहोस्'],['🗑️ Delete','🗑️ मेट्नुहोस्'],
['Current amount','हालको रकम'],['Current month','हालको महिना'],['Due amount','बाँकी रकम'],['No records','रेकर्ड छैन'],
['No monthly record','मासिक रेकर्ड छैन'],['Paid','भुक्तानी भयो'],['Due','बाँकी'],['Meter','मिटर'],
['Current reading','हालको रिडिङ'],['Units used','प्रयोग भएको युनिट'],['Current month bill','हालको महिनाको बिल'],['No record','रेकर्ड छैन'],
['Total due amount','कुल बाँकी रकम'],['Payment due','भुक्तानी बाँकी'],['No dues','बाँकी छैन'],['Previous dues:','अघिल्लो बाँकी:'],['due:','बाँकी:'],
['Previous 5 months','अघिल्ला ५ महिना'],['No previous records yet.','अहिलेसम्म अघिल्लो रेकर्ड छैन।'],['Billing rate','बिलिङ दर'],['Fixed charge','निश्चित शुल्क'],['/unit','/युनिट'],
['Add consumer','उपभोक्ता थप्नुहोस्'],['Create a private ID for a new household.','नयाँ घरपरिवारका लागि निजी आईडी बनाउनुहोस्।'],['Create consumer','उपभोक्ता बनाउनुहोस्'],
['Edit consumer','उपभोक्ता सच्याउनुहोस्'],['Name','नाम'],['Meter ID','मिटर आईडी'],['Starting meter reading','सुरुको मिटर रिडिङ'],['Save changes','परिवर्तन सुरक्षित गर्नुहोस्'],
['Changing this updates the previous reading of the first month and recalculates bills.','यो परिवर्तन गर्दा पहिलो महिनाको अघिल्लो रिडिङ बदलिन्छ र बिल पुनः हिसाब हुन्छ।'],
['Starting meter reading is','सुरुको मिटर रिडिङ'],
['Enter current meter reading','हालको मिटर रिडिङ लेख्नुहोस्'],['Enter password','पासवर्ड लेख्नुहोस्'],['Leave blank to keep current','हालको राख्न खाली छोड्नुहोस्'],['Minimum 6 characters','कम्तीमा ६ अक्षर'],
['e.g. C001','जस्तै C001'],['e.g. 12','जस्तै १२'],['e.g. Meter checked','जस्तै मिटर जाँचियो'],['Consumer 4','उपभोक्ता 4'],
['Photo','फोटो'],['Photos','फोटोहरू'],['Photo (optional)','फोटो (ऐच्छिक)'],['Choose photo','फोटो छान्नुहोस्'],['Remove','हटाउनुहोस्'],['Saved to the database as soon as you choose it.','छानेपछि तुरुन्तै डाटाबेसमा सुरक्षित हुन्छ।'],['Consumer photos','उपभोक्ताका फोटो'],
['← Consumers','← उपभोक्ताहरू'],['+ Add monthly reading','+ मासिक रिडिङ थप्नुहोस्'],['Add monthly reading','मासिक रिडिङ थप्नुहोस्'],['Save monthly reading','मासिक रिडिङ सुरक्षित गर्नुहोस्'],
['Record payment','भुक्तानी रेकर्ड गर्नुहोस्'],['Save payment','भुक्तानी सुरक्षित गर्नुहोस्'],['Amount paid','तिरेको रकम'],['Amount paid:','तिरेको रकम:'],['Payment date (BS)','भुक्तानी मिति (वि.सं.)'],['Payment method','भुक्तानी तरिका'],['Cash','नगद'],['QR','क्यूआर'],
['Payment will be applied oldest due month first','भुक्तानी पहिले सबैभन्दा पुरानो बाँकी महिनामा लाग्छ'],
['If older months are unpaid, this payment is automatically applied to those older dues first. Any remaining amount goes to the next due month, then becomes advance after all current dues are cleared.','पुराना महिना बाँकी भए यो भुक्तानी पहिले ती पुराना बाँकीमा लाग्छ। बाँकी रकम अर्को बाँकी महिनामा जान्छ, सबै बाँकी चुक्ता भएपछि अग्रिम बन्छ।'],
['Enter an amount to see how it will be distributed.','रकम लेख्नुहोस्, कसरी बाँडिन्छ देखिन्छ।'],
['Billing month','बिलिङ महिना'],['Billing year (BS)','बिलिङ वर्ष (वि.सं.)'],['Select the billing month and year. The year changes the month labels automatically.','बिलिङ महिना र वर्ष छान्नुहोस्।'],
['Previous reading','अघिल्लो रिडिङ'],['Previous reading:','अघिल्लो रिडिङ:'],['Previous reading date (BS)','अघिल्लो रिडिङ मिति (वि.सं.)'],['Current reading date (BS)','हालको रिडिङ मिति (वि.सं.)'],['Current reading:','हालको रिडिङ:'],
['Previous reading is protected by the record chain.','अघिल्लो रिडिङ रेकर्डको क्रमबाट सुरक्षित छ।'],['Taken from the latest recorded month.','पछिल्लो रेकर्ड गरिएको महिनाबाट लिइएको।'],
['Estimated bill','अनुमानित बिल'],['Live preview','प्रत्यक्ष पूर्वावलोकन'],['Bill:','बिल:'],['Units used:','प्रयोग भएको युनिट:'],['Units:','युनिट:'],['units','युनिट'],['Remaining:','बाँकी:'],['Remaining','बाँकी'],['Advance used:','प्रयोग भएको अग्रिम:'],['Advance created:','बनेको अग्रिम:'],['Paid:','तिरेको:'],['Previous:','अघिल्लो:'],['Current:','हालको:'],
['Year (BS)','वर्ष (वि.सं.)'],['Month','महिना'],['Day','दिन'],['Year','वर्ष'],
['rate not set','दर तोकिएको छैन'],['rate not set for this month','यो महिनाको दर तोकिएको छैन'],['fixed','निश्चित'],['fixed for','निश्चित, कारण:'],['– for','– कारण:'],['Reason for the fixed charge','निश्चित शुल्कको कारण'],['e.g. Street light, common area','जस्तै: सडक बत्ती, साझा क्षेत्र'],['Shown beside the fixed charge on every bill, for example “NPR 50 fixed for Street light”.','प्रत्येक बिलमा निश्चित शुल्कको छेउमा देखिन्छ, जस्तै “रु ५० निश्चित, कारण: सडक बत्ती”।'],['edited','सच्याइएको'],
['All monthly records visible to Admin.','सबै मासिक रेकर्ड एडमिनले देख्न सक्छ।'],
['Deleted consumers','मेटिएका उपभोक्ता'],['Restore a consumer with all their records, or delete them permanently.','उपभोक्तालाई सबै रेकर्डसहित फर्काउनुहोस् वा सधैंका लागि मेट्नुहोस्।'],
['Select a consumer to view, restore, or permanently delete their archived records.','हेर्न, फर्काउन वा सधैंका लागि मेट्न उपभोक्ता छान्नुहोस्।'],['Click to view this consumer\'s deleted records.','यो उपभोक्ताका मेटिएका रेकर्ड हेर्न थिच्नुहोस्।'],
['No deleted records for this consumer.','यो उपभोक्ताको मेटिएको रेकर्ड छैन।'],['Deleted monthly records for this consumer.','यो उपभोक्ताका मेटिएका मासिक रेकर्ड।'],
['↩ Restore','↩ फर्काउनुहोस्'],['🗑️ Delete permanently','🗑️ सधैंका लागि मेट्नुहोस्'],['🗑️ Delete consumer','🗑️ उपभोक्ता मेट्नुहोस्'],['🗑️ Delete month','🗑️ महिना मेट्नुहोस्'],['✏️ Edit','✏️ सच्याउनुहोस्'],['deleted','मेटिएको'],
/* main meter */
['Only the colony\'s main electricity meter is recorded here.','यहाँ कोलोनीको मुख्य बिजुली मिटर मात्र रेकर्ड हुन्छ।'],['+ Add month','+ महिना थप्नुहोस्'],
['Total paid by consumers is calculated from the consumer payments allocated to that same BS month.','उपभोक्ताले तिरेको कुल रकम सोही वि.सं. महिनामा बाँडिएको भुक्तानीबाट हिसाब हुन्छ।'],
['No main-meter records yet.','अहिलेसम्म मुख्य मिटरको रेकर्ड छैन।'],['Main meter monthly record','मुख्य मिटरको मासिक रेकर्ड'],
['Total to be paid by consumers:','उपभोक्ताले तिर्नुपर्ने कुल रकम:'],['Total paid by consumers:','उपभोक्ताले तिरेको कुल रकम:'],['Total paid by consumers for selected month','छानिएको महिनामा उपभोक्ताले तिरेको कुल रकम'],
['Calculated amount:','हिसाब गरिएको रकम:'],['Calculated at billing rate (units × rate)','बिलिङ दरमा हिसाब (युनिट × दर)'],['No rate','दर छैन'],['×','×'],
['Deleted main-meter records','मेटिएका मुख्य मिटर रेकर्ड'],['Archived main-meter records can be restored or permanently deleted.','मेटिएका मुख्य मिटर रेकर्ड फर्काउन वा सधैंका लागि मेट्न सकिन्छ।'],
['Add main meter record','मुख्य मिटर रेकर्ड थप्नुहोस्'],['Edit main meter record','मुख्य मिटर रेकर्ड सच्याउनुहोस्'],['Save main meter record','मुख्य मिटर रेकर्ड सुरक्षित गर्नुहोस्'],
['Main meter only — not an individual consumer meter.','मुख्य मिटर मात्र — व्यक्तिगत उपभोक्ताको मिटर होइन।'],['Total amount received','प्राप्त कुल रकम'],['This updates from consumer payment allocations.','यो उपभोक्ताको भुक्तानी बाँडफाँडबाट अद्यावधिक हुन्छ।'],
/* billing settings */
['Billing rate by month','महिनाअनुसार बिलिङ दर'],['Set the rate for a BS month and year. It applies to every consumer for that month only and recalculates their bills.','वि.सं. महिना र वर्षको दर तोक्नुहोस्। यो सोही महिनाका सबै उपभोक्तालाई लाग्छ र बिल पुनः हिसाब हुन्छ।'],
['Rate per unit (NPR)','प्रति युनिट दर (रु)'],['Fixed monthly charge (NPR)','निश्चित मासिक शुल्क (रु)'],['Apply the fixed charge to','निश्चित शुल्क लाग्ने उपभोक्ता'],
['Select all','सबै छान्नुहोस्'],['Select none','कुनै पनि नछान्नुहोस्'],['Tick the consumers who must pay the fixed charge this month. Unticked consumers pay only for their units.','यो महिना निश्चित शुल्क तिर्नुपर्ने उपभोक्तालाई छान्नुहोस्। नछानिएकाले युनिटको मात्र तिर्छन्।'],
['No consumers yet.','अहिलेसम्म उपभोक्ता छैन।'],['Months without a rate','दर नभएका महिना'],['These months have records but no rate, so their bills show NPR 0.','यी महिनाको रेकर्ड छ तर दर छैन, त्यसैले बिल रु ० देखिन्छ।'],
['Set rate','दर तोक्नुहोस्'],['Saved rates','सुरक्षित दरहरू'],['(all consumers)','(सबै उपभोक्ता)'],['(not for','(यिनलाई छैन:'],
/* notes */
['Write notes and attach photos. Photos are saved in the database.','टिपोट लेख्नुहोस् र फोटो राख्नुहोस्। फोटो डाटाबेसमा सुरक्षित हुन्छ।'],['Text and photos.','लेख र फोटो।'],['+ Add note','+ टिपोट थप्नुहोस्'],['Add note','टिपोट थप्नुहोस्'],['Edit note','टिपोट सच्याउनुहोस्'],['Save note','टिपोट सुरक्षित गर्नुहोस्'],['Title (optional)','शीर्षक (ऐच्छिक)'],['Note','टिपोट'],['📷 Add photos','📷 फोटो थप्नुहोस्'],
['No notes yet. Tap “+ Add note”.','अहिलेसम्म टिपोट छैन। “+ टिपोट थप्नुहोस्” थिच्नुहोस्।'],
['One-time photo storage setup','एक पटकको फोटो भण्डारण सेटअप'],['Photos are saved in your Supabase database and need a small table. Do this once:','फोटो तपाईंको Supabase डाटाबेसमा सुरक्षित हुन्छ र एउटा सानो तालिका चाहिन्छ। एक पटक यो गर्नुहोस्:'],['Copy SQL','SQL कपी गर्नुहोस्'],['Check again','फेरि जाँच्नुहोस्'],
['Open your project at supabase.com and go to','supabase.com मा आफ्नो प्रोजेक्ट खोलेर जानुहोस्'],['SQL Editor','SQL Editor'],['Tap','थिच्नुहोस्'],['New query','New query'],['Come back here and tap','यहाँ फर्केर थिच्नुहोस्'],
/* storage */
['Database storage','डाटाबेस भण्डारण'],['Space used by your Supabase database.','तपाईंको Supabase डाटाबेसले प्रयोग गरेको ठाउँ।'],['Refresh','रिफ्रेस'],['One-time setup','एक पटकको सेटअप'],['Needed once so the app can read the real size.','एपले वास्तविक आकार पढ्न एक पटक आवश्यक छ।'],
['Copy and run the first command, then run the second one separately.','पहिलो कमान्ड कपी गरी चलाउनुहोस्, त्यसपछि दोस्रो अलग्गै चलाउनुहोस्।'],['Copy command 1','कमान्ड १ कपी गर्नुहोस्'],['Copy command 2','कमान्ड २ कपी गर्नुहोस्'],['Come back and tap','फर्केर थिच्नुहोस्'],
['Used','प्रयोग भएको'],['Total','कुल'],['% used','% प्रयोग भयो'],['Your Supabase plan','तपाईंको Supabase योजना'],['Free plan – 500 MB','निःशुल्क योजना – ५०० MB'],['Pro plan – 8 GB','प्रो योजना – ८ GB'],
['Used = whole database size (includes Supabase\'s own system tables). Photo files in the Storage area are not used by this app.','प्रयोग = सम्पूर्ण डाटाबेसको आकार (Supabase को आफ्नै सिस्टम तालिकासहित)।'],
['What is inside','भित्र के छ'],['App data (consumers, records, rates)','एपको डाटा (उपभोक्ता, रेकर्ड, दर)'],['All photos','सबै फोटो'],['Notes photos – original quality','टिपोटका फोटो – मूल गुणस्तर'],['Notes photos – previews','टिपोटका फोटो – पूर्वावलोकन'],['Contact card photo','सम्पर्क कार्डको फोटो'],
['Size of each photo','प्रत्येक फोटोको आकार'],['No photos yet.','अहिलेसम्म फोटो छैन।'],['Note photo (preview)','टिपोट फोटो (पूर्वावलोकन)'],['Note photo (original)','टिपोट फोटो (मूल)'],['photo','फोटो'],
['Could not check photo storage:','फोटो भण्डारण जाँच्न सकिएन:'],
/* misc */

/* colony set-up */
['🏘️ Create an account for your colony','🏘️ आफ्नो कोलोनीको खाता बनाउनुहोस्'],['Disconnect','विच्छेद गर्नुहोस्'],
['Create an account for your colony','आफ्नो कोलोनीको खाता बनाउनुहोस्'],['Set up your own colony','आफ्नै कोलोनी सेटअप गर्नुहोस्'],
['Use Colony Power for your colony','आफ्नो कोलोनीका लागि कोलोनी पावर प्रयोग गर्नुहोस्'],
['You use your own free Supabase account. Your colony\'s data stays in your account and nobody else can see it. It takes about 15 minutes, and you do it once.','तपाईं आफ्नै निःशुल्क Supabase खाता प्रयोग गर्नुहुन्छ। तपाईंको कोलोनीको डाटा तपाईंकै खातामा रहन्छ र अरू कसैले देख्न सक्दैन। यसमा करिब १५ मिनेट लाग्छ र एक पटक मात्र गर्नुपर्छ।'],
['Run each command separately: paste it, press “Run”, wait for "Success", then clear the editor before the next one.','प्रत्येक कमान्ड अलग-अलग चलाउनुहोस्: पेस्ट गर्नुहोस्, “Run” थिच्नुहोस्, "Success" आउन पर्खनुहोस्, अनि अर्को कमान्ड अघि एडिटर खाली गर्नुहोस्।'],
['Create a Supabase account and project','Supabase खाता र प्रोजेक्ट बनाउनुहोस्'],['Create the tables','तालिकाहरू बनाउनुहोस्'],['Turn on security','सुरक्षा सक्रिय गर्नुहोस्'],['Add the login functions','लगइन फङ्सनहरू थप्नुहोस्'],['Create your admin login','आफ्नो एडमिन लगइन बनाउनुहोस्'],['Make that user the admin','त्यो प्रयोगकर्तालाई एडमिन बनाउनुहोस्'],['Block strangers from signing up','अपरिचितलाई साइन अप गर्नबाट रोक्नुहोस्'],['Copy your project address and key','आफ्नो प्रोजेक्टको ठेगाना र कुञ्जी कपी गर्नुहोस्'],['Connect the app to your colony','एपलाई आफ्नो कोलोनीसँग जोड्नुहोस्'],
['Open “supabase.com” and tap “Start your project”. Sign up with your email or GitHub.','“supabase.com” खोलेर “Start your project” थिच्नुहोस्। आफ्नो इमेल वा GitHub बाट साइन अप गर्नुहोस्।'],
['Tap “New project”. Give it a name, for example “my-colony”.','“New project” थिच्नुहोस्। एउटा नाम दिनुहोस्, जस्तै “my-colony”।'],
['Set a “Database password” and keep it safe. Choose the region closest to you, and the “Free” plan.','“Database password” राखेर सुरक्षित राख्नुहोस्। आफूसँग सबैभन्दा नजिकको क्षेत्र र “Free” योजना छान्नुहोस्।'],
['Tap “Create new project” and wait about 2 minutes until it is ready.','“Create new project” थिचेर तयार नहुँदासम्म करिब २ मिनेट पर्खनुहोस्।'],
['Open Supabase','Supabase खोल्नुहोस्'],
['In your project, open “SQL Editor” in the left menu, then tap “New query”.','आफ्नो प्रोजेक्टमा बायाँ मेनुबाट “SQL Editor” खोल्नुहोस्, अनि “New query” थिच्नुहोस्।'],
['Copy command 1 below, paste it, and press “Run”.','तलको कमान्ड १ कपी गरी पेस्ट गर्नुहोस् र “Run” थिच्नुहोस्।'],
['Clear the editor, or tap “New query”.','एडिटर खाली गर्नुहोस्, वा “New query” थिच्नुहोस्।'],
['Copy command 2, paste it, and press “Run”.','कमान्ड २ कपी गरी पेस्ट गर्नुहोस् र “Run” थिच्नुहोस्।'],
['Clear the editor again.','फेरि एडिटर खाली गर्नुहोस्।'],
['Copy command 3, paste it, and press “Run”.','कमान्ड ३ कपी गरी पेस्ट गर्नुहोस् र “Run” थिच्नुहोस्।'],['Copy command 3','कमान्ड ३ कपी गर्नुहोस्'],
['In the left menu open “Authentication”, then “Users”.','बायाँ मेनुमा “Authentication” खोल्नुहोस्, अनि “Users” खोल्नुहोस्।'],
['Tap “Add user”, then “Create new user”.','“Add user” थिच्नुहोस्, अनि “Create new user” थिच्नुहोस्।'],
['Enter your email and a strong password. Tick “Auto Confirm User”, then tap “Create user”.','आफ्नो इमेल र बलियो पासवर्ड लेख्नुहोस्। “Auto Confirm User” मा टिक लगाउनुहोस्, अनि “Create user” थिच्नुहोस्।'],
['Remember this email and password. You will use them to log in as admin.','यो इमेल र पासवर्ड याद राख्नुहोस्। एडमिनका रूपमा लगइन गर्न यही चाहिन्छ।'],
['The admin email you just created','तपाईंले भर्खरै बनाएको एडमिन इमेल'],['you@example.com','you@example.com'],
['Type the admin email above to get your command.','आफ्नो कमान्ड पाउन माथि एडमिन इमेल लेख्नुहोस्।'],
['Copy the command above, paste it in a new query in SQL Editor, and press “Run”.','माथिको कमान्ड कपी गरी SQL Editor को नयाँ query मा पेस्ट गर्नुहोस् र “Run” थिच्नुहोस्।'],['Copy admin command','एडमिन कमान्ड कपी गर्नुहोस्'],
['In “Authentication”, open “Sign In / Providers” (or just “Providers”) and tap “Email”.','“Authentication” मा “Sign In / Providers” (वा “Providers”) खोलेर “Email” थिच्नुहोस्।'],
['Switch “OFF” the option named “Allow new users to sign up”, then tap “Save”.','“Allow new users to sign up” भन्ने विकल्प “OFF” गर्नुहोस्, अनि “Save” थिच्नुहोस्।'],
['This makes sure only the admin you created can log in as admin.','यसले तपाईंले बनाएको एडमिनले मात्र एडमिनका रूपमा लगइन गर्न सक्ने कुरा सुनिश्चित गर्छ।'],
['Open “Project Settings” (the gear icon), then “API Keys” (or “Data API”).','“Project Settings” (गियर आइकन) खोल्नुहोस्, अनि “API Keys” (वा “Data API”) खोल्नुहोस्।'],
['Copy the “Project URL”. It looks like https://abcdefgh.supabase.co.','“Project URL” कपी गर्नुहोस्। यो https://abcdefgh.supabase.co जस्तो देखिन्छ।'],
['Copy the “Publishable key”, which starts with “sb_publishable_”. If you only see an older “anon public” key, that works too.','“Publishable key” कपी गर्नुहोस्, जुन “sb_publishable_” बाट सुरु हुन्छ। पुरानो “anon public” कुञ्जी मात्र देखिए त्यो पनि चल्छ।'],
['Never use the “secret” or “service_role” key. The app refuses it.','“secret” वा “service_role” कुञ्जी कहिल्यै प्रयोग नगर्नुहोस्। एपले यसलाई स्वीकार गर्दैन।'],
['Colony name','कोलोनीको नाम'],['e.g. Shanti Colony','जस्तै: शान्ति कोलोनी'],['Project URL','प्रोजेक्ट URL'],['Publishable key','Publishable कुञ्जी'],['Test and connect','जाँचेर जोड्नुहोस्'],
['After it connects you will see the login page. Choose “Admin dashboard” and log in with the email and password from Step 5. Then open “Billing settings” to find the link for your consumers.','जोडिएपछि लगइन पेज देखिन्छ। “एडमिन ड्यासबोर्ड” छानेर चरण ५ को इमेल र पासवर्डले लगइन गर्नुहोस्। त्यसपछि उपभोक्ताका लागि लिङ्क पाउन “बिलिङ सेटिङ” खोल्नुहोस्।'],
['Colony link for consumers','उपभोक्ताका लागि कोलोनी लिङ्क'],['Send this link to your consumers once. When they open it, their phone connects to your colony. After that they can use the normal site address or the installed app.','यो लिङ्क उपभोक्तालाई एक पटक पठाउनुहोस्। उनीहरूले खोलेपछि फोन तपाईंको कोलोनीसँग जोडिन्छ। त्यसपछि उनीहरूले सामान्य साइट ठेगाना वा इन्स्टल गरेको एप प्रयोग गर्न सक्छन्।'],
['Copy link','लिङ्क कपी गर्नुहोस्'],['Share','सेयर गर्नुहोस्'],['Disconnect this phone','यो फोन विच्छेद गर्नुहोस्'],
['Connected. Opening your colony…','जोडियो। तपाईंको कोलोनी खुल्दैछ…'],['Testing the connection…','जडान जाँच्दै…'],['Enter your colony name.','आफ्नो कोलोनीको नाम लेख्नुहोस्।'],
['Type a valid admin email first.','पहिले मान्य एडमिन इमेल लेख्नुहोस्।'],['This colony link is not valid.','यो कोलोनी लिङ्क मान्य छैन।'],
['Could not reach this project. Check the URL, and that the project is not paused.','यो प्रोजेक्टसँग जोडिन सकिएन। URL जाँच्नुहोस् र प्रोजेक्ट रोकिएको (paused) छैन भनी हेर्नुहोस्।'],
['Connected, but command 3 has not been run yet. Run commands 1, 2 and 3 first.','जोडियो, तर कमान्ड ३ अझै चलाइएको छैन। पहिले कमान्ड १, २ र ३ चलाउनुहोस्।'],
['Connected, but the tables are missing. Run command 1 first.','जोडियो, तर तालिकाहरू छैनन्। पहिले कमान्ड १ चलाउनुहोस्।'],
['The key was refused. Copy the publishable key again.','कुञ्जी अस्वीकार भयो। Publishable कुञ्जी फेरि कपी गर्नुहोस्।'],
['The key is not valid. Use the publishable key (starts with sb_publishable_).','कुञ्जी मान्य छैन। Publishable कुञ्जी (sb_publishable_ बाट सुरु हुने) प्रयोग गर्नुहोस्।'],
['That is a SECRET key. Never use it here. Use the publishable key (starts with sb_publishable_).','त्यो गोप्य (SECRET) कुञ्जी हो। यहाँ कहिल्यै प्रयोग नगर्नुहोस्। Publishable कुञ्जी प्रयोग गर्नुहोस्।'],
['Project URL must look like https://abcdefgh.supabase.co','प्रोजेक्ट URL https://abcdefgh.supabase.co जस्तो हुनुपर्छ'],
['Consumer ID can only use letters, numbers, dash and underscore (2 to 20 characters).','उपभोक्ता आईडीमा अक्षर, अङ्क, डास र अण्डरस्कोर मात्र (२ देखि २० वटा) प्रयोग गर्न सकिन्छ।'],
['Minimum 8 characters','कम्तीमा ८ अक्षर'],

/* approval */
['Waiting for approval','अनुमोदनको प्रतीक्षामा'],['Access not approved','पहुँच अनुमोदन भएन'],['This colony is not registered yet','यो कोलोनी अझै दर्ता भएको छैन'],['Cannot check approval','अनुमोदन जाँच्न सकिएन'],
['The approval could not be checked right now. Check your internet connection and try again.','अहिले अनुमोदन जाँच्न सकिएन। इन्टरनेट जडान जाँचेर फेरि प्रयास गर्नुहोस्।'],
['Your phone or email (so the owner can reach you)','तपाईंको फोन वा इमेल (ताकि मालिकले सम्पर्क गर्न सकून्)'],['Send approval request','अनुमोदन अनुरोध पठाउनुहोस्'],
['Please try again.','कृपया फेरि प्रयास गर्नुहोस्।'],
['Your colony must be approved by the app owner before anyone can log in. The request is sent when you press the button below.','कसैले लगइन गर्नुअघि तपाईंको कोलोनी एपका मालिकले अनुमोदन गर्नुपर्छ। तलको बटन थिचेपछि अनुरोध पठाइन्छ।'],
['Colony requests','कोलोनी अनुरोधहरू'],['Approve or reject colonies that want to use Colony Power.','कोलोनी पावर प्रयोग गर्न चाहने कोलोनीहरूलाई अनुमोदन वा अस्वीकार गर्नुहोस्।'],
['Waiting','प्रतीक्षामा'],['Approved','अनुमोदित'],['Rejected','अस्वीकृत'],['Approve','अनुमोदन गर्नुहोस्'],['Reject','अस्वीकार गर्नुहोस्'],['Revoke','फिर्ता लिनुहोस्'],['Decided','निर्णय भएका'],
['No colonies are waiting.','प्रतीक्षामा कुनै कोलोनी छैन।'],
['Approver codes','अनुमोदक कोडहरू'],['Give a code to a trusted colony admin so they can approve requests when you cannot log in. They enter it in their Billing settings. You can switch a code off at any time.','तपाईं लगइन गर्न नसक्दा अनुरोध अनुमोदन गर्न सकून् भनेर विश्वासिलो कोलोनी एडमिनलाई कोड दिनुहोस्। उनीहरूले आफ्नो बिलिङ सेटिङमा कोड हाल्छन्। कोड जुनसुकै बेला बन्द गर्न सकिन्छ।'],
['Name of the approver','अनुमोदकको नाम'],['e.g. Shanti Colony admin','जस्तै: शान्ति कोलोनी एडमिन'],['Create approver code','अनुमोदक कोड बनाउनुहोस्'],
['Copy it now. It is shown only once.','अहिले नै कपी गर्नुहोस्। यो एक पटक मात्र देखिन्छ।'],['Copy code','कोड कपी गर्नुहोस्'],['Active','सक्रिय'],['Off','बन्द'],['Switch off','बन्द गर्नुहोस्'],['Switch on','खोल्नुहोस्'],['Never used','कहिल्यै प्रयोग भएको छैन'],
['Approver access','अनुमोदक पहुँच'],['Approver code','अनुमोदक कोड'],['Save for this session','यो सत्रका लागि सुरक्षित गर्नुहोस्'],['Turn off','बन्द गर्नुहोस्'],
['Only if the app owner gave you an approver code, enter it here to approve new colonies.','एपका मालिकले अनुमोदक कोड दिएको भए मात्र नयाँ कोलोनी अनुमोदन गर्न यहाँ हाल्नुहोस्।'],
['Approver access is on for this session. Open the “Colony requests” tab to approve new colonies.','यो सत्रका लागि अनुमोदक पहुँच खुला छ। नयाँ कोलोनी अनुमोदन गर्न “कोलोनी अनुरोधहरू” ट्याब खोल्नुहोस्।'],
['The approval service is not switched on yet. Please tell the app owner.','अनुमोदन सेवा अझै सुरु गरिएको छैन। कृपया एपका मालिकलाई भन्नुहोस्।'],
['Run these 3 commands once in your own Supabase project: open SQL Editor, tap New query, paste one command, press Run, then clear the editor before the next one. After that tap Refresh.','यी ३ कमान्ड आफ्नै Supabase प्रोजेक्टमा एक पटक चलाउनुहोस्: SQL Editor खोल्नुहोस्, New query थिच्नुहोस्, एउटा कमान्ड पेस्ट गरी Run थिच्नुहोस्, अनि अर्को अघि एडिटर खाली गर्नुहोस्। त्यसपछि Refresh थिच्नुहोस्।'],
['Enter your phone or email so the owner can reach you.','मालिकले सम्पर्क गर्न सकून् भनेर आफ्नो फोन वा इमेल लेख्नुहोस्।'],
['Enter a name for this approver.','यस अनुमोदकको नाम लेख्नुहोस्।'],['Enter the approver code.','अनुमोदक कोड लेख्नुहोस्।'],
['The approval service is not switched on yet. Please contact the app owner.','अनुमोदन सेवा अझै सुरु गरिएको छैन। कृपया एपका मालिकसँग सम्पर्क गर्नुहोस्।'],
['Could not send your request to the app owner. Try again later.','तपाईंको अनुरोध एपका मालिकलाई पठाउन सकिएन। पछि फेरि प्रयास गर्नुहोस्।'],
['The request was refused. Check the colony name, project URL and your phone or email.','अनुरोध अस्वीकार भयो। कोलोनीको नाम, प्रोजेक्ट URL र तपाईंको फोन वा इमेल जाँच्नुहोस्।'],
['The app owner has too many waiting requests right now. Try again later.','एपका मालिकसँग अहिले धेरै अनुरोध प्रतीक्षामा छन्। पछि फेरि प्रयास गर्नुहोस्।'],
['Access paused','पहुँच रोकिएको'],['Pause','रोक्नुहोस्'],['Paused','रोकिएको'],['Pause (temporary)','रोक्नुहोस् (अस्थायी)'],['Delete permanently','सधैंका लागि मेट्नुहोस्'],['Delete colony','कोलोनी मेट्नुहोस्'],['Disconnect this phone','यो फोन विच्छेद गर्नुहोस्'],
['Your colony is saved on this phone','तपाईंको कोलोनी यो फोनमा सुरक्षित छ'],['You do not need to enter anything again. Tap below to go back to the login page of your colony. If it was deleted or paused, it waits there for the app owner.','फेरि केही हाल्नु पर्दैन। तलको बटन थिचेर आफ्नो कोलोनीको लगइन पेजमा जानुहोस्। मेटिएको वा रोकिएको भए त्यहाँ एपका मालिकको प्रतीक्षामा रहन्छ।'],
['Nothing to reconnect.','फेरि जोड्न केही छैन।'],['Could not delete the colony right now. Check your internet and try again.','अहिले कोलोनी मेट्न सकिएन। इन्टरनेट जाँचेर फेरि प्रयास गर्नुहोस्।'],
['Could not delete. Open “Update the setup commands” at the bottom of this tab, run the 3 commands in your Supabase, then try again.','मेट्न सकिएन। यो ट्याबको तल “Update the setup commands” खोल्नुहोस्, आफ्नो Supabase मा ३ कमान्ड चलाएर फेरि प्रयास गर्नुहोस्।'],['Update the setup commands','सेटअप कमान्ड अपडेट गर्नुहोस्'],
['Delete this approver code permanently?\n\nIt can never be used again.','यो अनुमोदक कोड सधैंका लागि मेट्ने?\n\nयसलाई फेरि कहिल्यै प्रयोग गर्न सकिँदैन।'],
['Give a code to a trusted colony admin so they can approve requests when you cannot log in. They enter it in their Billing settings. You can switch a code off and on again, or delete it permanently.','तपाईं लगइन गर्न नसक्दा अनुरोध अनुमोदन गर्न सकून् भनेर विश्वासिलो कोलोनी एडमिनलाई कोड दिनुहोस्। उनीहरूले आफ्नो बिलिङ सेटिङमा हाल्छन्। तपाईं कोड बन्द र फेरि खुला गर्न वा सधैंका लागि मेट्न सक्नुहुन्छ।'],
['Fingerprint login','फिंगरप्रिन्ट लगइन'],['👆 Login with fingerprint','👆 फिंगरप्रिन्टले लगइन'],['Switch on','खुला गर्नुहोस्'],['Switch off','बन्द गर्नुहोस्'],
['Log in as admin with your fingerprint instead of typing the password. Works only on this phone.','पासवर्ड टाइप गर्नुको सट्टा फिंगरप्रिन्टले एडमिनमा लगइन गर्नुहोस्। यो फोनमा मात्र चल्छ।'],
['Fingerprint login is on for this phone. It appears on the Admin login page.','यो फोनमा फिंगरप्रिन्ट लगइन खुला छ। यो एडमिन लगइन पेजमा देखिन्छ।'],
['Your password has changed. Please log in with your password once.','तपाईंको पासवर्ड परिवर्तन भएको छ। कृपया एक पटक पासवर्डले लगइन गर्नुहोस्।'],
['Could not log in right now. Check your internet and try again.','अहिले लगइन गर्न सकिएन। इन्टरनेट जाँचेर फेरि प्रयास गर्नुहोस्।'],
['Could not turn on fingerprint login.','फिंगरप्रिन्ट लगइन खुला गर्न सकिएन।'],['Could not turn on fingerprint login on this phone.','यो फोनमा फिंगरप्रिन्ट लगइन खुला गर्न सकिएन।'],['Wrong password.','पासवर्ड मिलेन।'],
['Switch off fingerprint login on this phone?','यो फोनमा फिंगरप्रिन्ट लगइन बन्द गर्ने?'],['This phone or browser does not support fingerprint login.','यो फोन वा ब्राउजरले फिंगरप्रिन्ट लगइन समर्थन गर्दैन।'],
['Enter your admin password to turn on fingerprint login on this phone:','यो फोनमा फिंगरप्रिन्ट लगइन खुला गर्न आफ्नो एडमिन पासवर्ड लेख्नुहोस्:'],
['Use your fingerprint to log in as admin next time on this phone?\n\nYour password is locked inside this phone and opens only with your fingerprint or screen lock. You can switch it off any time in Billing settings.','अर्को पटक यो फोनमा फिंगरप्रिन्टले एडमिनमा लगइन गर्ने?\n\nतपाईंको पासवर्ड यो फोनभित्र लक हुन्छ र फिंगरप्रिन्ट वा स्क्रिन लकले मात्र खुल्छ। बिलिङ सेटिङमा जुनसुकै बेला बन्द गर्न सक्नुहुन्छ।'],
['Tap the box to open the list. Tick','सूची खोल्न बक्समा थिच्नुहोस्। टिक गर्नुहोस्'],['No consumers yet','अहिलेसम्म कुनै उपभोक्ता छैनन्'],['Nobody will be charged','कसैलाई शुल्क लाग्ने छैन'],
['Saved password (only you can see this)','सेभ गरिएको पासवर्ड (तपाईंले मात्र देख्नुहुन्छ)'],['Not saved yet for this consumer. Set a new password below and it will be shown here.','यो उपभोक्ताका लागि अझै सेभ गरिएको छैन। तल नयाँ पासवर्ड राख्नुहोस्, त्यो यहाँ देखिनेछ।'],['New consumer password','नयाँ उपभोक्ता पासवर्ड'],['Advance paid','अग्रिम भुक्तानी'],['Admin password','एडमिन पासवर्ड'],['Enter your admin password first.','पहिले आफ्नो एडमिन पासवर्ड लेख्नुहोस्।'],['Check again','फेरि जाँच्नुहोस्'],['Forget code','कोड हटाउनुहोस्'],
['Your code is kept on this phone. When the owner switches it on again it starts working by itself, no need to enter it again.','तपाईंको कोड यो फोनमा सुरक्षित छ। मालिकले फेरि खुला गरेपछि आफैं चल्छ, फेरि हाल्नु पर्दैन।'],
['This approver code was switched off by the app owner. Ask the owner to switch it on.','यो अनुमोदक कोड एपका मालिकले बन्द गरेका छन्। उनीहरूलाई खुला गर्न भन्नुहोस्।'],
['Install Colony Power on your phone to open it like an app.','कोलोनी पावर आफ्नो फोनमा इन्स्टल गर्नुहोस्, एपजस्तै खुल्छ।'],['To install on iPhone: open this page in Safari, tap the Share button, then tap "Add to Home Screen".','आईफोनमा इन्स्टल गर्न: यो पेज Safari मा खोल्नुहोस्, Share थिच्नुहोस्, अनि "Add to Home Screen" थिच्नुहोस्।'],['This page is open inside another app. Tap the three dots and choose "Open in Chrome", then tap Install app again.','यो पेज अर्को एपभित्र खुलेको छ। तीन थोप्लामा थिचेर "Open in Chrome" छान्नुहोस्, अनि फेरि Install app थिच्नुहोस्।'],['To install: tap the three dots menu of your browser, then choose "Install app" or "Add to Home screen".','इन्स्टल गर्न: ब्राउजरको तीन थोप्ला मेनु थिच्नुहोस्, अनि "Install app" वा "Add to Home screen" छान्नुहोस्।'],
['Pay your bill','आफ्नो बिल तिर्नुहोस्'],['Pay with the colony\'s QR code and send the payment screenshot.','कोलोनीको QR कोडबाट तिरेर भुक्तानीको स्क्रिनसट पठाउनुहोस्।'],['Pay with QR','QR बाट तिर्नुहोस्'],
['Amount you paid (NPR)','तपाईंले तिरेको रकम (NPR)'],['Screenshot of the payment','भुक्तानीको स्क्रिनसट'],['Submit payment proof','भुक्तानीको प्रमाण पठाउनुहोस्'],
['1. Scan the QR code in your wallet app and pay.','१. आफ्नो वालेट एपमा QR कोड स्क्यान गरेर तिर्नुहोस्।'],
['Payment proof sent','भुक्तानीको प्रमाण पठाइयो'],['Your recent payment proofs','तपाईंका पछिल्ला भुक्तानी प्रमाण'],['Confirmed','पुष्टि भयो'],['Waiting for review','समीक्षाको प्रतीक्षामा'],
['Please pay the remaining amount too.','कृपया बाँकी रकम पनि तिर्नुहोस्।'],['Enter the amount you paid.','तपाईंले तिरेको रकम लेख्नुहोस्।'],['Upload the screenshot of your payment.','आफ्नो भुक्तानीको स्क्रिनसट अपलोड गर्नुहोस्।'],
['Bill reminders','बिल सम्झना'],['Turn on reminders','सम्झना खुला गर्नुहोस्'],['Get a message each morning with the amount you have to pay for electricity.','बिजुलीमा तिर्नुपर्ने रकमको सन्देश हरेक बिहान पाउनुहोस्।'],
['Payment QR code','भुक्तानी QR कोड'],['Choose QR image','QR तस्बिर छान्नुहोस्'],['Update for payments (one time)','भुक्तानीका लागि अपडेट (एक पटक)'],['Payments','भुक्तानीहरू'],
['Payment proofs sent by consumers. Check each screenshot, then confirm or reject.','उपभोक्ताले पठाएका भुक्तानी प्रमाण। हरेक स्क्रिनसट हेरेर पुष्टि वा अस्वीकार गर्नुहोस्।'],
['View screenshot','स्क्रिनसट हेर्नुहोस्'],['Confirm','पुष्टि गर्नुहोस्'],['Turn on notifications','सूचना खुला गर्नुहोस्'],['No payment requests are waiting.','कुनै भुक्तानी अनुरोध प्रतीक्षामा छैन।'],
['Your colony admin has not added a payment QR code yet. Please pay in cash or ask the admin.','तपाईंको कोलोनी एडमिनले अझै भुक्तानी QR कोड राखेका छैनन्। नगदमा तिर्नुहोस् वा एडमिनलाई सोध्नुहोस्।'],
['Online payment is not switched on yet. Please ask your colony admin.','अनलाइन भुक्तानी अझै खुला गरिएको छैन। कृपया कोलोनी एडमिनलाई सोध्नुहोस्।'],
['Use your fingerprint to log in next time on this phone?\n\nYour password is locked inside this phone and opens only with your fingerprint or screen lock. You can switch it off any time on your dashboard.','अर्को पटक यो फोनमा फिंगरप्रिन्टले लगइन गर्ने?\n\nतपाईंको पासवर्ड यो फोनभित्र लक हुन्छ र फिंगरप्रिन्ट वा स्क्रिन लकले मात्र खुल्छ। ड्यासबोर्डमा जुनसुकै बेला बन्द गर्न सक्नुहुन्छ।'],
['Consumer','उपभोक्ता'],['monthly record(s)','मासिक रेकर्ड'],['consumers','उपभोक्ता'],['consumer','उपभोक्ता'],['Select','छान्नुहोस्'],['Save','सुरक्षित गर्नुहोस्'],['Cancel','रद्द गर्नुहोस्']
];

/* ---------- full-sentence patterns for alerts / confirmations ---------- */
var P=[
[/^Remaining after this payment: (.*)\. Please pay this remaining amount too\.$/,function(m){return 'यो भुक्तानीपछि बाँकी: '+m[1]+'। कृपया बाँकी रकम पनि तिर्नुहोस्।'}],
[/^This covers your full due\.$/,function(){return 'यसले तपाईंको पूरा बाँकी रकम चुक्ता गर्छ।'}],
[/^Waiting for review \((\d+)\)$/,function(m){return 'समीक्षाको प्रतीक्षामा ('+m[1]+')'}],
[/^Reviewed \((\d+)\)$/,function(m){return 'समीक्षा भइसकेका ('+m[1]+')'}],
[/^Payments \((\d+)\)$/,function(m){return 'भुक्तानीहरू ('+m[1]+')'}],
[/^Advance paid for (.*): (.*)$/,function(m){return m[1]+' को अग्रिम भुक्तानी: '+m[2]}],
[/^Saved rates \((\d+)\)$/,function(m){return 'सेभ गरिएका दरहरू ('+m[1]+')'}],
[/^A rate is already saved for (.*)\. Tap Edit under Saved rates to change it, or enter new values here to replace it\.$/,function(m){return m[1]+' को दर पहिले नै सेभ छ। बदल्न "सेभ गरिएका दरहरू" मा Edit थिच्नुहोस् वा यहाँ नयाँ मान राखेर बदल्नुहोस्।'}],
[/^Your colony "(.*)" is waiting for the app owner to approve it\. Your old logins are safe and will work again as soon as it is approved\.$/,function(m){return 'तपाईंको "'+m[1]+'" कोलोनी एपका मालिकको अनुमोदनको प्रतीक्षामा छ। तपाईंका पुराना लगइन सुरक्षित छन् र अनुमोदन हुनेबित्तिकै फेरि चल्नेछन्।'}],
[/^The app owner has paused the colony "(.*)"\. Your data is safe and your old logins will work again when the owner switches it back on\. Please contact the app owner\.$/,function(m){return 'एपका मालिकले "'+m[1]+'" कोलोनी रोकेका छन्। तपाईंको डेटा सुरक्षित छ र मालिकले फेरि खुला गरेपछि पुराना लगइन चल्नेछन्। कृपया एपका मालिकलाई सम्पर्क गर्नुहोस्।'}],
[/^Pause the colony "(.*)"\?\s+They are logged out and see a waiting page\. You can switch them back on at any time\.$/,function(m){return '"'+m[1]+'" कोलोनी रोक्ने?\n\nउनीहरू लगआउट हुन्छन् र प्रतीक्षा पेज देख्छन्। तपाईं जुनसुकै बेला फेरि खुला गर्न सक्नुहुन्छ।'}],
[/^Delete the colony "(.*)" permanently\?\s+It is removed from this list\. They would have to send a new request to come back\.$/,function(m){return '"'+m[1]+'" कोलोनी सधैंका लागि मेट्ने?\n\nयो सूचीबाट हटाइन्छ। फर्कन उनीहरूले नयाँ अनुरोध पठाउनु पर्छ।'}],
[/^Delete the colony "(.*)" from Colony Power\?\s+Everyone is logged out until the app owner approves it again\. Your data stays safe in your Supabase account and your old logins keep working after approval\.$/,function(m){return 'कोलोनी पावरबाट "'+m[1]+'" कोलोनी मेट्ने?\n\nएपका मालिकले फेरि अनुमोदन नगरेसम्म सबै लगआउट हुन्छन्। तपाईंको डेटा Supabase खातामा सुरक्षित रहन्छ र अनुमोदनपछि पुराना लगइन चल्छन्।'}],
[/^(\d+) of (\d+) consumers will be charged$/,function(m){return m[2]+' मध्ये '+m[1]+' उपभोक्तालाई शुल्क लाग्नेछ'}],
[/^All (\d+) consumers will be charged$/,function(m){return 'सबै '+m[1]+' उपभोक्तालाई शुल्क लाग्नेछ'}],

[/^Your colony "(.*)" has been created and sent to the app owner for approval\. You can log in as soon as it is approved\.$/,function(m){return 'तपाईंको कोलोनी "'+m[1]+'" बनिसकेको छ र अनुमोदनका लागि एपका मालिकलाई पठाइएको छ। अनुमोदन भएपछि तपाईं लगइन गर्न सक्नुहुन्छ।'}],
[/^The app owner has not approved the colony "(.*)"\. Please contact the app owner\.$/,function(m){return 'एपका मालिकले "'+m[1]+'" कोलोनी अनुमोदन गरेका छैनन्। कृपया एपका मालिकसँग सम्पर्क गर्नुहोस्।'}],
[/^The colony "(.*)" has not asked for approval yet\. The colony admin must send a request below\.$/,function(m){return '"'+m[1]+'" कोलोनीले अझै अनुमोदन मागेको छैन। कोलोनी एडमिनले तल अनुरोध पठाउनुपर्छ।'}],
[/^Colony requests \((\d+)\)$/,function(m){return 'कोलोनी अनुरोधहरू ('+m[1]+')'}],
[/^Waiting for approval \((\d+)\)$/,function(m){return 'अनुमोदनको प्रतीक्षामा ('+m[1]+')'}],
[/^Last used (.*)$/,function(m){return 'पछिल्लो पटक प्रयोग '+m[1]}],
[/^Approve the colony "(.*)"\? They will be able to log in\.$/,function(m){return '"'+m[1]+'" कोलोनी अनुमोदन गर्ने? उनीहरूले लगइन गर्न सक्नेछन्।'}],
[/^Reject the colony "(.*)"\? They will not be able to log in\.$/,function(m){return '"'+m[1]+'" कोलोनी अस्वीकार गर्ने? उनीहरूले लगइन गर्न सक्ने छैनन्।'}],
[/^Move the colony "(.*)" back to waiting\?$/,function(m){return '"'+m[1]+'" कोलोनीलाई फेरि प्रतीक्षामा राख्ने?'}],
[/^Could not send the request: (.*)$/,function(m){return 'अनुरोध पठाउन सकिएन: '+m[1]}],
[/^Not allowed\. (.*)$/,function(m){return 'अनुमति छैन। '+translate(m[1])}],
[/^Log in as the owner admin\.$/,'मालिक एडमिनका रूपमा लगइन गर्नुहोस्।'],
[/^The approver code is wrong or was switched off\.$/,'अनुमोदक कोड गलत छ वा बन्द गरिएको छ।'],

[/^Step (\d+)\. (.*)$/,function(m){return 'चरण '+m[1]+'. '+translate(m[2])}],
[/^Copy command (\d)$/,function(m){return 'कमान्ड '+m[1]+' कपी गर्नुहोस्'}],
[/^Consumer password must be at least 8 characters\.$/,'उपभोक्ताको पासवर्ड कम्तीमा ८ अक्षरको हुनुपर्छ।'],
[/^Connect this app to the colony "(.*)"\?\n\nDatabase: (.*)\n\nOnly continue if your colony administrator gave you this link\.$/,function(m){return 'यो एपलाई "'+m[1]+'" कोलोनीसँग जोड्ने?\n\nडाटाबेस: '+m[2]+'\n\nतपाईंको कोलोनीका एडमिनले यो लिङ्क दिएको हो भने मात्र जारी राख्नुहोस्।'}],
[/^Disconnect this phone from "(.*)"\?\n\nYour colony data stays safe in its Supabase account\. You can connect again with the colony link\.$/,function(m){return 'यो फोनलाई "'+m[1]+'" बाट विच्छेद गर्ने?\n\nतपाईंको कोलोनीको डाटा यसको Supabase खातामा सुरक्षित रहन्छ। कोलोनी लिङ्कले फेरि जोड्न सकिन्छ।'}],
[/^That key has the role "(.*)"\. Use the publishable \(anon\) key only\.$/,function(m){return 'त्यो कुञ्जीको भूमिका "'+m[1]+'" छ। Publishable (anon) कुञ्जी मात्र प्रयोग गर्नुहोस्।'}],
[/^The project answered with an error: (.*)$/,function(m){return 'प्रोजेक्टले त्रुटि देखायो: '+m[1]}],
[/^Too many wrong attempts\. Please try again in 15 minutes\.$/,'धेरै गलत प्रयास भए। कृपया १५ मिनेटपछि फेरि प्रयास गर्नुहोस्।'],
[/^Enter Consumer ID and password\.$/,'उपभोक्ता आईडी र पासवर्ड लेख्नुहोस्।'],
[/^Cloud connection is unavailable\.$/,'क्लाउड जडान उपलब्ध छैन।'],
[/^Supabase connection is unavailable\.$/,'Supabase जडान उपलब्ध छैन।'],
[/^Consumer account not found or password is incorrect\.$/,'उपभोक्ता खाता फेला परेन वा पासवर्ड मिलेन।'],
[/^Consumer login failed: (.*)$/,function(m){return 'उपभोक्ता लगइन असफल भयो: '+m[1]}],
[/^Enter admin email and password\.$/,'एडमिन इमेल र पासवर्ड लेख्नुहोस्।'],
[/^This Supabase account is not configured as the Colony Power admin\.$/,'यो Supabase खाता कोलोनी पावरको एडमिनका रूपमा सेट गरिएको छैन।'],
[/^Fill all fields\.$/,'सबै खाली ठाउँ भर्नुहोस्।'],
[/^Consumer password must be at least 6 characters\.$/,'उपभोक्ताको पासवर्ड कम्तीमा ६ अक्षरको हुनुपर्छ।'],
[/^(A consumer with this ID already exists|Consumer ID already exists)\.$/,'यो आईडीको उपभोक्ता पहिले नै छ।'],
[/^That ID is in Deleted records\. Restore it there or delete it permanently first\.$/,'यो आईडी मेटिएका रेकर्डमा छ। पहिले त्यहीँबाट फर्काउनुहोस् वा सधैंका लागि मेट्नुहोस्।'],
[/^Enter a valid starting meter reading\.$/,'सुरुको मिटर रिडिङ मान्य लेख्नुहोस्।'],
[/^The starting reading cannot be higher than the first month's current reading \((.*)\)\.$/,function(m){return 'सुरुको रिडिङ पहिलो महिनाको हालको रिडिङ ('+m[1]+') भन्दा बढी हुन सक्दैन।'}],
[/^Add a monthly reading first\.$/,'पहिले मासिक रिडिङ थप्नुहोस्।'],
[/^A record for this month already exists\.$/,'यो महिनाको रेकर्ड पहिल्यै छ।'],
[/^(That month already has an active record\. Delete or edit the active record first\.)$/,'यो महिनाको सक्रिय रेकर्ड पहिल्यै छ। पहिले त्यसलाई मेट्नुहोस् वा सच्याउनुहोस्।'],
[/^Another record already uses that month\.$/,'अर्को रेकर्डले यो महिना प्रयोग गरिसकेको छ।'],
[/^Enter a valid current reading\.$/,'हालको रिडिङ मान्य लेख्नुहोस्।'],
[/^Current reading cannot be lower than previous reading\.$/,'हालको रिडिङ अघिल्लो रिडिङभन्दा कम हुन सक्दैन।'],
[/^Enter valid readings; current reading cannot be lower than previous reading\.$/,'मान्य रिडिङ लेख्नुहोस्; हालको रिडिङ अघिल्लोभन्दा कम हुन सक्दैन।'],
[/^Invalid previous reading\.$/,'अघिल्लो रिडिङ मान्य छैन।'],
[/^Enter a payment amount greater than 0\.$/,'० भन्दा बढी भुक्तानी रकम लेख्नुहोस्।'],
[/^A main-meter record already exists for that month\.$/,'यो महिनाको मुख्य मिटर रेकर्ड पहिल्यै छ।'],
[/^That month already has an active main-meter record\. Delete or edit the active record first\.$/,'यो महिनाको सक्रिय मुख्य मिटर रेकर्ड पहिल्यै छ। पहिले त्यसलाई मेट्नुहोस् वा सच्याउनुहोस्।'],
[/^Enter a valid rate per unit\.$/,'प्रति युनिट मान्य दर लेख्नुहोस्।'],
[/^Fixed charge cannot be negative\.$/,'निश्चित शुल्क ऋणात्मक हुन सक्दैन।'],
[/^No change — this is already the saved rate for (.*)\.$/,function(m){return 'कुनै परिवर्तन छैन — '+m[1]+' को लागि यही दर पहिल्यै सुरक्षित छ।'}],
[/^Rate saved for (.*)\. Bills for that month were recalculated\.$/,function(m){return m[1]+' को दर सुरक्षित भयो। सो महिनाका बिल पुनः हिसाब गरियो।'}],
[/^Change the rate for (.*)\?\n\nFrom: (.*)\nTo: (.*)\n\nThis will recalculate (\d+) bill\(s\) for (.*)\.$/,function(m){return m[1]+' को दर परिवर्तन गर्ने?\n\nअघि: '+m[2]+'\nपछि: '+m[3]+'\n\nयसले '+m[5]+' का '+m[4]+' बिल पुनः हिसाब गर्छ।'}],
[/^Remove the rate for (.*)\?\n\nBills for that month will show NPR 0 until a new rate is set\.$/,function(m){return m[1]+' को दर हटाउने?\n\nनयाँ दर नतोकेसम्म सो महिनाको बिल रु ० देखिन्छ।'}],
[/^Delete (.*) for (.*)\?\n\nThe record will be moved to Deleted records and can be restored later\.$/,function(m){return m[2]+' को '+m[1]+' मेट्ने?\n\nरेकर्ड मेटिएका रेकर्डमा सारिन्छ र पछि फर्काउन सकिन्छ।'}],
[/^Restore (.*) for (.*)\?$/,function(m){return m[2]+' को '+m[1]+' फर्काउने?'}],
[/^Permanently delete (.*) for (.*)\?\n\nThis cannot be restored and will remove the record from storage\.$/,function(m){return m[2]+' को '+m[1]+' सधैंका लागि मेट्ने?\n\nयो फर्काउन सकिँदैन र रेकर्ड भण्डारणबाट हट्छ।'}],
[/^Delete consumer (.*)\?\n\nTheir (\d+) monthly record\(s\) will be moved to Deleted records, where you can restore them\. They will not be able to log in while deleted\.$/,function(m){return 'उपभोक्ता '+m[1]+' मेट्ने?\n\nउनका '+m[2]+' मासिक रेकर्ड मेटिएका रेकर्डमा सारिन्छन्, जहाँबाट फर्काउन सकिन्छ। मेटिएको बेला उनले लगइन गर्न सक्दैनन्।'}],
[/^Restore consumer (.*)\?$/,function(m){return 'उपभोक्ता '+m[1]+' फर्काउने?'}],
[/^Permanently delete (.*) and all their records\?\n\nThis cannot be undone\.$/,function(m){return m[1]+' र उनका सबै रेकर्ड सधैंका लागि मेट्ने?\n\nयो पूर्ववत् गर्न सकिँदैन।'}],
[/^Delete main-meter record for (.*)\?\n\nIt will be moved to Deleted main-meter records and can be restored later\.$/,function(m){return m[1]+' को मुख्य मिटर रेकर्ड मेट्ने?\n\nयो मेटिएका मुख्य मिटर रेकर्डमा सारिन्छ र पछि फर्काउन सकिन्छ।'}],
[/^Restore main-meter record for (.*)\?$/,function(m){return m[1]+' को मुख्य मिटर रेकर्ड फर्काउने?'}],
[/^Permanently delete the main-meter record for (.*)\?\n\nThis cannot be restored and will remove the record from storage\.$/,function(m){return m[1]+' को मुख्य मिटर रेकर्ड सधैंका लागि मेट्ने?\n\nयो फर्काउन सकिँदैन।'}],
[/^You are adding an older month \((.*)\), while (.*) is already recorded\.\n\nAre you sure you want to add this older month\?$/,function(m){return 'तपाईं पुरानो महिना ('+m[1]+') थप्दै हुनुहुन्छ, जबकि '+m[2]+' पहिले नै रेकर्ड भइसकेको छ।\n\nयो पुरानो महिना थप्न पक्का हुनुहुन्छ?'}],
[/^Remove this photo\?$/,'यो फोटो हटाउने?'],
[/^Add some text or a photo first\.$/,'पहिले केही लेख वा फोटो थप्नुहोस्।'],
[/^Delete this note(.*)\?(.*)$/,function(m){return 'यो टिपोट मेट्ने?'+(m[2]?'\n\nयसका फोटो पनि मेटिनेछन्।':'')}],
[/^Copied\.$/,'कपी भयो।'],[/^SQL copied\.$/,'SQL कपी भयो।'],
[/^Could not copy\. Select the (code|text) and copy it manually\.$/,'कपी गर्न सकिएन। लेख छानेर आफैं कपी गर्नुहोस्।'],
[/^Open your browser menu and choose "Install app" or "Add to Home screen"\.$/,'ब्राउजरको मेनु खोलेर "Install app" वा "Add to Home screen" छान्नुहोस्।'],
[/^“(.*)” is larger than 25 MB and was skipped\.$/,function(m){return '“'+m[1]+'” २५ MB भन्दा ठूलो भएकाले छोडियो।'}],
[/^(\d+) consumers$/,function(m){return m[1]+' उपभोक्ता'}],
[/^(\d+) deleted$/,function(m){return m[1]+' मेटिएको'}],
[/^Meter (.+?) • (\d+) monthly record\(s\)$/,function(m){return 'मिटर '+m[1]+' • '+m[2]+' मासिक रेकर्ड'}],
[/^(.+) — payment will cover the oldest due months first$/,function(m){return m[1]+' — भुक्तानी पहिले सबैभन्दा पुराना बाँकी महिनामा लाग्छ'}],
[/^Save rate for (.*)$/,function(m){return m[1]+' को दर सुरक्षित गर्नुहोस्'}],
[/^A rate is set for (.*)\. Change the values below and save to update it\.$/,function(m){return m[1]+' को दर तोकिएको छ। तल मान बदलेर सुरक्षित गर्नुहोस्।'}],
[/^No rate set for (.*) yet\.$/,function(m){return m[1]+' को दर अहिलेसम्म तोकिएको छैन।'}],
[/^Edit (.*)$/,function(m){return m[1]+' सच्याउनुहोस्'}],
[/^(.*) due: (.*) • Previous dues: (.*)$/,function(m){return m[1]+' बाँकी: '+m[2]+' • अघिल्लो बाँकी: '+m[3]}],
[/^Billing rate( \(.*\))?: (.*)$/,function(m){return 'बिलिङ दर'+(m[1]||'')+': '+m[2]}],
[/^Selected month: (.*)$/,function(m){return 'छानिएको महिना: '+m[1]}],
[/^Starting meter reading is (.*), but it will not appear as the current reading until a monthly record is created\.$/,function(m){return 'सुरुको मिटर रिडिङ '+m[1]+' हो, तर मासिक रेकर्ड नबनेसम्म यो हालको रिडिङका रूपमा देखिँदैन।'}],
[/^No records yet; starting reading is (.*)\.$/,function(m){return 'अहिलेसम्म रेकर्ड छैन; सुरुको रिडिङ '+m[1]+' हो।'}],
[/^(.*) units • Previous reading (.*)$/,function(m){return m[1]+' युनिट • अघिल्लो रिडिङ '+m[2]}],
[/^(.*) units • Payment date: (.*)$/,function(m){return m[1]+' युनिट • भुक्तानी मिति: '+m[2]}]
];

var MONTHS={Baisakh:'बैशाख',Jestha:'जेठ',Ashadh:'असार',Shrawan:'साउन',Bhadra:'भदौ',Ashwin:'असोज',Kartik:'कार्तिक',Mangsir:'मंसिर',Poush:'पुष',Magh:'माघ',Falgun:'फागुन',Chaitra:'चैत'};
var DM={};D.forEach(function(p){DM[p[0]]=p[1]});
for(var k in MONTHS)DM[k]=MONTHS[k];
function esc(s){return s.replace(/[.*+?^${}()|[\]\\\/]/g,'\\$&')}
var keys=Object.keys(DM).sort(function(a,b){return b.length-a.length});
var PH=new RegExp('(^|[^A-Za-z])('+keys.map(esc).join('|')+')(?![A-Za-z])','g');
var DIG='०१२३४५६७८९';
function digits(s){return s.replace(/(^|[^A-Za-z0-9])([0-9]+)(?![A-Za-z])/g,function(_,a,d){return a+d.replace(/[0-9]/g,function(x){return DIG[x]})})}
function translate(s){
  if(lang!=='ne'||!s)return s;
  var t=s.trim();if(!t)return s;
  var lead=s.slice(0,s.indexOf(t.charAt(0))),trail=s.slice(lead.length+t.length);
  var out=null;
  if(DM[t]!==undefined)out=DM[t];
  else{
    for(var i=0;i<P.length;i++){var m=P[i][0].exec(t);if(m){out=typeof P[i][1]==='function'?P[i][1](m):P[i][1];break}}
    if(out===null)out=t;
    out=out.replace(PH,function(_,a,w){return a+DM[w]});
  }
  out=out.replace(/NPR\s?/g,'रु ');
  out=digits(out);
  return lead+out+trail;
}
window.cpTr=translate;

/* native dialogs */
['alert','confirm','prompt'].forEach(function(n){var o=window[n];if(!o)return;window[n]=function(m){var a=Array.prototype.slice.call(arguments);if(typeof a[0]==='string')a[0]=translate(a[0]);return o.apply(window,a)}});

/* ---------- DOM translation (reversible) ---------- */
var SKIP={SCRIPT:1,STYLE:1,TEXTAREA:1,PRE:1,CODE:1,NOSCRIPT:1};
var store=new WeakMap();
function textNode(n){
  var p=n.parentNode;if(!p||SKIP[p.nodeName]||(p.closest&&p.closest('[data-notrans]')))return;
  var rec=store.get(n);
  if(rec&&n.data===rec.out){
    var want=lang==='ne'?translate(rec.en):rec.en;
    if(n.data!==want){n.data=want;rec.out=want}
    return;
  }
  var en=n.data;if(!/\S/.test(en))return;
  var out=lang==='ne'?translate(en):en;
  store.set(n,{en:en,out:out});
  if(out!==en)n.data=out;
}
var ATTRS=['placeholder','title','aria-label','alt'];
function attrs(el){
  for(var i=0;i<ATTRS.length;i++){
    var a=ATTRS[i];if(!el.hasAttribute(a))continue;
    var k='data-en-'+a,cur=el.getAttribute(a);
    if(el.hasAttribute(k)){
      var en=el.getAttribute(k),last=el.__cpLast&&el.__cpLast[a];
      if(cur!==last){en=cur;el.setAttribute(k,en)}
    }else el.setAttribute(k,cur);
    var en2=el.getAttribute(k),want=lang==='ne'?translate(en2):en2;
    if(cur!==want)el.setAttribute(a,want);
    (el.__cpLast=el.__cpLast||{})[a]=want;
  }
}
function walk(root){
  if(!root)return;
  if(root.nodeType===3){textNode(root);return}
  if(root.nodeType!==1)return;
  if(SKIP[root.nodeName])return;
  attrs(root);
  var c=root.firstChild;while(c){var nx=c.nextSibling;walk(c);c=nx}
}
var busy=false;
function run(root){busy=true;try{walk(root||document.body)}finally{busy=false}}
var obs=null;
function start(){
  if(!window.MutationObserver||!document.body)return;
  obs=new MutationObserver(function(list){
    if(busy)return;
    busy=true;
    try{list.forEach(function(r){
      if(r.type==='childList')r.addedNodes.forEach(function(n){walk(n)});
      else if(r.type==='characterData')textNode(r.target);
      else if(r.type==='attributes')attrs(r.target);
    })}finally{busy=false}
  });
  obs.observe(document.body,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:ATTRS});
}

/* ---------- theme + language buttons ---------- */
function theme(){return document.documentElement.getAttribute('data-theme')==='dark'?'dark':'light'}
function applyTheme(t){
  document.documentElement.setAttribute('data-theme',t);lsSet('cpTheme',t);
  var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute('content',t==='dark'?'#3b1f1c':'#d9544a');
  var b=document.getElementById('cpThemeBtn');if(b){b.textContent=t==='dark'?'☀️':'🌙';b.setAttribute('aria-label',lang==='ne'?(t==='dark'?'उज्यालो मोड':'अँध्यारो मोड'):(t==='dark'?'Switch to light mode':'Switch to dark mode'));b.title=b.getAttribute('aria-label')}
}
function applyLang(l){
  lang=l;lsSet('cpLang',l);document.documentElement.setAttribute('lang',l==='ne'?'ne':'en');
  var b=document.getElementById('cpLangBtn');if(b){b.textContent=l==='ne'?'English':'नेपाली';b.setAttribute('aria-label',l==='ne'?'Switch to English':'नेपालीमा बदल्नुहोस्')}
  applyTheme(theme());
  run(document.body);
}
function buildPrefs(){
  if(document.getElementById('cpPrefs'))return;
  var d=document.createElement('div');d.id='cpPrefs';d.setAttribute('data-notrans','1');
  d.innerHTML='<button type="button" id="cpLangBtn"></button><button type="button" id="cpThemeBtn"></button>';
  document.body.appendChild(d);
  document.getElementById('cpLangBtn').onclick=function(){applyLang(lang==='ne'?'en':'ne')};
  document.getElementById('cpThemeBtn').onclick=function(){applyTheme(theme()==='dark'?'light':'dark')};
}
function init(){buildPrefs();applyLang(lang);start()}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
