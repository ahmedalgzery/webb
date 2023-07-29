'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9c5938bc858ae8ae375dbc500aef19e5",
".git/config": "ce9ab101a1059da4a9d8bd52220afa86",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ae4417f94f71a7cd2e27b7af42719c71",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8abb39c7869dff8ae3b70d31b9766ce9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "880f0022a60951fa955d32878ac31a5d",
".git/logs/refs/heads/master": "880f0022a60951fa955d32878ac31a5d",
".git/logs/refs/remotes/origin/master": "4ad23072871d78bbd40f8c49ce3c7339",
".git/objects/03/7eeabd9bf9d1d1a4361cf248c5f9b2ef573510": "f8625dde4a5f53c040e298d8e16dc1eb",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/06/0d63ba5841e56577194364a2b84e459d72cf05": "d1e1394d6bc627904b948ad8c8886e98",
".git/objects/06/1df7620fd79c28a052230fed0dfde40f82c4f0": "19273cf9a830e277e02c838dd6383550",
".git/objects/0a/19f96a4f76ef9004cc7fbb38ac367344261768": "301d9c82f147c3c9609cb995301ab387",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/17/e13bb8bf62b8f6798d1e1be7a2fbd5c7f4a7db": "d6f2b0b7e5e3aa671918882477a410ee",
".git/objects/1b/2d8ea20c8ddb655f5c946d02dcfb093b5e0683": "72053650fb4bb2b292a48c9faa1b77a9",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/56867e70c434d8dff86a85ca09e6d942a38257": "27d844aa56b9fd88c276a37ccf62cee6",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/30/f7dcad928a98b51946c5e3dbf3cad415924a9c": "81fe7e1464b259f6a93b84bd9120fbdd",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/52783cf094b50e73db42eb73229b197d8b4df8": "6a45ae36a11e25001a5ac2dc01a63381",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/37/90707c8ecf2e20c1c48a42e9f3c9848f6f6aa1": "e4e2dc8044a1abb7fc30b7bd1d00b203",
".git/objects/3c/0e2a3ae40a85baf8b3dd8215b3a8b7363cc4dd": "3b1f40f97033bec5d871e63e7eb7a889",
".git/objects/3e/4b20f28ab2b24dc901a64634558469bd067d48": "eea97af6a31390a2887ac98f1f322b7d",
".git/objects/3e/53e20db0cc75d06c8e79e57fede0cd131d8911": "8abab3acb545a73e8521a27344c5d9db",
".git/objects/3e/9c8d74ce98ceda1a7fcacd12f1637486d28502": "948c5af5ad7ce91ff649ff6ca83774f0",
".git/objects/3e/ac245fee4d1adbe97ae3da9706d9547b97b307": "737570cbd4d22bd7fce326e4020344c3",
".git/objects/43/642556c1c8ee956460251bbe9155132d360af3": "8ce5a4eece60ab77279792e8c6cf9658",
".git/objects/4f/7c051208c331ae3d642005d5761a1b410e792a": "c736db34e87bf39d6f7c8d226bdb1988",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/57/cf193271219bb0377591bc1cb7c978a775204d": "7184f8ac49804c6b290b7bc1f3daf67f",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/67/9dd1a385ff596db3b9a7fd5d08949bcb3e0e93": "d9c670eaff18c724a22a89a5f7d093be",
".git/objects/68/0e0633ec0f8edccae9e55ebed941e03928a0e7": "1ee512d4d61aa1a9704d8e9fb771b088",
".git/objects/6c/380f467a1ca94b64d753c9fb660c969640e045": "2cebf43cc47176029fff47b5fd505e88",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/74/5ec8145a74f6b65f0cfb5f5de64cb932e20948": "7d9f1ac414a47e31adea594efca4d99d",
".git/objects/76/7a11ff35eb42d5e46bea0822aeb2484a7e97e1": "5cc2a45f90525933b7a4941e3870c22a",
".git/objects/79/2e9d9e94b24a7ba6c31231f70efd7d6fe5073a": "d6281d434467e807054e745e0da97b08",
".git/objects/79/8ac225a3bd8f5e31509680bbf0462c305fb0d9": "a8be2052934ae1d74d2d7d73599fa7b4",
".git/objects/83/053eaf075a06cf7fa068bc791b882a61586420": "e46c3233035bbb32bce7af8371091afa",
".git/objects/86/22d663ebeb1243d37cbc8134675d6c38a10683": "25b6697a11405747e04778873ce0a0a9",
".git/objects/86/bb971747f241c1ddcd4e1e99efb09988736db1": "173f1c85e49a6e92cf391fc25f68feba",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/2a212dce82d62f78dff1d118baeb3333664b3e": "d2bdf815267d77e21f8b8c9ac0c90df8",
".git/objects/8e/155896ea0401fcf1258c76579ff9414313ebe5": "d633b9530d776da19164eaf34cddbac7",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/93/95a556f92d5379a9128849032edd8c2e162916": "40a80628e3260a3c450ee5eae39e15ed",
".git/objects/9f/85b11acc37ae9c34cf203342f6842e9757c76b": "0afdb96a5b752da0e2c3d6ea8190cbfb",
".git/objects/a5/9fea01cdc97fdbdb17fcea1e3a7a4cb6361834": "fa7df70b791e266198606add46d90c7c",
".git/objects/a6/81e4772eb0438781c11c11ab05abc0655aeaf6": "3784d9e856b2a646f1b555ae4dd7970d",
".git/objects/a8/ce0210c7936304060b2b98416aec0a6d9acba6": "47e34f037514fab149f46561ddfd0185",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/af/3c8a2dc3716ff235e217e51bb99a81293b5139": "8c50d9730b0aa858aac7b11ce6f782c2",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/731af191f6a396936c23753aa8cab4a6412ff7": "806c5c49a9011f4428eaa262fdb3e509",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/5fe557010bfd2c878d3cec84f4b41ea6cd079d": "83e742763cee02c09516136ded682547",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/9d06f85adf4b0a82ea9e70f412181162468d59": "54bf3a2a0a18359c8b2fb5dd8acdb109",
".git/objects/ca/6e5d6e30addca5ca89041acc2f6565f45bba35": "6110f958ae0ec4c19fb1975b9b014829",
".git/objects/d0/c9d7d0d7e5abdb20a6a1200e13cc2b578e0f7b": "4f3976bfeaf34128bd9a972965fa7589",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/4b0fda5f40f9eda25fca9a3b9177b33c94157c": "b50ba85f5d786f24e116132323163dcf",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/8e267b6777b135041c0c78102a5303e54d31f1": "2488ec54bac4e188a1ea5f8390d858bd",
".git/objects/de/47e0ccb9e4f4080786b04b8cfc4a6ae40bfd4f": "fd4bd1e7716aeb27e94fdab3c057f09f",
".git/objects/de/71b4824eae94a861f595dc2b7518ad4cb5e618": "3d7e81c043030ae7c1d166d63df4d697",
".git/objects/e0/0511553fcd723123d5eb2cf821c399b53f076c": "e6083223335d848901362c9d3cad10ad",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/b282a02d67b2c77c5fedf3ce7c1462dcc84245": "adc3146e58bf058cd3da57d11240c6ff",
".git/objects/ec/1d554e7f3af5293e41a9c6ca5087013485764e": "a3722e14f1f3998e58d720e4d62174c9",
".git/objects/ec/b064c897d5a8fab5521737da045608cea91278": "ac6ed8a0ea1fd7301f5c37b41bb98876",
".git/objects/f1/c75040c61c3b566620506e1cbb999bcf1dc623": "f4a1cc63e97465264495df839d983431",
".git/objects/f2/d68271c58bf8f072a6e77f0ca80ecea101304f": "3faefe8e87d14e16f3c28b8f1f1c67b0",
".git/objects/f4/1dcd3d2cea88ee4c4832f943f427b11e5cbf82": "172e5e68f46d29986305fbf9e71b18f5",
".git/objects/f4/60dca21c5987aadf060980c4e896e6ccfadec7": "a7cd6c34615a7f8e50b946da7ac52948",
".git/objects/f7/d8b74ebc1ce5608a0d9657f7050d61b65a9409": "0f593a4b0ec2539b4dc7bc0f24e84aad",
".git/objects/f9/ae41737a1efb21e4ed58073d9e5ff78c06512c": "8e03ea4aaaf3b209698c4523aed499af",
".git/objects/fc/0f322e61617230621468a8090f25edb73110d5": "ecc6495fc2bada51dd28771bea5b58eb",
".git/objects/fc/8dc9c0d7dd5ff6f5f07dcac7c60a52d78bb1cc": "07d27e29dec267cc53d4d116b7571c13",
".git/objects/fd/86d4519560d8e0e1252c76e18f81f4e4c21a19": "d396f839563cd1bb025ab468178eac35",
".git/ORIG_HEAD": "ca748318b55826c80be4f69cc3833af7",
".git/refs/heads/master": "ca748318b55826c80be4f69cc3833af7",
".git/refs/remotes/origin/master": "ca748318b55826c80be4f69cc3833af7",
"assets/AssetManifest.bin": "fefb6c171ab669684851c0995759f400",
"assets/AssetManifest.json": "7db54e6e25845f54b745d13728512e1c",
"assets/assets/images/ad-logo.png": "fc16125c227f0779908456a2c365402c",
"assets/assets/images/ag-logo.png": "f1cb973410a0e8c9ca31719aa9f2ca90",
"assets/assets/images/agreement.png": "e2d1895bf8852e599f4db54a164c7fce",
"assets/assets/images/code.png": "8f8bc62ff11ed03937acca4ff906685b",
"assets/assets/images/df-logo.png": "782f6a4012282c657dd9dfb6759e7e7a",
"assets/assets/images/Easy-Solution-Logo-white.png": "4ba0da98ac33369ab341b0fcf0ef9431",
"assets/assets/images/excellence.png": "0d1afdd8b6381ad7823bc12ae6dc8127",
"assets/assets/images/finish.jpg": "29425e88daff3a6c03197ba4cac5cae0",
"assets/assets/images/idea.png": "0373bcc6b937af8ba2524f693ec4fda3",
"assets/assets/images/ifb-logo.png": "7f66ff2936dfae14a8db0c57b7ea4615",
"assets/assets/images/jg-logo.png": "6b31dd92898d8d445e4b5e6df4929974",
"assets/assets/images/logo.png": "aaab531b5831b9c78c47dd5d7060372b",
"assets/assets/images/pb-logo.png": "202ec71dd5229cc10a824177390fe256",
"assets/assets/images/relationship.png": "4e6581eab5f3accb59a50398fc403d1e",
"assets/assets/images/show-logo.png": "38f550d4eac28c98c29e0c1f3d187d87",
"assets/assets/images/stehlen-logo.png": "05a4ee12b9f6b4342d43adb53383f72d",
"assets/assets/images/u-turn.png": "c45a07015c886dd9fbb0b74093bbd5cb",
"assets/assets/images/vrinda-logo.png": "64b2d23c788f996a1b7f945f4cc7b356",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/NOTICES": "4bc449936889863c38dfabbed59f7f8b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8b84d61500eb71444eea5d5342404b00",
"/": "8b84d61500eb71444eea5d5342404b00",
"main.dart.js": "b6215ef086b6c6a80035ce499a696380",
"manifest.json": "33c3bf930a8e91aea0ea8a4cbb9b8b47",
"version.json": "7db3169dcd2563e54459c6cb82dd67ab"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
