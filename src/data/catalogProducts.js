const catalogRows = `
9306|Carcaças Porco Branco|CARCAÇA GORDA COM CABEÇA|KG|3.04||3.04
9301|Carcaças Porco Branco|CARCAÇA MAGRA COM CABEÇA|KG|3.03||3.03
9308|Carcaças Porco Branco|MEIA CARCAÇA GORDA SEM CABEÇA|KG|3.10||3.10
9304|Carcaças Porco Branco|MEIA CARCAÇA MAGRA SEM CABEÇA|KG|3.15||3.15
2143|Desmanche Porco Branco|VAO COMPLETO EXTRATENRO|KG|3.75||3.75
2142|Desmanche Porco Branco|JAMON ADOBADO TIERNO (G)|KG|4.55||4.55
2126|Carne Tenro Porco Branco|LOMBINHO TENRO VACUO|KG|6.20||6.20
13538|Carne Tenro Porco Branco|LOMBINHO 4 PIMENTAS EXTRATENRO|KG|6.80||6.80
2144|Carne Tenro Porco Branco|LOMBO DE ALHO E ERVAS TENRO(G)|KG|4.28||4.28
2132|Carne Tenro Porco Branco|LOMBO PIMENTÃO TENRO (G)|KG|4.28||4.28
2125|Carne Tenro Porco Branco|LOMBO PORCO TENRO FATIADO|KG|4.93||4.93
15937|Carne Tenro Porco Branco|FIL. EXTRAF.LOMO EXTRAT.1/2 PZA(V)(G)|KG|4.93||4.93
2124|Carne Tenro Porco Branco|LOMBO PORCO TENRO VACUO|KG|4.18||4.18
11835|Carne Tenro Porco Branco|LOMBO EM AZEITE EXTRATENRO|KG|5.30||5.30
16143|Carne Tenro Porco Branco|ENTREMEADA DE PIMENTAO EXTRATENRA|KG|5.15||5.15
2149|Carne Tenro Porco Branco|PERNA S/OSSO TENRA|KG|4.40||4.40
10799|Carne Tenro Porco Branco|SECRETO PORCO EXTRATENROS|KG|4.60||4.60
10721|Carne Tenro Porco Branco|SECRETO PORCO ROMERO EXTRATENROS|KG|4.60||4.60
2131|Vãos Porco Branco|VÂO S/CACHAÇO S/LOMBINHO TENRO|KG|3.73||3.73
9730|Pernas Porco Branco|PERNA PORCO SEM OSSO 4D|KG|4.15||4.15
9792|Pernas Porco Branco|PERNA COM COURATO SEM UNHA|KG|3.40||3.40
10873|Pernas Porco Branco|PERNA C/COURATO S/PERNIL|KG|3.40||3.40
9619|Pernas Porco Branco|PERNA C/COURATO S/P C/GORDURA|KG|4.48||4.48
9613|Pernas Porco Branco|PERNA TIPO YORK|KG|3.32||3.32
10258|Pernas Porco Branco|PERNA TIPO YORK|KG|3.42||3.42
10364|Pernas Porco Branco|PERNA S/CHISPE|KG|3.66||3.66
9746|Pás Porco Branco|PA SEM OSSO 4D|KG|3.70||3.70
9631|Pás Porco Branco|PA PORCO COM PELE S/MÃO|KG|2.75||2.75
9712|Pás Porco Branco|PA REDONDA PORCO CORTE NACIONAL|KG|3.13||3.13
9603|Vãos Porco Branco|VÃO/ENTREMEADA|KG|3.53||3.53
9700|Vãos Porco Branco|VAO C/ ENTREMEADA SERRADO GRANDE|KG|3.56||3.56
9604|Vãos Porco Branco|VÃO / ENTREMEADA SERRADO|KG|3.53||3.53
9706|Vãos Porco Branco|VÃO COM CACHAÇO SEM LOMBINHO|KG|3.50||3.50
9643|Vãos Porco Branco|VAO COM CACHACO|KG|3.60||3.60
9647|Vãos Porco Branco|VAO COM CACHACO|KG|3.60||3.60
9862|Vãos Porco Branco|VAO COM CACHACO|KG|3.70||3.70
9824|Vãos Porco Branco|VAO C/CACHAÇO SELECIONADO|KG|3.84||3.84
9648|Vãos Porco Branco|VÃO C/CACHAÇO CORTADO|KG|3.80||3.80
9747|Vãos Porco Branco|VAO COM CACHACO SEPARADO|KG|3.50||3.50
9644|Vãos Porco Branco|CHULETERO ESPECIAL C/CABEZA|KG|3.65||3.65
9641|Vãos Porco Branco|VAO SEM CACHAÇO|KG|4.15||4.15
9646|Vãos Porco Branco|VÃO S/ CACHAÇO C/ COURATO|KG|4.00||4.00
9642|Vãos Porco Branco|VAO DESOSSADO . COM A TIRA|KG|4.50||4.50
9635|Vãos Porco Branco|LOMBO PORCO SEM CACHACO|KG|4.48||4.48
9633|Vãos Porco Branco|LOMBO COM CACHACO|KG|4.83||4.83
9656|Entrecosto Porco Branco|ENTRECOSTO CARNUDO|KG|5.35||5.35
9651|Entrecosto Porco Branco|ENTRECOSTO|KG|5.45||5.45
9658|Entrecosto Porco Branco|ENTRECOSTO PORCO SEMI RAPADO|KG|3.80|-0.10|3.90
9764|Entremeada Porco Branco|ENTREMEADA BAIXA|KG|3.70||3.70
9664|Entremeada Porco Branco|ENTREMEADA PORCO ALTA|KG|3.60||3.60
9615|Entremeada Porco Branco|ENTREMEADA SEM PELE|KG|3.90||3.90
9649|Entremeada Porco Branco|ENTREMEADA BACON|KG|5.20||5.20
9662|Entremeada Porco Branco|ENTREMEADA SEM ENTRECOSTO|KG|4.85||4.85
9665|Entremeada Porco Branco|ENTREMEADA FILATIADA|KG|5.45||5.45
9661|Entremeada Porco Branco|ENTREMEADA SEM PELE|KG|3.75||3.75
9609|Fabricação Porco Branco|PERNIL PERNA C/COURATO|KG|3.20||3.20
9626|Fabricação Porco Branco|PERNIL DA PA SEM UNHA|KG|3.20||3.20
9678|Fabricação Porco Branco|COURATOS DO LOMBO|KG|1.60||1.60
9786|Fabricação Porco Branco|JAMON CERDA 4D 95/5|KG|3.65||3.65
9618|Fabricação Porco Branco|MAGRO VÃO 75/25|KG|2.75|-0.10|2.85
9814|Fabricação Porco Branco|MAGRO DA ENTREMEADA 90/10|KG|3.95|-0.10|4.05
9755|Fabricação Porco Branco|MAGRO DA DA PERNA 85/15|KG|2.95|-0.05|3.00
9799|Fabricação Porco Branco|MAGRO DA PA 80/20|KG|2.95|-0.10|3.05
9694|Fabricação Porco Branco|ENTREMEADA INDUST.S/PELE 60/4|KG|3.05||3.05
9754|Fabricação Porco Branco|ENTREMEADA SEL S/P 45CM 75/25|KG|4.30||4.30
9866|Resto Desmanche Porco Branco|PAPADA S/PELE CORTADA|KG|2.15||2.15
9666|Resto Desmanche Porco Branco|FACEIRAS SEM PELE|KG|2.00||2.00
9673|Resto Desmanche Porco Branco|TOUCINHO LOMBO S/PELE|KG|1.70||1.70
9653|Resto Desmanche Porco Branco|CABEÇA DE PORCO|KG|2.50||2.50
9645|Resto Desmanche Porco Branco|CACHACO PORCO COM OSSO|KG|3.80||3.80
9629|Resto Desmanche Porco Branco|CACHAÇO CORTADO|KG|4.00||4.00
9639|Resto Desmanche Porco Branco|CACHACO PORCO SEM OSSO|KG|5.15||5.15
9674|Resto Desmanche Porco Branco|CARAS PORCO COM ORELHAS|KG|3.95||3.95
9675|Resto Desmanche Porco Branco|CARAS S/ORELHAS|KG|3.05||3.05
14989|Resto Desmanche Porco Branco|CHISPE DA MAO|KG|2.30||2.30
9650|Resto Desmanche Porco Branco|LINGUAS|KG|4.50||4.50
9671|Resto Desmanche Porco Branco|ORELHAS|KG|4.50||4.50
9601|Resto Desmanche Porco Branco|OSSO BUCO DA PERNA|KG|3.15||3.15
9670|Resto Desmanche Porco Branco|PAPADAS COM COIRATO|KG|2.10||2.10
9704|Resto Desmanche Porco Branco|PONTA DE ENTRECOSTO CARNUDO|KG|4.00||4.00
13324|Resto Desmanche Porco Branco|PONTAS DE LOMBO EM VACOU|KG|6.20||6.20
9677|Resto Desmanche Porco Branco|RABOS|KG|7.00||7.00
9654|Resto Desmanche Porco Branco|RABOS CARNUDOS|KG|4.00||4.00
9890|Resto Desmanche Porco Branco|MIOLEIRAS|PI|1.20||1.20
9659|Resto Desmanche Porco Branco|TIRAS DE ENTRECOSTO PORCO|KG|5.50|0.05|5.45
9672|Resto Desmanche Porco Branco|TOUCINHO LOMBO C/PELE|KG|1.95||1.95
9686|Resto Desmanche Porco Branco|TUBAROS|KG|1.75||1.75
9676|Resto Desmanche Porco Branco|UNHAS DA MAO|KG|4.40||4.40
9789|Resto Desmanche Porco Branco|UNHAS PORCO PE|KG|3.40||3.40
9684|Subprodutos Porco Branco|FISURAS|KG|1.90||1.90
9687|Subprodutos Porco Branco|ESTÔMAGOS|KG|3.25||3.25
9681|Subprodutos Porco Branco|FIGADO|KG|1.80||1.80
9685|Subprodutos Porco Branco|MANTECA EN RAMA|KG|2.10||2.10
9680|Subprodutos Porco Branco|RINS|KG|2.60||2.60
9888|Subprodutos Porco Branco|SANGRE 10L.|KG|1.35||1.35
9688|Subprodutos Porco Branco|SANGUE 5L|KG|1.40||1.40
2055|Desmanche Granel Vácuo Porco Branco|BOCHECHA PORCO VACUO +- 1KG|KG|9.50||9.50
2039|Desmanche Granel Vácuo Porco Branco|CABEÇA DO LOMBO VACUO|KG|5.30||5.30
2091|Desmanche Granel Vácuo Porco Branco|MOLEJADS|KG|11.50||11.50
2014|Desmanche Granel Vácuo Porco Branco|JAMON C/PIEL S/PATA CARN.(V)|KG|3.57||3.57
15167|Desmanche Granel Vácuo Porco Branco|LAGARTINHOS DE PORCO BRANCO VACUO|KG|5.25||5.25
2037|Desmanche Granel Vácuo Porco Branco|LOMBINHO PORCO VACUO|KG|6.65||6.65
15673|Desmanche Granel Vácuo Porco Branco|LOMBINHOS EM VACOU|KG|6.15||6.15
2035|Desmanche Granel Vácuo Porco Branco|LOMBO EM VACOU|KG|4.53||4.53
2053|Desmanche Granel Vácuo Porco Branco|MEDALHÕES BOCHECHAS VACUO 1KG|KG|6.50||6.50
2003|Desmanche Granel Vácuo Porco Branco|PA PARTIDA VACUO +-3KG|KG|4.28||4.28
2030|Desmanche Granel Vácuo Porco Branco|PA SEM OSSO 3D VACUO|KG|3.90||3.90
2011|Desmanche Granel Vácuo Porco Branco|PANCETA CON COSTILLA VACIO|KG|3.85||3.85
10923|Desmanche Granel Vácuo Porco Branco|PERNA SEM OSSO 4D VACUO|KG|4.25||4.25
11243|Desmanche Granel Vácuo Porco Branco|PLUMAS PORCO EM VACUO|KG|7.45||7.45
10244|Desmanche Granel Vácuo Porco Branco|SECRETO PORCO BRANCO VACUO +-1KG|KG|4.80||4.80
2041|Desmanche Granel Vácuo Porco Branco|VAO SEM CACHAÇO VACUO|KG|4.35||4.35
6743|Livre Serviço Porco Branco|BIFINHOS LOMBO TEMPERADO TENRO|PI|3.73||3.73
6283|Livre Serviço Porco Branco|ESC.LOMO AD.EXTRAT.600G+10% B6|PI|3.73||3.73
6965|Livre Serviço Porco Branco|BIFINHOS LOMBO TENRO 600G B6|PI|3.73||3.73
6276|Livre Serviço Porco Branco|ESC.LOMO EXTRAT.600G+10%B6|PI|3.73||3.73
10373|Carne Tenro Porco Branco L.S.|LOMBINHOS EXTRAT. C/ALECRIM|KG|7.00||7.00
10372|Carne Tenro Porco Branco L.S.|LOMBINHOS EXTRAT. PIMENTÃO|KG|7.00||7.00
11225|Carne Tenro Porco Branco L.S.|LOMBINHOS EXTRAT. C/COGUMELOS|KG|7.00||7.00
2126|Carne Tenro Porco Branco L.S.|LOMBINHO TENRO VACUO|KG|6.20||6.20
16139|Despiece L.S. Porco Branco|TIRA DE COSTILLA NEUTRA EXTRAT(V)(LS)M6|KG|5.75|-0.10|5.85
16140|Despiece L.S. Porco Branco|TIRA DE COSTILLA ADOB. EXTRAT(V)(LS)M6|KG|5.95|-0.10|6.05
16142|Despiece L.S. Porco Branco|PANCETA CERDO ADOB. EXTRAT. (LS) P6|KG|6.85||6.85
16143|Despiece L.S. Porco Branco|ENTREMEADA DE PIMENTAO EXTRATENRA|KG|5.15||5.15
6621|Despiece L.S. Porco Branco|COSTELETA DO CACHAÇO 500G B4|KG|6.05||6.05
6624|Despiece L.S. Porco Branco|COSTELETA LOMBO 560G B4|KG|6.20||6.20
6616|Despiece L.S. Porco Branco|COSTILLA GUISO CERDO MED. B4|KG|5.70|-0.10|5.80
6615|Despiece L.S. Porco Branco|BIFE DO CACHAÇO 560G B4|KG|6.75||6.75
6622|Despiece L.S. Porco Branco|ENTREMEADA S/OSSO FATIADA 560G|KG|6.90||6.90
6614|Despiece L.S. Porco Branco|ROJÕES PORCO 560G B4|KG|5.97||5.97
1897|Congelados Carne Tenro Porco Branco|LOMBO PORCO TENRO (V) CONG.|KG|4.50||4.50
10330|Congelados Carne Tenro Porco Branco|LOMBINHOS PORCA EXTRATENRO CONGELADO|KG|6.00||6.00
1900|Congelados Carne Tenro Porco Branco|LOMBINHOS PORCO TENRO (V) CONG|KG|6.50||6.50
1546|Congelados Porco Branco|CACHACO SEM OSSO CONG. CAIXA|KG|5.05||5.05
1648|Congelados Porco Branco|BOCHECHA PORCO VACUO CAJA CONG|KG|8.50||8.50
10313|Congelados Porco Branco|MEDALHÕES BOCHECHAS VACUO CAJA CONG|KG|7.50||7.50
1896|Congelados Porco Branco|ENTRECOSTO SEMI RAPADO CJ/CG (CH)|KG|3.40||3.40
1543|Congelados Porco Branco|UNHAS DA MAO CONG. CX/10KG|KG|3.90||3.90
1539|Congelados Porco Branco|ORELHAS CONG. CX/10KG|KG|4.95||4.95
1780|Congelados Porco Branco|PATAS CAJA 10K CONG.(CH)|KG|3.60||3.60
1547|Congelados Porco Branco|PONTA ENTRECOSTO CA.CO.CX/10KG|KG|3.10||3.10
10199|Congelados Porco Branco|SECRETO PORCO CONGELADO|KG|5.80||5.80
1964|Congelados Porco Branco|TIRAS DE ENTRECOSTO CONG.|KG|5.75|0.50|5.25
1605|Congelados Subprodutos Porco Branco|RIÑONES CAJA 10K CONG.(CH)|KG|2.55||2.55
6064|Carne Tenra Porco Preto|LOMBO IBERICO PIMENTÂO TENRO|KG|14.50||14.50
9741|Desmanche Porco Preto|VAO SEM CACHACO PORCO PRETO|KG|8.95||8.95
9757|Desmanche Porco Preto|ENTRECOSTO PORCO PRETO|KG|6.05||6.05
9745|Desmanche Porco Preto|CACHACO COM OSSO PORCO PRETO|KG|8.30||8.30
9724|Desmanche Porco Preto|MAGRO PORCO PRETO ENTREV.70/30|KG|7.45||7.45
9785|Desmanche Porco Preto|BANHA EM RAMA|KG|2.35||2.35
9869|Desmanche Porco Preto|ENTREMEADA P.PRETO C/COURATO|KG|4.85||4.85
9714|Desmanche Porco Preto|RECORTES TOUCINHO PORCO PRETO S/COURATO|KG|2.55||2.55
9772|Desmanche Porco Preto|TOUCINHO LOMBO PORCO PRETO|KG|2.85||2.85
12283|Desmanche Granel Vácuo Porco Preto|ABANICO IBERICO EM VACOU|KG|11.55||11.55
2241|Desmanche Granel Vácuo Porco Preto|VAO S/CAB. PORCO PRETO VACUO|KG|9.55||9.55
2239|Desmanche Granel Vácuo Porco Preto|CABEZA LOMO IBERICO VACIO|KG|11.70||11.70
2235|Desmanche Granel Vácuo Porco Preto|LOMBO DE PORCO IBERICO VACUO|KG|14.80||14.80
2222|Desmanche Granel Vácuo Porco Preto|PRESA PORCO PRETO EM VACUO|KG|19.55||19.55
2220|Desmanche Granel Vácuo Porco Preto|SECRETO IBERICO EXTRA VACUO|KG|15.15||15.15
2237|Desmanche Granel Vácuo Porco Preto|LOMBINHO PORCO IBERICO VACUO|KG|18.35||18.35
4664|Despiece L.S. Porco Preto|COSTELETA LOMBO P.PRETO PEQ.B6|KG|11.95||11.95
4660|Despiece L.S. Porco Preto|BIFES LOMBO P.PRETO PEQ B6|KG|18.00||18.00
4684|Despiece L.S. Porco Preto|PRESA PORCO PRETO PEQ B6|KG|22.25||22.25
4663|Despiece L.S. Porco Preto|SECRETOS PORCO PRETO PEQ. B6|KG|16.65||16.65
1775|Congelados Porco Preto|BOCHECHA PORCO PRETO EM VACUO CONG|KG|13.30||13.30
1790|Congelados Porco Preto|LOMBO P. PRETO VACUO CX CONG.|KG|15.35||15.35
15546|Congelados Porco Preto|LOMBINHOS P. PRETO CX/5KG CONG|KG|18.80||18.80
14001|Congelados Porco Preto|LUNA IBERICA VAC.CAJA CONG.|KG|10.55||10.55
1576|Congelados Porco Preto|PRESA PORCO PRETO (V) CX.CONG|KG|20.00||20.00
1824|Congelados Porco Preto|SECRETO IBERICO EXT.VACUO CONG|KG|15.50||15.50
1967|Congelados Porco Preto|TIRAS ENTRECOSTO P.PRETO CONG.|KG|7.60||7.60
9511|Dianteiro Novilho|DIANTEIRO DE NOVILHO|KG|7.05||7.05
9510|Dianteiro Novilho|REDONDO NOVILHO C/OSSO|KG|9.39|-0.08|9.47
9513|Traseiro Novilho|ROSBIFE C/LOMBINHO NOVILHO|KG|11.59|0.09|11.50
9512|Traseiro Novilho|ABA C/ENTRECOSTO NOVILHO|KG|7.65|0.08|7.57
9593|Resto Desmanche Novilho|CORAÇÃO NOVILHO|KG|4.55||4.55
9577|Resto Desmanche Novilho|OSSOS DO ACEM NOVILHO|KG|5.45||5.45
9497|Resto Desmanche Novilho|FOCINHOS NOVILHO|KG|3.45||3.45
9495|Resto Desmanche Novilho|DOBRADA NOVILHO VACUO|KG|4.25||4.25
9496|Resto Desmanche Novilho|PATAS NOVILHO|KG|3.10||3.10
13124|Desmanche Novilho Fêmea|MEDIA CANAL CUART. -130K AÑOJO HEMBRA|KG|9.00|-0.11|9.11
14303|Desmanche Novilho Fêmea|DELANTERO AÑOJO HEMBRA|KG|7.20||7.20
14388|Desmanche Novilho Fêmea|FALDA C/COSTILLA AÑOJO HEMBRA|KG|7.75|-0.10|7.85
14304|Desmanche Novilho Fêmea|TRASERO AÑOJO HEMBRA|KG|9.80||9.80
14863|Desmanche Novilho Fêmea|ROSBIFE COM ABA NOVILHA|KG|12.03||12.03
14867|Desmanche Novilho Fêmea|MEIA NOVILHA 3 CORTES|KG|9.00|-0.11|9.11
2115|Carne Tenro Novilho|CONTRA VAC.S/PIC.EXTRAT.(V)(G)|KG|12.35||12.35
11598|Carne Tenro Novilho|ESCALOPIN AÑOJO EXTRATIERNO (V)(G)|KG|14.95||14.95
2417|Carne Tenro Novilho|GANSO NOVILHO TENRO (G)|KG|12.20|-0.25|12.45
9581|Dianteiro Novilho Vácuo|ACEM NOVILHO VACUO|KG|9.60||9.60
9585|Dianteiro Novilho Vácuo|MAÇA DO PEITO NOVILHO VACUO|KG|9.25||9.25
9569|Dianteiro Novilho Vácuo|ENTREC. DIANTEIRO NOVILHO VAC.|KG|6.75||6.75
9575|Dianteiro Novilho Vácuo|DIANTEIRO NOVILHO VACUO|KG|9.42||9.42
9583|Dianteiro Novilho Vácuo|PA / AGULHA NOVILHO VACUO|KG|9.25||9.25
9579|Dianteiro Novilho Vácuo|CHAMBÃO DA MÃO NOVILHO VACUO|KG|8.30||8.30
9570|Dianteiro Novilho Vácuo|ABA NOVILHO VACUO|KG|9.50||9.50
9521|Traseiro Novilho Vácuo|ALCATRA NOVILHO VACUO|KG|12.80|-0.20|13.00
9596|Traseiro Novilho Vácuo|CHAMBÃO DA PERNA NOVILHO VAC.|KG|9.40||9.40
9527|Traseiro Novilho Vácuo|CHAMBÃO DO TRASEIRO NOVILHO VACUO|KG|7.80||7.80
9574|Traseiro Novilho Vácuo|ENTRECOSTO TRAS.1T NOVILHO VAC|KG|7.55|0.15|7.40
9525|Traseiro Novilho Vácuo|GANSO NOVILHO VACUO|KG|12.70|-0.25|12.95
9554|Traseiro Novilho Vácuo|LIBRO AÑOJO VACIO|KG|12.85|0.40|12.45
9553|Traseiro Novilho Vácuo|LOMBINHO NOVILHO VACUO|KG|26.20|0.75|25.45
9526|Traseiro Novilho Vácuo|NERVO GANSO NOVILHO VACUO|KG|10.10||10.10
9542|Traseiro Novilho Vácuo|PICANHA NOVILHO VACUO|KG|14.20||14.20
9522|Traseiro Novilho Vácuo|POJADOURO NOVILHO VACUO|KG|10.85|-0.20|11.05
9523|Traseiro Novilho Vácuo|RABADILHA NOVILHO VACUO|KG|13.00||13.00
9528|Traseiro Novilho Vácuo|RABO NOVILHO VACUO|KG|13.55|0.30|13.25
9551|Traseiro Novilho Vácuo|VAZIA ALTA NOVILHO VACUO|KG|11.25||11.25
9552|Traseiro Novilho Vácuo|VAZIA BAIXA NOVILHO VACUO|KG|14.50||14.50
12178|Traseiro Novilho Vácuo|VAZIA ENTRECOT NOVILHO VACUO|KG|15.25||15.25
9591|Resto Desmanches Novilho Vácuo|BOCHECHAS NOVILHO VACUO|KG|10.50||10.50
9595|Resto Desmanches Novilho Vácuo|MOLEJAS NOVILHO VACUO|KG|12.50||12.50
9592|Resto Desmanches Novilho Vácuo|ABA DA FESSURA|KG|13.50|0.50|13.00
9491|Resto Desmanches Novilho Vácuo|FIGADO NOVILHO VACUO|KG|5.75|0.15|5.60
9529|Resto Desmanches Novilho Vácuo|OSSOS COZIDOS NOVILHO VACUO|KG|3.00||3.00
9594|Resto Desmanches Novilho Vácuo|LINGUA NOVILHO VACUO|KG|7.90||7.90
9590|Resto Desmanches Novilho Vácuo|MAGRO INDUSTRIAL NOVILHO VACUO|KG|9.00||9.00
9564|Resto Desmanches Novilho Vácuo|RAGUT/ESTOFADO AÑOJO VAC.+-3KG|KG|9.65||9.65
9493|Resto Desmanches Novilho Vácuo|RINS NOVILHO VACUO|KG|2.35||2.35
13732|Novilho Congelado|PATAS AÑOJO CAJA CONGELADO|KG|2.45||2.45
10147|Desmanche L.S. Carne Tenro Novilho|FIL.FINO 1ª AÑOJO EXTRATIERNO B4|KG|13.50|-0.25|13.75
6119|Carne Tenro Perú|CHULETA PAVO AJILLO EXTRAT.(G)|KG|6.25||6.25
6121|Carne Tenro Perú|FIL. PECH.PAVO ADOB.EXTRAT.(G)|KG|7.75||7.75
16141|Carne Tenro Perú|FILETES PECH. PAVO EXTRAT. (G)|KG|7.75||7.75
2419|Carne Tenro Perú|PECH. PAVO EXTRAT. VACIO (G)|KG|7.45||7.45
2153|Carne Tenro Perú|SOLOMILLO PAVO EXTRAT.(V) P6|KG|7.40||7.40
`;

const categoryImages = {
  porco: "https://images.unsplash.com/photo-1544025162-d76694265947?w=900&auto=format&fit=crop",
  porco_preto: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=900&auto=format&fit=crop",
  novilho: "https://images.unsplash.com/photo-1615937722923-67f6deaf2cc9?w=900&auto=format&fit=crop",
  aves: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=900&auto=format&fit=crop",
};

const cutImages = {
  carcaca: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Butcher%27s_Shop_%28Unsplash%29.jpg",
  entrecosto: "https://images.pexels.com/photos/7163989/pexels-photo-7163989.jpeg?auto=compress&cs=tinysrgb&w=900",
  entremeada: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=900&auto=format&fit=crop",
  perna: "https://images.pexels.com/photos/20579990/pexels-photo-20579990.jpeg?auto=compress&cs=tinysrgb&w=900",
  lombo: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=900&auto=format&fit=crop",
  secreto: "https://images.unsplash.com/photo-1544025162-d76694265947?w=900&auto=format&fit=crop",
  costeleta: "https://images.pexels.com/photos/7163989/pexels-photo-7163989.jpeg?auto=compress&cs=tinysrgb&w=900",
  magro: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=900&auto=format&fit=crop",
  miudezas: "https://cdn.pixabay.com/photo/2020/11/07/12/22/liver-5727413_1280.jpg",
  novilho: "https://images.unsplash.com/photo-1690983323314-b9603e8fbac8?w=900&auto=format&fit=crop",
  novilhoPremium: "https://images.pexels.com/photos/17481109/pexels-photo-17481109.jpeg?auto=compress&cs=tinysrgb&w=900",
  peru: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=900&auto=format&fit=crop",
  congelado: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=900&auto=format&fit=crop",
};

function slugify(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function titleCase(value) {
  return value
    .toLocaleLowerCase("pt-PT")
    .replace(/(^|[\s/().+-])([\p{L}])/gu, (match, prefix, letter) => `${prefix}${letter.toLocaleUpperCase("pt-PT")}`);
}

function cleanSpacing(value) {
  return value.replace(/\s+/g, " ").replace(/\s+([).])/g, "$1").trim();
}

function translateFamily(family) {
  return cleanSpacing(
    family
      .replace(/Carne Tenro/gi, "Carne Tenra")
      .replace(/Despiece L\.S\./gi, "Desmanche Livre Serviço")
      .replace(/Desmanche L\.S\./gi, "Desmanche Livre Serviço")
      .replace(/L\.S\./gi, "Livre Serviço")
      .replace(/Perú/gi, "Peru")
  );
}

function translateProductName(rawName) {
  const replacements = [
    [/\bJAMON\b/g, "PERNA"],
    [/\bCERDA\b/g, "PORCA"],
    [/\bADOBADO\b|\bADOB\./g, "MARINADO"],
    [/\bTIERNO\b/g, "TENRO"],
    [/\bEXTRATIERNO\b/g, "EXTRATENRO"],
    [/\bLOMO\b/g, "LOMBO"],
    [/\bPZA\b/g, "PEÇA"],
    [/\bVACIO\b|\bVAC\./g, "VÁCUO"],
    [/\bVACUO\b|\bVACOU\b/g, "VÁCUO"],
    [/\bROMERO\b/g, "ALECRIM"],
    [/\bCHULETERO\b/g, "VÃO"],
    [/\bCABEZA\b/g, "CABEÇA"],
    [/\bCACHACO\b/g, "CACHAÇO"],
    [/\bCOSTILLA\b/g, "COSTELA"],
    [/\bCERDO\b/g, "PORCO"],
    [/\bPANCETA\b/g, "ENTREMEADA"],
    [/\bCAJA\b/g, "CAIXA"],
    [/\bCONG\.\b|\bCONG\b/g, "CONGELADO"],
    [/\bRIÑONES\b/g, "RINS"],
    [/\bSANGRE\b/g, "SANGUE"],
    [/\bMANTECA EN RAMA\b/g, "BANHA EM RAMA"],
    [/\bAÑOJO\b|\bAÑ0JO\b/g, "NOVILHO"],
    [/\bDELANTERO\b/g, "DIANTEIRO"],
    [/\bTRASERO\b/g, "TRASEIRO"],
    [/\bFALDA\b/g, "ABA"],
    [/\bPECH\.?\b/g, "PEITO"],
    [/\bPAVO\b/g, "PERU"],
    [/\bSOLOMILLO\b/g, "LOMBINHO"],
    [/\bCHULETA\b/g, "COSTELETA"],
    [/\bFILETES\b/g, "FILETES"],
    [/\bFIL\./g, "FILETE"],
    [/\bESC\./g, "ESCALOPE"],
    [/\bAJILLO\b/g, "ALHO"],
    [/\bC\/PIEL\b/g, "COM PELE"],
    [/\bS\/PATA\b/g, "SEM PATA"],
    [/\bS\/PIC\./g, "SEM PICANHA"],
    [/\bMED\./g, "MÉDIA"],
    [/\bPA\b/g, "PÁ"],
    [/\bMAO\b/g, "MÃO"],
    [/\bCORTADA\b/g, "CORTADO"],
  ];

  let translated = rawName.toLocaleUpperCase("pt-PT");
  replacements.forEach(([pattern, replacement]) => {
    translated = translated.replace(pattern, replacement);
  });

  return titleCase(cleanSpacing(translated));
}

function categoryForFamily(family) {
  const normalized = family.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
  if (normalized.includes("PERU") || normalized.includes("PAVO")) return "aves";
  if (normalized.includes("NOVILHO") || normalized.includes("ANOJO")) return "novilho";
  if (normalized.includes("PORCO PRETO") || normalized.includes("IBERICO")) return "porco_preto";
  return "porco";
}

function mainCategoryFor(category) {
  if (category === "novilho") return "carne_novilho";
  if (category === "aves") return "aves";
  return "carne_porco";
}

function folderForProduct(family, category) {
  const text = family.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();

  if (category === "aves") return "Peru";
  if (category === "porco_preto" && text.includes("CONGELADO")) return "Porco Preto Congelado";
  if (category === "porco_preto" && text.includes("VACUO")) return "Porco Preto Vácuo";
  if (category === "porco_preto") return "Porco Preto Fresco";
  if (category === "novilho" && text.includes("CONGELADO")) return "Novilho Congelado";
  if (category === "novilho" && text.includes("VACUO")) return "Novilho Vácuo";
  if (category === "novilho" && text.includes("LIVRE SERVICO")) return "Novilho Livre Serviço";
  if (category === "novilho") return "Novilho Fresco";
  if (text.includes("CONGELADO")) return "Porco Congelado";
  if (text.includes("VACUO")) return "Porco Vácuo";
  if (text.includes("LIVRE SERVICO")) return "Porco Livre Serviço";
  if (text.includes("SUBPRODUTOS")) return "Subprodutos de Porco";
  return "Porco Fresco";
}

function imageForProduct(name, family, category) {
  const text = `${name} ${family}`.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();

  if (category === "aves") return cutImages.peru;
  if (text.includes("CARCACA") || text.includes("CANAL")) return cutImages.carcaca;
  if (text.includes("PERNA") || text.includes("PERNIL") || text.includes("PA ") || text.includes(" PA ") || text.includes("CHISPE") || text.includes("PATA") || text.includes("UNHA")) return cutImages.perna;
  if (text.includes("ENTRECOSTO") || text.includes("COSTELA") || text.includes("TIRA") || text.includes("RABO") || text.includes("OSSO")) return cutImages.entrecosto;
  if (text.includes("ENTREMEADA") || text.includes("BACON") || text.includes("PAPADA") || text.includes("TOUCINHO") || text.includes("BANHA")) return cutImages.entremeada;
  if (text.includes("LOMBO") || text.includes("LOMBINHO") || text.includes("FILETE") || text.includes("ESCALOPE") || text.includes("MEDALH")) return cutImages.lombo;
  if (text.includes("SECRETO") || text.includes("PRESA") || text.includes("ABANICO") || text.includes("PLUMA") || text.includes("LAGARTINHO")) return cutImages.secreto;
  if (text.includes("COSTELETA") || text.includes("CACHAÇO")) return cutImages.costeleta;
  if (text.includes("MAGRO") || text.includes("RECORTE") || text.includes("RAGUT") || text.includes("ESTOFADO")) return cutImages.magro;
  if (text.includes("FIGADO") || text.includes("RIM") || text.includes("RINS") || text.includes("LINGUA") || text.includes("CORAÇÃO") || text.includes("CORACAO") || text.includes("MIOLEIRA") || text.includes("MOLEJA") || text.includes("SANGUE") || text.includes("ESTOMAGO") || text.includes("FACEIRA") || text.includes("ORELHA")) return cutImages.miudezas;
  if (category === "novilho" && (text.includes("PICANHA") || text.includes("VAZIA") || text.includes("ALCATRA") || text.includes("ROSBIFE") || text.includes("ENTRECOT"))) return cutImages.novilhoPremium;
  if (category === "novilho") return cutImages.novilho;
  if (text.includes("CONGELADO")) return cutImages.congelado;

  return categoryImages[category];
}

export const catalogProducts = catalogRows
  .trim()
  .split("\n")
  .map((line) => {
    const [code, family, rawName, unit, price, diff, previousPrice] = line.split("|");
    const displayFamily = translateFamily(family);
    const displayName = translateProductName(rawName);
    const category = categoryForFamily(displayFamily);
    const mainCategory = mainCategoryFor(category);
    const folder = folderForProduct(displayFamily, category);
    const numericDiff = diff ? Number(diff) : 0;

    return {
      id: `${code}-${slugify(displayFamily)}-${slugify(displayName)}`,
      code,
      family: displayFamily,
      category,
      main_category: mainCategory,
      folder,
      name: displayName,
      unit: "KG",
      source_unit: unit,
      price_per_kg: Number(price),
      previous_price: previousPrice ? Number(previousPrice) : Number(price),
      price_diff: numericDiff,
      available: true,
      badge: numericDiff < 0 ? "Baixou" : numericDiff > 0 ? "Subiu" : "",
      description: `${displayFamily} · Cod. ${code}`,
      image_url: imageForProduct(displayName, displayFamily, category),
    };
  });

export const catalogFamilies = Array.from(new Set(catalogProducts.map((product) => product.family)));
