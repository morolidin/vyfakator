var fuck = [
	"Na co čumíš debile, chceš mezi světla?",
	"To fakt nemáš nic lepšího na práci, co si třeba vyhonit péro nad jezevčíkem, hm?",
	"Nejsem odborník na lidi, ale když tě vidím, vím že jsi debil.",
	"Vyser se na to ksichte.",
	"Víš že zatím co ty tady klikáš, tak někde hladoví děti? To maj dost blbý co?",
	"Ještě jednou a dupnu ti na želvu.",
	"Úchyláku, nehraj si s cizím ptákem!",
	"Možná by bylo lepší, kdyby jsi udělal něco pro svět, co se třeba zabít?",
	"Debil, fakt debil... jo ty.",
	"Na internetu je mraky porna a ty plejtváš čas tady.",
	"A tebe fakt někdo zvládnul porodit?",
	"Já umím lítat, co ty? Nevíš? Tak to zkus, skoč z okna.",
	"Natáčeli jsme film s Willem Smithem, jmenuje se to - Já Sven -",
	"Jdi do prdele mám kocovinu jak kráva a nemám na tyhle soviny čas.",
	"Seš snad tupej jak sekera po výletě na křesťany a neumíš si poradit?",
	"Pleteš si mě s někým, komu to není u prdele...",
	"já bych ti hrozně rád pomohl, ale nepomůžu.",
	"Kerbí, trhej!",
	"Jsi chytrej jako crossfit",
	"Dáme selfie?",
	"Jdi si raději ulovit pokemona.",
	"Tohle je hra demente, proč bych ti měl radit?",
	"Nečum na mě jak patizón, nebo ti udělám na bulvě uzel.",
	"Kolikrát ti mám říkat, že fanklub Ledového království je vedle?",
	"Vypadám jako někdo, koho tvý problémy zajímaj?",
	"Vidíš moje nicnedělání ? Hodlám v tom pokračovat!",
	"Hůůů pičo.",
	"A ty seš co? Cyklovegan?",
	"Vilyž sy, naser sy, polyp my prdel, pýčusu grammar náckovzkej",
	"Jsem tvůj bůh, tak si koukej sednout na prdel.",
	"Tvoje stará má prej dobře vyjetou kolej, ne že bych o tom něco věděl teda.",
	"Na velikosti záleží, říkala to tvoje stará.",
	"Tvoje máma je tak tlustá, že sežrala Halinu Pavlovskou.",
	"Chceš to i se soví tatarkou?",
	"#Nasrat",
	"Tváříš se jako vymáčklej jebák, dělej s tím něco",
	"Koukám že tu plastiku chirurg pěkně posral co?",
	"Tady tě nikdo urazit nemůže, blba neurazíš.",
	"Jednou jsem takhle šukal s veverkou... Konečně tě poznávám mé dítko!",
	"Vyhul",
	"Tak blbou postavu jako máš ty nemá ani mamut",
	"Jo, seš tlustá a smrdíš!",
	"Nevím jak ty, ale já bych se na to klikání už vysral.",
	"...",
	"Fakuj už někam jinam.",
	"Proč zrovna já musím mít takový fandy?",
	"Nechci bejt neuctivej, ale vodser.",
	"Kdo se moc ptá, je debil."
	"Ty seš takovej zlozmrd."

];
// co tu děláš buzerante zvědavej! Mazej z toho kódu
	document.write(fuck[Math.floor(Math.random()*fuck.length)]);

function talk() {
	document.getElementById("text").innerText = fuck[Math.floor(Math.random()*fuck.length)];
}
