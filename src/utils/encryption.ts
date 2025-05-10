const SECRET = process.env.REACT_APP_SALT_FOR_ENCRYPTION || "default-secret-key";
const ivLength = 12;

function strToUint8(str: string): Uint8Array {
  return new TextEncoder().encode(str);
}

function uint8ToStr(uint8: Uint8Array): string {
  return new TextDecoder().decode(uint8);
}

async function getKey(): Promise<CryptoKey> {
  console.log("Subtle:", crypto?.subtle);
  try {
    const key = await crypto.subtle.importKey(
      "raw",
      strToUint8(SECRET),
      { name: "AES-GCM" },
      false,
      ["encrypt", "decrypt"],
    );
    return key;
  } catch (error) {
    console.error("Failed to import key:", error);
    throw error; // rethrow so you can see stack trace
  }
}

export async function encryptData(text: string): Promise<string> {
  const key = await getKey();
  const iv = crypto.getRandomValues(new Uint8Array(ivLength));
  const encoded = strToUint8(text);

  const encrypted = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, encoded);

  // Combine IV and encrypted data
  const combined = new Uint8Array(iv.length + encrypted.byteLength);
  combined.set(iv);
  combined.set(new Uint8Array(encrypted), iv.length);

  return btoa(String.fromCharCode(...Array.from(combined)));
}

export async function decryptData(encryptedText: string): Promise<string> {
  const combined = Uint8Array.from(atob(encryptedText), (c) => c.charCodeAt(0));
  const iv = combined.slice(0, ivLength);
  const data = combined.slice(ivLength);

  const key = await getKey();
  const decrypted = await crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, data);

  return uint8ToStr(new Uint8Array(decrypted));
}
