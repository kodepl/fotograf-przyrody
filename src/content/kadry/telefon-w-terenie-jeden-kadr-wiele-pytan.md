---
title: "Telefon w terenie: jeden kadr, wiele pytań"
description: "Jak działa tracker przy jednym wejściu na stronę i dlaczego lokalizacja IP może być myląca."
pubDate: "2026-09-22"
author: "Marek Leśny"
authorBio: "Fotograf terenowy. Czeka na światło dłużej niż na lepszy obiektyw."
habitat: "Las"
season: "jesień"
category: "Teren"
tags: ["prywatność", "tracker", "cookies"]
readingTime: "5 min"
image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&h=1050&q=80"
---

## Scena w lesie

Słońce ledwo przebija się przez gęste korony drzew, a ja stoję w lesie z telefonem w dłoni. Chcę uchwycić ten moment, ten konkretny kadr. W momencie, gdy naciskam spust migawki, w tle dzieje się coś innego. Nie tylko obraz, ale także dane. Oto, co przeglądarka wysyła przy jednym wejściu na stronę, na której przeglądam informacje o fotografii przyrody.

Podczas gdy ja zatracam się w naturze, przeglądarka już wysyła żądanie HTTP do serwera. To jeden skrypt lub piksel 1x1 z innej domeny, który odnotowuje moją wizytę. W tym momencie do żądania dołączane jest moje IP oraz user-agent. Skrypt dodaje także adres artykułu, stronę, z której przyszedłem, nazwę zdarzenia (zwykle page_view) oraz identyfikator. 

### Czym jest identyfikator?

Identyfikator, który często widnieje w ciasteczku (np. _ga przy Google Analytics lub _fbp przy pikselu Meta), to nie nazwisko, ale znacznik przeglądarki. Może znajdować się również w localStorage, co sprawia, że lista cookies może być pusta, ale numer i tak wróci w parametrze. Przykładowy adres, który mógłby to ilustrować, to `collect.example.invalid/g/collect`, który zawiera parametry takie jak `dl` (adres artykułu), `dr` (referrer), `en=page_view` i `cid` (identyfikator).

Pierwsze wejście na stronę ustawia mój numer, a drugie już go wykorzystuje, co prowadzi do zlepiania ścieżek. To nie pojedynczy piksel, ale całe zjawisko z drugim żądaniem. Warto pamiętać, że w żądaniu nie ma treści artykułu, haseł ani plików z dysku. 

### Spóźniony baner

Często zdarza się, że baner zgody na pliki cookies pojawia się z opóźnieniem. Żądanie wychodzi, zanim kliknę "Akceptuję", a zamknięcie krzyżykiem niczego nie cofa. To właśnie w tym momencie zaczynam się zastanawiać, co właściwie dzieje się z danymi, które wysyłam w sieci. 

Geolokalizacja oparta na IP to nie GPS. Często miasto, które otrzymuję w bazie, nie odpowiada miejscu, w którym rzeczywiście się znajduję. To tylko jedna z wielu nieścisłości, które mogą wystąpić.

| Parametr       | Opis                                               |
|----------------|----------------------------------------------------|
| IP             | Adres IP urządzenia, z którego wysyłane jest żądanie |
| User-Agent     | Informacje o przeglądarce i systemie operacyjnym  |
| dl             | Adres artykułu, na który wchodzę                   |
| dr             | Adres strony, z której przyszedłem                 |
| en             | Typ zdarzenia (np. page_view)                      |
| cid            | Identyfikator przeglądarki                         |

Przed kliknięciem na baner warto sprawdzić, jakie żądania są wysyłane w oknie prywatnym lub w zakładce Sieć przeglądarki. Obce domeny oraz ścieżki takie jak collect, pixel czy g/collect mogą wiele zdradzić.

Warto zatem być świadomym tego, co dzieje się w tle, gdy robimy zdjęcia, przeglądając internet. Jak widać, jedno wejście na stronę to nie tylko pojedyncza wizytówka w sieci, ale skomplikowana sieć danych. Więcej na ten temat można znaleźć w artykule o tym, jak działa [tracker w internecie przy jednym wejściu](https://www.blackweb.pl/blog/co-tracker-wysyla-przy-jednym-wejscie).
