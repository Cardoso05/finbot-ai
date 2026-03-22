import { RawTransaction } from "./index";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function parsePDF(file: Buffer): Promise<RawTransaction[]> {
  // PDF parsing requires pdf-parse or similar library
  // For now, throw a helpful error
  throw new Error(
    "Parsing de PDF requer a biblioteca pdf-parse. Instale com: npm install pdf-parse"
  );
}
