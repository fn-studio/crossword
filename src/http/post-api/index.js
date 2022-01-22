/* Forward requester to a new path
export async function handler (req: object) {
  return {
    statusCode: 302,
    headers: {
      'location': '/about',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    }
  }
}
*/

const data = require('@begin/data');
// TODO: maybe use this deno version when it's not broken
// https://github.com/beginner-corp/deno-begin-data

// Respond with successful resource creation
exports.handler = async () => {
  console.log('hi');
  // await data.set({ table: 'foo', key: 'foo', foo: true });
  await data.get({ table: 'data' });

  return {
    statusCode: 201,
    headers: {
      'content-type': 'application/json; charset=utf8',
      'cache-control':
        'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
    },
    body: JSON.stringify({ ok: true }),
  };
};

/* Deliver client-side JS
export async function handler (req: object) {
  return {
    headers: {
      'content-type': 'text/javascript; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: 'console.log("Hello world!")',
  }
}
*/
