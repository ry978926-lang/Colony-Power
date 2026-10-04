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
['rate not set','दर तोकिएको छैन'],['rate not set for this month','यो महिनाको दर तोकिएको छैन'],['fixed','निश्चित'],['edited','सच्याइएको'],
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
['Consumer','उपभोक्ता'],['monthly record(s)','मासिक रेकर्ड'],['consumers','उपभोक्ता'],['consumer','उपभोक्ता'],['Select','छान्नुहोस्'],['Save','सुरक्षित गर्नुहोस्'],['Cancel','रद्द गर्नुहोस्']
];

/* ---------- full-sentence patterns for alerts / confirmations ---------- */
var P=[
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
  var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute('content',t==='dark'?'#0a1020':'#101b34');
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
