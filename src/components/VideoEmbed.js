import React from "react";

function VideoEmbed(props) {
  return (
    <>
      <figure className="image is-16by9">
        <iframe
          className="has-ratio"
          src={props.url}
          allowfullscreen={true}
          frameBorder={0}
        ></iframe>
      </figure>
      <div className="column is-v-centered has-background-light">
        <div className="content is-medium">
          <i>
            Dans cette vidéo spectaculaire et dramatique, la tactique du banc de
            sardines compact n'est pas bien expliquée: elle permet un meilleur
            hydrodynamisme (les sardines extérieures protègent celles du centre
            comme les cyclistes du peloton), un effet de brouillage visuel chez
            les prédateurs (un chien même entrainé sera désorienté face à 5
            balles envoyées en même temps), enfin un effet de camaraderie de
            troupe, de jeu et de réconfort social...{" "}
          </i>

          <h3>1. La sardine comme espèce de poisson</h3>

          <p>
            CLÉ D'IDENTIFICATION: Taille comprise entre 10 et 20 cm. Dos vert,
            parfois bleuté, avec irisations contrastées. Flancs argentés, ventre
            clair et brillant. Nageoires pelviennes implantées en arrière de
            l'origine de la nageoire dorsale. Deux derniers rayons de la
            nageoire anale plus longs que les autres. Opercule strié.
          </p>
          <p>
            AUTRES NOMS communs français: Célan, célerin, pilchard, hareng de
            Bergues (Manche) ; chardine, chardinoun, sardinou, royan (Arcachon)
            ; chardine, parrutxa (Pays Basque) ; coureuse (Bretagne) ; sarde,
            sarda (Roussillon) ; poutine (alevins), sardino, sardo (Languedoc,
            Provence) ; palaya, poutina, nonat, rafaneta, pataieta, palaia
            (Nice) ; sardella, serdella (Corse)
          </p>
          <p>
            Source: fiche{" "}
            <a href="http://doris.ffessm.fr/ref/specie/3095">DORIS</a>{" "}
            <i>Sardina pilchardus</i>.
          </p>
          <p>
            Voir aussi{" "}
            <a href="http://www.guidedesespeces.org/fr/sardine">
              l'article SARDINE du guide des espèces.
            </a>
          </p>

          <h3>2. La sardine comme enjeu économique et politique</h3>
          <p>
            En 2018, 52,1 % des ménages français ont acheté des conserves de
            sardines, à hauteur de 16 746 tonnes, pour un prix moyen d’environ
            10,67 euros/kg et un chiffre d’affaires total de 179 millions
            d’euros.
          </p>
          <p>
            Les conserveries françaises ont fabriqué près de 358 millions de
            conserves de poissons en 2017. Il s’agissait principalement de 3
            espèces : thon (109,4 millions de boîtes), maquereaux (107,7
            millions) et sardines (73,9 millions de boîtes),
          </p>

          <p>
            En savoir plus sur le site des{" "}
            <a href="http://conservesdepoissons.fr/le-marche/">
              Conserves Françaises de Poissons
            </a>
          </p>

          <p>
            L'Observatoire Européen du Marché des Produits de la Pêche et de
            l'Aquaculture (EUMOFA) est un outil d’intelligence économique
            appliqué au secteur de la pêche et de l’aquaculture de l’Union
            Européenne et développé par la Commission Européenne. Il vise à
            renforcer la transparence et l’efficacité du marché, analyser les
            dynamiques des marchés UE et soutenir les décisions et les
            politiques commerciales.
          </p>
          <p>
            L'EUMOFA produit des études très fouillées et techniques. Cette
            étude de cas sur{" "}
            <a href="https://www.eumofa.eu/documents/20178/102920/La+sardine+en+conserve+au+Portugal.pdf">
              La sardine en conserve au Portugal (PDF)
            </a>{" "}
            contient aussi un bilan des marchés français et espagnols et une
            analyse de la formation du prix d'une boite de sardine.
          </p>
          <p>
            Autre étude très chiffrée sur{" "}
            <a href="https://www.eumofa.eu/documents/20178/136822/Analyses+par+especes.pdf">
              Le marché de la sardine dans l'UE (PDF)
            </a>{" "}
            avec les débarquements, les importations et exportations.
          </p>

          <h3>3. La sardine comme sujet d'étude et de recherche</h3>
          <p>
            <em>
              En bref: La sardine racontée par{" "}
              <a href="http://archimer.ifremer.fr/doc/00032/14287/">
                un ancien pêcheur en 1864
              </a>
              . L'impact de la sardine sur la ville de{" "}
              <a href="http://books.openedition.org/pur/11283">Douarnenez</a>.
              Comment la boite de sardine devint le premier{" "}
              <a href="http://abpo.revues.org/2493">aliment industriel</a>. Et
              la source d'une <a href="http://abpo.revues.org/1113">querelle</a>{" "}
              entre Bretons et Languedociens.
            </em>
          </p>

          <h4>Livres et chapitres</h4>

          <ul>
            <li>
              Boulard, Jean-Claude. L'Epopée de la sardine, un siècle
              d'histoires de pêches. Éditions Ouest-France, 2000. ISBN :
              2737308461{" "}
              <a href="http://www.babelio.com/livres/Boulard-LEpopee-de-la-sardine-un-siecle-dhistoires-de-pe/37430">
                Babelio.com
              </a>{" "}
              <i>Coup de &#9829; du Sardinophile</i>{" "}
            </li>
            <li>
              Anginot, Philippe. La Sardine: de la mer à la boîte. Neva éd.,
              nouvelle éd. 2010. ISBN : 9782350551494{" "}
              <a href="http://www.neva-editions.fr/produit.php?PHPSESSID=afe51a0329a42cc7927b6b05601bd179&prod=140&numr=1">
                Neva éditions
              </a>{" "}
            </li>

            <li>
              Le Boulanger, Jean-Michel. Douarnenez de 1800 à nos jours : Essai
              de géographie historique sur l’identité d’une ville. Rennes :
              Presses universitaires de Rennes, 2000. URL :{" "}
              <a href="http://books.openedition.org/pur/11283">
                http://books.openedition.org/pur/11283
              </a>
            </li>

            <li>
              Nières, Claude. Chapitre X. Les ressources de la mer In : Les
              villes de Bretagne au XVIIIe siècle [en ligne]. Rennes : Presses
              universitaires de Rennes, 2004. URL :{" "}
              <a href="http://books.openedition.org/pur/11025">
                http://books.openedition.org/pur/11025
              </a>
            </li>

            <li>
              Un Pêcheur (1864). De la pêche de la sardine et des industries qui
              s'y rattachent. Imprimerie de Clairet, Quimperlé. URL :{" "}
              <a href="http://archimer.ifremer.fr/doc/00032/14287/11566.pdf">
                http://archimer.ifremer.fr/doc/00032/14287/11566.pdf
              </a>
            </li>
          </ul>

          <h4>Articles universitaires</h4>

          <ul>
            <li>
              Jean-Christophe Fichou, « Les cités sardinières, portes ouvertes
              aux épidémies de choléra (1852-1914) », Annales de Bretagne et des
              Pays de l’Ouest [En ligne], 124-4 | 2017, mis en ligne le 20
              décembre 2019. URL :{" "}
              <a href="http://journals.openedition.org/abpo/3727">
                http://journals.openedition.org/abpo/3727
              </a>{" "}
            </li>

            <li>
              Claire Fredj et Jean-Christophe Fichou, « La sardine à l’huile et
              son adoption par les militaires français », Revue historique des
              armées [En ligne], 258 | 2010, mis en ligne le 26 février 2010.
              URL :{" "}
              <a href="http://rha.revues.org/6934">
                http://rha.revues.org/6934
              </a>
            </li>
            <li>
              Yann Celton et Cécile Oulhen, « La conserverie Le Gall de Loctudy,
              des conserves de sardines à la conservation d’un patrimoine », In
              Situ [En ligne], 41 | 2019. URL :{" "}
              <a href="http://journals.openedition.org/insitu/26961">
                http://journals.openedition.org/insitu/26961
              </a>{" "}
            </li>

            <li>
              Bugnon Fanny, « De l'usine au Conseil d'État. L'élection de
              Joséphine Pencalet à Douarnenez (1925) », Vingtième Siècle. Revue
              d'histoire, 2015/1 (N° 125), p. 32-44. URL :{" "}
              <a href="https://www.cairn.info/revue-vingtieme-siecle-revue-d-histoire-2015-1-page-32.htm">
                https://www.cairn.info/revue-vingtieme-siecle-revue-d-histoire-2015-1-page-32.htm
              </a>
            </li>

            <li>
              Pascal Brioist et Jean-Christophe Fichou, « La sardine à l’huile
              ou le premier aliment industriel », Annales de Bretagne et des
              Pays de l’Ouest [En ligne], 119-4 | 2012, mis en ligne le 31
              décembre 2014. URL :{" "}
              <a href="http://abpo.revues.org/2493">
                http://abpo.revues.org/2493
              </a>
            </li>
            <li>
              Dominique Robin, « La querelle entre Bretons et Languedociens à
              propos du commerce de la sardine pressée au XVIIIe siècle »,
              Annales de Bretagne et des Pays de l’Ouest [En ligne], 112-3 |
              2005, mis en ligne le 20 septembre 2007. URL :{" "}
              <a href="http://abpo.revues.org/1113">
                http://abpo.revues.org/1113
              </a>
            </li>
            <li>
              Jean-Christophe Fichou, « Les syndicats ouvriers des filles de la
              conserve de poisson en Bretagne 1905-1914 », Annales de Bretagne
              et des Pays de l’Ouest [En ligne], 117-2 | 2010, mis en ligne le
              10 juillet 2012. URL :
              <a href="http://abpo.revues.org/1772">
                http://abpo.revues.org/1772
              </a>{" "}
            </li>

            <li>
              Phanette de Bonnault-Cornu, « Le langage technique de la conserve
              », In : Cultures du travail : Identités et savoirs industriels
              dans la France contemporaine [en ligne]. Paris : Éditions de la
              Maison des sciences de l’homme, 1989. URL :
              <a href="http://books.openedition.org/editionsmsh/3742">
                http://books.openedition.org/editionsmsh/3742
              </a>
            </li>
          </ul>

          <h3>IFREMER : 100 documents et articles</h3>
          <p>
            <i>
              Créé en 1984, l'Ifremer est un établissement public à caractère
              industriel et commercial (EPIC, 1862 salariés) qui contribue, par
              ses travaux et expertises, à la connaissance des océans et de
              leurs ressources, à la surveillance du milieu marin et du littoral
              et au développement durable des activités maritimes.
            </i>
          </p>

          <ul>
            <li>
              Rapport Final – Projet CAPTAIN. Connaissances Améliorées à l'aide
              des Pêcheurs sur la sardine et l'anchois de la façade Atlantique -
              Bilan 2015-2018 URL
              https://archimer.ifremer.fr/doc/00586/69764/67655.pdf
            </li>
            <li>
              Condition corporelle et conséquences sur la plasticité des traits
              d’histoire de vie chez les petits pélagiques de Méditerranée
              https://archimer.ifremer.fr/doc/00498/60928/64322.pdf
            </li>
            <li>
              Densité des oeufs d'anchois (Engraulis encrasicolus) et de
              sardines (Sardina pilchardus) dans le golfe de Gascogne URL
              https://archimer.ifremer.fr/doc/00023/13375/10400.pdf
            </li>
            <li>
              Atelier d'inter-calibration des estimations des petits pélagiques
              (Anchois et Sardine) en Atlantique. Boulogne sur Mer, 14 au 15
              mars 2018 URL
              https://archimer.ifremer.fr/doc/00434/54544/55913.pdf
            </li>
            <li>
              Une approche bioénergétique pour la comparaison des traits
              d'histoire de vie de l'anchois et de la sardine du golfe de
              Gascogne URL https://archimer.ifremer.fr/doc/00498/60917/64277.pdf
            </li>
            <li>
              Evolution spatio-temporelle de la condition, de la structure en
              taille et en âge de la sardine Atlantique URL
              https://archimer.ifremer.fr/doc/00410/52133/52842.pdf
            </li>
            <li>
              Utilisation d’espèces halieutiques exploitées comme indicateurs de
              la contamination chimique en zone littorale URL
              https://archimer.ifremer.fr/doc/00014/12475/9315.pdf
            </li>
            <li>
              Observations sur la ponte de la sardine du nord du golfe de
              Gascogne et de la Manche URL
              https://archimer.ifremer.fr/doc/1933/publication-5821.pdf
            </li>
            <li>
              Dynamique de l'upwelling et variabilité spatio-temporelle de la
              répartition de la sardine marocaine, Sardina pilchardus (Walbaum,
              1792) URL https://archimer.ifremer.fr/doc/00100/21151/18770.pdf
            </li>
            <li>
              Sardine. Notes sur la sardine du golfe de Gascogne URL
              https://archimer.ifremer.fr/doc/00038/14964/12291.pdf
            </li>
            <li>
              Evolution de la pêche à la sardine sur les côtes françaises de la
              Méditerranée URL
              https://archimer.ifremer.fr/doc/1961/publication-7073.pdf
            </li>
            <li>
              De la pêche de la sardine et des industries qui s'y rattachent URL
              https://archimer.ifremer.fr/doc/00032/14287/11566.pdf
            </li>
            <li>
              La reproduction de la sardine et de l'anchois dans le golfe du
              Lion URL https://archimer.ifremer.fr/doc/1971/publication-2386.pdf
            </li>
            <li>
              Quelques observations sur la sardine de Bretagne de 1934 à 1936
              URL https://archimer.ifremer.fr/doc/1937/publication-5746.pdf
            </li>
            <li>
              Considérations sur la pêche de la sardine URL
              https://archimer.ifremer.fr/doc/00032/14317/11596.pdf
            </li>
            <li>
              Etude de la sardine de la côte de Bretagne, depuis Concarneau
              jusqu'à l'embouchure de la Loire URL
              https://archimer.ifremer.fr/doc/1933/publication-5835.pdf
            </li>
            <li>
              Modélisation acoustique de poissons pélagiques-rapport de projet
              de fin d’études URL
              https://archimer.ifremer.fr/doc/00276/38684/37182.pdf
            </li>
            <li>
              Contribution à l'étude de la sardine des côtes françaises de la
              Manche et de l'Atlantique (Première partie) URL
              https://archimer.ifremer.fr/doc/1928/publication-5701.pdf
            </li>
            <li>
              La question de la sardine dite "sauvage" URL
              https://archimer.ifremer.fr/doc/1930/publication-5846.pdf
            </li>
            <li>
              Remarques sur la sexualité de la sardine, clupea pilchardus walb.
              URL https://archimer.ifremer.fr/doc/1930/publication-5847.pdf
            </li>
            <li>
              Répartition des oeufs et larves de sardine dans le golfe de
              Gascogne et sur le plateau celtique (mai 1966 ; février et mai
              1967) URL https://archimer.ifremer.fr/doc/00142/25325/23402.pdf
            </li>
            <li>
              Caractérisation de la réponse acoustique individuelle des
              clupéidés du golfe de Gascogne: le projet TOMOFISH URL
              https://archimer.ifremer.fr/doc/00210/32128/30584.pdf
            </li>
            <li>
              Les appâts employés pour la pêche de la sardine. La rogue de morue
              URL https://archimer.ifremer.fr/doc/1951/publication-6730.pdf
            </li>
            <li>
              Notes sur la biologie et la morphologie de la Sardine (Sardina
              pilchardus WALB.) dans le fond du golfe de Gascogne URL
              https://archimer.ifremer.fr/doc/1951/publication-6734.pdf
            </li>
            <li>
              Note sur la pêche à la sardine sans rogue URL
              https://archimer.ifremer.fr/doc/1943/publication-3390.pdf
            </li>
            <li>
              Congélation et entreposage de la sardine. Incidence sur la qualité
              de la conserve appertisée URL
              https://archimer.ifremer.fr/doc/00119/23009/20839.pdf
            </li>
            <li>
              La pêche de la sardine dans la région de Saint-Jean-de-Luz en 1927
              URL https://archimer.ifremer.fr/doc/1928/publication-5696.pdf
            </li>
            <li>
              La pêche de la sardine dans la région de Saint-Jean-de-Luz en 1928
              URL https://archimer.ifremer.fr/doc/1929/publication-5807.pdf
            </li>
            <li>
              Analyse des petits pélagiques, sardine et anchois, dans le golfe
              de Gascogne URL
              https://archimer.ifremer.fr/doc/2006/rapport-2287.pdf
            </li>
            <li>
              Contribution à l'étude de la sardine des côtes françaises de la
              Manche et de l'Atlantique (Seconde partie) URL
              https://archimer.ifremer.fr/doc/1930/publication-5845.pdf
            </li>
            <li>
              Déclin de la taille-aux-âges des sardines: diminution de la
              croissance et/ou disparition sélective des individus à croissance
              rapide URL https://archimer.ifremer.fr/doc/00459/57038/58942.pdf
            </li>
            <li>
              Répartition des principales aires de ponte de la sardine en
              fonction des conditions de milieu dans le golfe du Lion URL
              https://archimer.ifremer.fr/doc/1967/publication-3863.pdf
            </li>
            <li>
              Contribution à l'étude de la sardine des côtes françaises de
              l'Atlantique (entre Loire et Gironde) URL
              https://archimer.ifremer.fr/doc/1932/publication-5826.pdf
            </li>
            <li>
              La question sardinière et la crise aquicole en général URL
              https://archimer.ifremer.fr/doc/00032/14305/11584.pdf
            </li>
            <li>
              Etude préliminaire de la Sardine du secteur de La Rochelle URL
              https://archimer.ifremer.fr/doc/00414/52574/53415.pdf
            </li>
            <li>
              Caractérisation biologique de la sardine (Sardina Plichardus) dans
              le golfe de Gascogne URL
              https://archimer.ifremer.fr/doc/00422/53325/54166.pdf
            </li>
            <li>
              Une Expérience de Marquage sur la Sardine du golfe de Gascogne URL
              https://archimer.ifremer.fr/doc/00414/52584/53422.pdf
            </li>
            <li>
              La pêche de la sardine en Méditerrannée Française URL
              https://archimer.ifremer.fr/doc/1978/publication-7139.pdf
            </li>
            <li>
              La sardine du golfe du Lion (Sardina pilchardus sardina REGAN) URL
              https://archimer.ifremer.fr/doc/1961/publication-4266.pdf
            </li>
            <li>
              Technique du filet "Bolinnche" et de son emploi sur la Côte Basque
              Française URL
              https://archimer.ifremer.fr/doc/1953/publication-6745.pdf
            </li>
            <li>
              Point sommaire sur la biologie et les caractéristiques de la
              pêcherie de sardine Atlantique du golfe de Gascogne URL
              https://archimer.ifremer.fr/doc/00304/41570/40778.pdf
            </li>
            <li>
              Impact du changement climatique sur les populations de petits
              pélagiques des façades françaises. Atleier CERES, éléments de
              synthèse URL https://archimer.ifremer.fr/doc/00470/58155/60649.pdf
            </li>
            <li>
              Observations sur la Sardine des Açores et nouvelle contribution à
              l'étude du genre- URL
              https://archimer.ifremer.fr/doc/1954/publication-2206.pdf
            </li>
            <li>
              Contribution à l'étude biologique de la sardine atlantique
              (Sardina pilchardus WALBAUM) URL
              https://archimer.ifremer.fr/doc/1943/publication-3374.pdf
            </li>
            <li>
              Rapport sur l'activité du Service des Recherches en 1953 URL
              https://archimer.ifremer.fr/doc/00250/36147/34701.pdf
            </li>
            <li>
              Premiers résultats d'une étude quantitative de la reproduction de
              la sardine dans le golfe du Lion URL
              https://archimer.ifremer.fr/doc/00343/45379/44885.pdf
            </li>
            <li>
              Les variations de la situation thermique dans le golfe de Gascogne
              et leur incidence sur l'écologie et la pêche de la sardine en 1968
              URL https://archimer.ifremer.fr/doc/1969/publication-3167.pdf
            </li>
            <li>
              Extraction de lipides en voie aqueuse par bioréacteur enzymatique
              combine à l'ultrafiltration URL
              https://archimer.ifremer.fr/doc/2006/these-1556.pdf
            </li>
            <li>
              Rapport sur les observations effectuées en 1952 entre Arcachon et
              l'Ile d'Yeu URL
              https://archimer.ifremer.fr/doc/1953/publication-6742.pdf
            </li>
            <li>
              Rendements de la pêche sardinière (Sardina pilchardus) et
              conditions de vent, dans le nord du golfe de Gascogne URL
              https://archimer.ifremer.fr/doc/00584/69640/67509.pdf
            </li>
            <li>
              Manuel des pêches maritimes françaises - Fascicule II URL
              https://archimer.ifremer.fr/doc/00314/42516/41885.pdf
            </li>
            <li>
              Analyse du compartiment mésozooplanctonique et écologie
              alimentaire printanière de la sardine, Sardina pilchardus URL
              https://archimer.ifremer.fr/doc/00353/46447/46197.pdf
            </li>
            <li>
              Etude électrophorétique des protéines solubles du cristallin de la
              sardine (Clupea pilchardus Walb.) du golfe du Lion URL
              https://archimer.ifremer.fr/doc/00343/45396/44890.pdf
            </li>
            <li>
              Ressources halieutiques d'intérêt potentiel pour la pêche
              industrielle et la grande pêche française URL
              https://archimer.ifremer.fr/doc/1990/rapport-1585.pdf
            </li>
            <li>
              Incidence des variations de température sur la qualité du poisson
              congelé. URL https://archimer.ifremer.fr/doc/00125/23669/21518.pdf
            </li>
            <li>
              Rapport sur la sardine URL
              https://archimer.ifremer.fr/doc/00016/12772/9709.pdf
            </li>
            <li>
              L'industrie de la pêche dans les ports sardiniers bretons URL
              https://archimer.ifremer.fr/doc/00032/14312/11592.pdf
            </li>
            <li>
              Les activités du bateau pilote de pêche Donibane URL
              https://archimer.ifremer.fr/doc/1959/publication-4488.pdf
            </li>
            <li>
              Traité de fabrication des conserves alimentaires de poissons URL
              https://archimer.ifremer.fr/doc/00032/14320/11601.pdf
            </li>
            <li>
              La senne « guezennec » ou filet tournant de Saint-Guénolé URL
              https://archimer.ifremer.fr/doc/00041/15229/12547.pdf
            </li>
            <li>
              Compte-rendu des travaux exécutés par le "Roselys" et la
              "Thalassa" dans le cadre du plan de relance de la pêche en 1961
              URL https://archimer.ifremer.fr/doc/1961/publication-7074.pdf
            </li>
            <li>
              La reproduction de la sardine et de l'anchois des côtes
              atlantiques du Maroc (saisons et aires de ponte) URL
              https://archimer.ifremer.fr/doc/1953/publication-4471.pdf
            </li>
            <li>
              Nocivité de l'emploi des explosifs dans la pêche de la sardine URL
              https://archimer.ifremer.fr/doc/1967/publication-7273.pdf
            </li>
            <li>
              Le secteur économique de la pêche en pays basque français :
              évolution depuis 1945 de la flottille et des résultats de
              production URL
              https://archimer.ifremer.fr/doc/1987/rapport-4277.pdf
            </li>
            <li>
              Biologie du copepode Lernaeenicus sprattae et ses actions
              pathogènes sur les populations de sardines des côtes du
              Languedoc-Roussillon. URL
              https://archimer.ifremer.fr/doc/1983/publication-1821.pdf
            </li>
            <li>
              La pêche à la lumière - Les essais de l'institut des pêches URL
              https://archimer.ifremer.fr/doc/1959/publication-7200.pdf
            </li>
            <li>
              Situation de la pêche à la sardine dans la région Marseillaise URL
              https://archimer.ifremer.fr/doc/1965/publication-7254.pdf
            </li>
            <li>
              Reproduction de la sardine dans le golfe du Lion - Son importance
              pour l'avenir de la pêche URL
              https://archimer.ifremer.fr/doc/1967/publication-7270.pdf
            </li>
            <li>
              Les conserves de "poisson au naturel" URL
              https://archimer.ifremer.fr/doc/1965/publication-7234.pdf
            </li>
            <li>
              De la condition économique et sociale du pêcheur sardinier URL
              https://archimer.ifremer.fr/doc/00032/14286/11565.pdf
            </li>
            <li>
              Travaux ISTPM 1954 - Recherches sur les poissons - Clupéïformes,
              Hareng, sardine, sprat, anchois URL
              https://archimer.ifremer.fr/doc/1954/publication-6718.pdf
            </li>
            <li>
              Préparation d'un plan d'exploitation de la pêcherie de petits
              pélagiques au Maroc dans la zone centre- atlantique URL
              https://archimer.ifremer.fr/doc/1986/rapport-2558.pdf
            </li>
            <li>
              Résultat de la campagne de pêche au chalut pélagique réalisée à
              Sète durant l'année 1977 URL
              https://archimer.ifremer.fr/doc/1978/publication-7150.pdf
            </li>
            <li>
              De l'utilisation de protéases industrielles pour la production de
              sauces de poisson URL
              https://archimer.ifremer.fr/doc/00259/36997/35488.pdf
            </li>
            <li>
              Contribution à l'étude de l'anchois : (engraulis encrassicholus.L)
              du golfe de Gascogne URL
              https://archimer.ifremer.fr/doc/1931/publication-5881.pdf
            </li>
            <li>
              Etude biologique de la sardine du golfe de Gascogne et du plateau
              celtique URL
              https://archimer.ifremer.fr/doc/1971/publication-2367.pdf
            </li>
            <li>
              Un quart de siècle d'évolution de la conserverie des produits de
              la mer URL https://archimer.ifremer.fr/doc/1986/rapport-2497.pdf
            </li>
            <li>
              Tendances à long terme de la production de la pêche maritime en
              France - 1986 URL
              https://archimer.ifremer.fr/doc/1986/rapport-2496.pdf
            </li>
            <li>
              Aménagement et gestion du complexe de pêche de la lagune de
              Salses-Leucate - Technologie, production, alevinage et
              parasitologie URL
              https://archimer.ifremer.fr/doc/00045/15661/13064.pdf
            </li>
            <li>
              Contribution et Dépendance des flottilles de pêche aux espèces
              commerciales majeures du Golfe de Gascogne URL
              https://archimer.ifremer.fr/doc/2007/rapport-4697.pdf
            </li>
            <li>
              Réfrigération et pré-conservation des sardines à bord du bateau de
              pêche URL
              https://archimer.ifremer.fr/doc/1961/publication-7180.pdf
            </li>
            <li>
              Proposition de campagne à la mer. N/O Thalassa. Pelgas 07 URL
              https://archimer.ifremer.fr/doc/2006/rapport-6433.pdf
            </li>
            <li>
              Évolution de l'écosystème pélagique du golfe de Gascogne pendant
              la période 1990-2003. Conséquences sur la capturabilité des
              espèces URL https://archimer.ifremer.fr/doc/2008/these-6083.pdf
            </li>
            <li>
              Rapport sur l'utilisation du sondeur multifaisceaux ME70 lors de
              la campagne Pelgas09 URL
              https://archimer.ifremer.fr/doc/2009/rapport-6755.pdf
            </li>
            <li>
              Pêche électrique en mer URL
              https://archimer.ifremer.fr/doc/1971/publication-7006.pdf
            </li>
            <li>
              La pêche au thon sur la côte basque poursuit sa modernisation URL
              https://archimer.ifremer.fr/doc/1957/publication-4644.pdf
            </li>
            <li>
              Conserves et surgélation des produits de la mer : vingt ans
              d'évolution URL
              https://archimer.ifremer.fr/doc/1985/rapport-4145.pdf
            </li>
            <li>
              Tendances à long terme de la production de la pêche maritime en
              France - 1985 URL
              https://archimer.ifremer.fr/doc/1985/rapport-4109.pdf
            </li>
            <li>
              Teneur en vin blanc et en vinaigre des conserves de poisson mariné
              URL https://archimer.ifremer.fr/doc/1952/publication-6708.pdf
            </li>
            <li>
              Le merlan (Cadus merlangus L.) de la côte française de
              l'Atlantique. URL
              https://archimer.ifremer.fr/doc/00317/42792/42176.pdf
            </li>
            <li>
              Aires de ponte de la sardine, du sprat et de l'anchois dans le
              golfe de Gascogne et sur le plateau celtique URL
              https://archimer.ifremer.fr/doc/1971/publication-2385.pdf
            </li>
            <li>
              Contribution a l'étude du pétoncle (Chlamys varia L.) URL
              https://archimer.ifremer.fr/doc/1956/publication-4665.pdf
            </li>
            <li>
              Evaluation des rejets d'espèces commerciales. Théorie et
              application aux pêcheries multispécifiques du golfe de Gascogne et
              de la mer celtique URL
              https://archimer.ifremer.fr/doc/00070/18146/15699.pdf
            </li>
            <li>
              Hydrologie saisonnière du golfe du Lion (travaux de f « ichthys »
              (1966-1967) URL
              https://archimer.ifremer.fr/doc/1969/publication-3178.pdf
            </li>
            <li>
              Ressources halieutiques hors quotas du Nord Est Atlantique : bilan
              des connaissances et analyse de scénarios d'évolution de la
              gestion URL https://archimer.ifremer.fr/doc/2001/rapport-1201.pdf
            </li>
            <li>
              Stratégie de reproduction des petits poissons pélagiques dans les
              zones d'upwelling URL
              https://archimer.ifremer.fr/doc/2009/these-7376.pdf
            </li>
            <li>
              La pêche aux petits métiers en Languedoc-Roussillon en 2000 - 2001
              URL https://archimer.ifremer.fr/doc/2002/rapport-2286.pdf
            </li>
            <li>
              Copépodes de la mer d'Alboran (Campagne du «
              Président-Théodore-Tissier », juin 1957) URL
              https://archimer.ifremer.fr/doc/1963/publication-4177.pdf
            </li>
            <li>
              Evolution économique du chalutage en Méditerranée. Le cas du port
              de Sète (1970-1974) URL
              https://archimer.ifremer.fr/doc/1986/rapport-2495.pdf
            </li>
            <li>
              La pêche maritime algérienne et ses possibilités (Rapport de
              mission) URL
              https://archimer.ifremer.fr/doc/1961/publication-4252.pdf
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default VideoEmbed;
