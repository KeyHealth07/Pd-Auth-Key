// src/app/api/create-key/route.ts
export async function POST(req: Request) {
  try {
    const { password } = await req.json();

    // Validate password again (optional, for extra safety)
    const rules = {
      capital: /[A-Z]/.test(password),
      length: password.length >= 7,
      alphanumeric:
        /^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]+$/.test(password) &&
        /[a-zA-Z]/.test(password) &&
        /[0-9]/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };

    const isValid = Object.values(rules).every(Boolean);

    if (!isValid) {
      return new Response(
        JSON.stringify({ error: "Password does not meet criteria" }),
        { status: 400 }
      );
    }

    // Simulate key creation (you can store in DB later)
    const key = Buffer.from(password).toString("base64"); // temporary key

    // Return success
    return new Response(JSON.stringify({ key }), { status: 200 });
  } catch (err) {
    console.error("Error in create-key API:", err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
