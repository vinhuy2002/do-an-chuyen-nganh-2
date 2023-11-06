export const splitPayloadToken = async(token: any) => {
    const payload = await JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
    return payload;
}