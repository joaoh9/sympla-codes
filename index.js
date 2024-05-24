require('dotenv').config();

async function run() {
  const codes = ['code1', 'code2'];

  const necesarryCookies = [
    '__cf_bm',
    '_cfuvid',
    '_spbidw',
    '_symplaSession-prod',
    '7fed3930292e33b22d5fc979f2886268',
    'cf_clearance',
    'cf_clearance',
    'eb37858f6fff7d7e08cd0f8ff82b704d',
    'intercom-device-id-j3shov1b',
    'intercom-session-j3shov1b',
    'session_id',
    'sympla_tck',
    'sympla',
    'tck_id',
  ];

  console.log('necessary cookies: ', necesarryCookies.join(', '));

  const cookie = process.env.COOKIE;
  const eventId = process.env.EVENT_ID;
  const discount = process.env.DISCOUNT;

  console.log('O Script está configurado pra criar cupons de desconto aplicáveis para todos os tipos de ingressos disponíveis. A variável de ambiente DISCOUNT define a porcentagem de desconto que esse cupom vai ter')

  try {
    for (const code of codes) {
      const res = await fetch('https://organizador.sympla.com.br/event/ajaxAddDiscount', {
        headers: {
          'accept-language': 'pt;q=0.8',
          accept: '*/*',
          'cache-control': 'no-cache',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          cookie: cookie,
          origin: 'https://organizador.sympla.com.br',
          pragma: 'no-cache',
          priority: 'u=1, i',
          referer: `https://organizador.sympla.com.br/ingressos-promocoes?id=${eventId}`,
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-ch-ua': '"Brave";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
          'sec-gpc': '1',
          'x-request-id': 'afecf656-f25f-42a2-bc03-1f6bcae86f0a',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
          'x-request-id': '4b515ee6-b93a-4e0b-a953-959441ab5e34',
          'x-requested-with': 'XMLHttpRequest',
        },
        referrer: `https://organizador.sympla.com.br/ingressos-promocoes?id=${eventId}`,
        referrerPolicy: 'strict-origin-when-cross-origin',
        body: `type=AVG&availability=NOLIMIT&disId=&txtDiscountCode=${code}&txtDiscountAvg=${discount}&txtDiscountValue=0.00&txtDiscountQty=&applyTo=*&ticketTypes=ALL&used=&id=${eventId}`,
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
      });
      console.log(await res.json());
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  } catch (err) {
    console.log('🚀 ~ run ~ err:', err);
  }
}

run();
