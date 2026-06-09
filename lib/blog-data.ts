export interface Article {
  slug: string
  title: string
  summary: string
  content: string[]
}

export const articles: Article[] = [
  {
    slug: 'gyaloglas-alapjai',
    title: 'A sportgyaloglás alapjai kezdőknek',
    summary:
      'Minden, amit tudnod kell, mielőtt elindulnál az első edzésedre. A helyes tartástól a megfelelő tempóig.',
    content: [
      'A sportgyaloglás egyike az atlétika legelőkelőbb és legtechnikásabb ágainak. Külsőre egyszerűnek tűnhet, de a helyes végrehajtás évekig tartó tudatos munkát igényel. Ha most ismerkedsz ezzel a sportággal, az első és legfontosabb dolog, amit el kell sajátítanod, a helyes testtartás.',
      'Állj egyenesen, a gerinced természetes ívét megőrizve. A vállak lazán leengedve, a tekintet előre irányul, kb. 10-15 méterrel előre nézve. A kezek ökölbe szorítva, könyök 90 fokos szögben, a karok energikusan, de felesleges feszültség nélkül mozognak.',
      'Tempó szempontjából a kezdőknek nem érdemes rohanni. Az első néhány hétben a sebesség másodlagos — a technika az elsődleges. Egy jó irányszám: olyan tempót válassz, amelynél tudod folytatni a ritmust szabályos érintéssel és nyújtott térddel. Ha kell, lassíts.',
      'Az első edzések 30-45 perces, könnyű tempójú gyaloglásból álljanak. Érdemes baráttal vagy csoportban edzeni, mert a visszajelzés sokat segít a hibák korai felismerésében. Videózd le magad és figyeld meg, hol hajtod meg a térdedet, hol emeled fel korán az első lábad.',
      'A rendszeresség a legfontosabb. Heti 3-4 alkalom elegendő a kezdeti fejlődéshez. A túlzott lelkesedés és a hirtelen sok edzés könnyen sérüléshez vezet. Hallgass a tested jelzéseire, és adj elég pihenőidőt az alkalmazkodáshoz.',
      'Összefoglalva: a sportgyaloglás tanulása türelmet és kitartást igényel. Az alapok elsajátítása után azonban rendkívül hatékony, alacsony sérülésveszélyű és hosszú távon fenntartható sporttevékenységgé válik.',
    ],
  },
  {
    slug: 'lelegzestechnika',
    title: 'Légzéstechnika hosszú távon',
    summary:
      'Hogyan lélegezz helyesen gyaloglás közben, hogy a versenyek utolsó kilométerein is megőrizd az erődet?',
    content: [
      'A légzéstechnika az egyik legelhanyagoltabb aspektusa a sportgyaloglás edzésének. Sokan csak akkor foglalkoznak vele, amikor már probléma jelentkezik — amikor elfullad a lélegzetük, megjelenik az oldal szúrás, vagy az izmaik bejelzik az oxigénhiányt. Holott a tudatos légzés beépíthető az edzésfolyamatba már a legelejétől.',
      'A diafragmatikus, azaz hasi légzés az alapja minden tartós állóképességi sportnak. A rekeszizom aktív használatával a tüdő mélyebb részeit is teli lehet tölteni levegővel, ami 30-40%-kal több oxigénbevitelt jelent a sekély mellkasi légzéshez képest. Napi 5-10 perces hasi légzőgyakorlat fekve, majd állva, majd mozgás közben alkalmazva gyorsan automatizálja ezt a mintát.',
      'Általános tempónál a 2:2 légzési ritmus — két lépés be, két lépés ki — a legelterjedtebb és leghatékonyabb. Erősebb tempónál áttérhetsz 2:1 vagy akár 1:1 arányra, ha a terhelés ezt megkívánja. Fontos, hogy a kilégzés aktív legyen, ne passzív: fújd ki a levegőt, ne csak "elengedj".',
      'Hideg időben az orron keresztüli belégzés felmelegíti és megnedvesíti a levegőt, így védi a légutakat. Nagyon hideg időben (0°C alá) érdemes nyak-melegítőt vagy vékony szájmaszkot viselni, hogy a hideg levegő ne érje közvetlenül a tüdőt.',
      'Verseny közben a légzésre való tudatos figyelés segíthet a pánik- vagy fáradtságérzet leküzdésében. Egy-egy mély, lassú kilégzés "visszaállíthatja" az idegrendszert stresszes pillanatokban. Ezt sokan a sportpszichológia eszköztárának részeként alkalmazzák.',
      'Edzésen rendszeresen gyakorold a légzéstechnikát különböző intenzitásokon. A cél, hogy teljesen automatikussá váljon — verseny közben ne kelljen rá gondolni, csupán akkor figyeld, ha valami nem stimmel.',
    ],
  },
  {
    slug: 'cipo-valasztas',
    title: 'Megfelelő lábbeli kiválasztása',
    summary:
      'A cipőválasztás kritikus döntés sportgyaloglóknál. Útmutatónk segít megtalálni az optimális lábbelit az edzésekhez és versenyekhez.',
    content: [
      'A sportgyaloglóknál a cipő az egyik legkritikusabb felszerelési elem. Ellentétben a futással, ahol a cipőipar évtizedek óta aktívan fejleszti a termékeket, a gyaloglásspecifikus lábbelik köre szűkebb, és a választás tudatosabb odafigyelést igényel.',
      'Az első és legfontosabb szempont a talajérintési minta. A sportgyalogló sarokkal érinti a talajt és gördítve jut el a lábujjakig — ez teljesen más terhelési profilt jelent, mint a futásnál. Egy megfelelő cipőnek egyenletes gördülési felületet kell biztosítani, rugalmas talppal és elegendő sarokvédelemmel.',
      'A talpvastagságra vonatkozóan a World Athletics szabályai maximálisan 25 mm vastag talpot engedélyeznek versenyeken. Ez meghatározza az elfogadható cipők körét. Edzésen ettől eltérő, vastagabb talpú cipő is használható, ha az kényelmes és nem okoz technikai problémát.',
      'A cipő illeszkedése kritikus. A lábujjaknak fél cm szabad teret kell kapniuk a cipő orrában a duzzanás miatt (hosszú gyaloglás után a láb kb. egy félméretnyit megnő). A saroknak stabilan kell ülnie, oldalirányú mozgás nélkül. A szélességet illetően érdemes tágabb vagy normál szélességű cipőt választani.',
      'Az edzéscipő és a versencipő általában különböző tulajdonságokkal bír. Edzésen az amortizáció és a tartósság a fontos, versenyeken a könnyűség és a reagálékonyság. Ajánlott legalább két különböző cipőpárban edzeni, hogy a lábak alkalmazkodjanak a különböző terhelési mintákhoz.',
      'Végeredményben a "legjobb cipő" az, ami a te lábadra, futástechnikádra és edzésterheléses igényeidre a legjobban illeszkedik. Ha lehetőség van rá, kérd ki tapasztalt gyalogló tanácsát a cipőválasztás előtt, vagy próbálj ki több különböző típust hosszabb tesztsétákon.',
    ],
  },
  {
    slug: 'hideg-ido-edzes',
    title: 'Edzés hideg időben: tanácsok',
    summary:
      'A hideg téli hónapok nem kell, hogy edzésmegszakítást jelentsenek. Megfelelő felkészüléssel hatékonyan edzhetsz télen is.',
    content: [
      'Sokan a tél beálltával beltermi edzésre váltanak vagy csökkentik az edzés intenzitását. Ez valamennyire érthető reakció, de a jól felkészült sportoló számára a hideg idő nem szükségszerűen akadály — sőt, bizonyos szempontból előnyös is lehet.',
      'Az öltözet alapelve a réteges felöltözés. Az első réteg legyen szorosan illő, nedvességelvezető anyagból (poliészter, merino gyapjú). A második réteg szigeteléses (gyapjú vagy fleece). A külső réteg szélellenálló és szélhatlan legyen, de ne légzésálló. Ha izzad az ember, a párát el kell tudni engedni.',
      'A fejvédelem kiemelten fontos: a testhő kb. 40%-a a fejtetőn keresztül vész el. Vékony futósapka hidegben is elegendő, extrém hidegben fülvédő is ajánlott. Kezekre vékony kesztyű már 5 fok alatt hasznos, nem csak a hőmérséklet, de a kézmozgás koordináltsága miatt is.',
      'A bemelegítés hidegben fontosabb, mint nyáron. Ajánlott 10-15 perccel hosszabb bemelegítési időt hagyni, és az első 10-15 percet szándékosan lassabb tempóban teljesíteni. Az izmok és az ízületek lassabban melegednek be hidegben, és a megfelelő előkészítés nélküli intenzív munka sérülésveszélyes.',
      'Hidratáció: hidegben kevésbé érezzük a szomjúságot, de a szervezet vizet veszít a légzéssel (látható páralehellet = vízveszteség). Tartsd meg a szokásos folyadékbeviteli szokásaidat, és ne várj a szomjúság érzésére.',
      'A téli edzések pszichológiai haszna is jelentős: a rossz időben befektetett edzések mentális erőt adnak és javítják a kedvezőtlen körülményekhez való alkalmazkodóképességet. Verseny napján, ha az idő kedvezőtlen, a téli edzés tapasztalata versenyelőnyt jelent.',
    ],
  },
  {
    slug: 'verseny-felkeszules',
    title: 'Versenyre való felkészülés lépései',
    summary:
      'Az utolsó 4 hét döntő fontosságú. Részletes útmutató a verseny előtti felkészülési időszakhoz.',
    content: [
      'A versenyfelkészülés utolsó 4 hete az egyik legkritikusabb periódusa az edzésprogramnak. Ezt az időszakot csökkentési fázisnak (taper) nevezzük, és célja, hogy a versenyző a legnagyobb teljesítményre kész állapotban álljon rajtkőre.',
      'Az utolsó 4 hétben az edzésvolumenet fokozatosan csökkenteni kell, miközben az intenzitást megtartod vagy enyhén emeled. Általában a 4. hétben 70-80%, a 3. hétben 60-70%, a 2. hétben 50-60%, az utolsó héten 30-40%-ra csökkentik az edzésterhelést. Az izmoknak és az idegrendszernek time kell a regenerálódáshoz.',
      'A 3. héten még végezhetsz egy "próba verseny"-ét, azaz egy rövidebb versenyspecifikus tempómunkát, ami visszajelzést ad az aktuális formáról. A 2. héttől azonban kerüld a nagyon kemény edzéseket.',
      'Alvás és regeneráció: a verseny előtti két hétben különösen fontos a megfelelő alvásmennyiség (8-9 óra) és a stressz minimalizálása. A verseny előtti éjjeli rossz alvás nem okoz akkora problémát, mint sokan gondolják, de a megelőző 3-4 nap jó alvása döntő.',
      'Táplálkozás: az utolsó 3 napban érdemes szénhidrátban gazdagabb étkezési rendet folytatni (szénhidrátfeltöltés). A verseny előtt 3-4 órával utolsó nagyobb étkezés, könnyen emészthető ételek. Az étkezési szokásokat változtasd meg fokozatosan, ne kísérletezz az utolsó napon.',
      'Mentális felkészülés: vizualizálj, képzeld el a versenyt részleteiben. A rajtot, az első kilométereket, a nehezebb szakaszokat és a finiset. Ez csökkenti az ismeretlenségből fakadó félelmet és segít a biztonságos, tervezett tempóban rajtoló versenyzésben.',
    ],
  },
  {
    slug: 'taplalkozas-atleta',
    title: 'Táplálkozás sportgyaloglóknak',
    summary:
      'A megfelelő étrend az edzések 50%-a. Útmutató a mindennapi táplálkozástól a verseny napi étkezésig.',
    content: [
      'A sportgyaloglók táplálkozási igényei eltérnek az átlagos aktív ember szükségleteitől. A nagy edzésvolumen (heti 50-100+ km) komoly kalória- és tápanyagigényt jelent, amelyet tudatosan kell kielégíteni.',
      'Szénhidrátok: a hosszú állóképességi sportokban a szénhidrát az elsődleges üzemanyag. A napi kaloriabevitel 55-65%-a szénhidrátból ajánlott aktív edzési periódusban. Komplex szénhidrátok (zabpehely, teljes kiőrlésű gabonák, édesburgonya, gyümölcsök) ideálisak a tartós energiaellátáshoz.',
      'Fehérjék: az izomregeneráció és az alkalmazkodás érdekében napi 1.4-1.8 g fehérje szükséges testsúlykilogrammonként. Ez körülbelül kétszerese az átlagember igényének. Soványhúsok, tojás, hüvelyesek és tejtermékek jó fehérjeforrások. Az edzés után 30-60 percen belüli fehérjebevitel segíti az izomszintézist.',
      'Zsírok: az egészséges zsírok (omega-3, olívaolaj, avokádó, diófélék) elengedhetetlenek az ízületek kenéséhez, a gyulladáscsökkentéshez és a hormonegyensúlyhoz. A kaloriabevitel kb. 20-25%-a zsírból ajánlott.',
      'Hidratáció: napi 2.5-3.5 liter folyadék szükséges, edzésnapokon plusz 500-750 ml az óránkénti izzadásveszteségtől függően. A vizelet halvány sárga színe jó hidratáltsági állapotot jelez.',
      'Verseny napján a bevált szokások a legbiztonságosabbak. Ne próbálj ki új ételeket verseny előtti napon. A reggeli legyen könnyen emészthető, szénhidrátban gazdag: banán, fehér kenyér, zab vagy rizs. Kerüld a rostban gazdag, nehéz ételeket és a magas zsírtartalmú étkezéseket.',
    ],
  },
]
