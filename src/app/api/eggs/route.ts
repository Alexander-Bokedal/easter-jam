import Egg from "@/app/lib/Models";
import connectMongoDB from "@/app/lib/MongodbConnection";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { selected, message, code, primaryColor, secondaryColor } =
      await request.json();
    await connectMongoDB();
    await Egg.create({ selected, message, code, primaryColor, secondaryColor });
    return NextResponse.json({ message: "Egg created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create egg" },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const Eggs = await Egg.find();
    return NextResponse.json({ Eggs });
  } catch (error) {
    console.error("Error retrieving Eggs", error);
    return NextResponse.json(
      { error: "Failed to retrieve Eggs" },
      { status: 500 },
    );
  }
}

// export async function DELETE(request: NextRequest) {
//   try {
//     const id = request.nextUrl.searchParams.get("id");
//     await connectMongoDB();
//     await Egg.findByIdAndDelete(id);
//     return NextResponse.json({ message: "Egg deleted" }, { status: 200 });
//   } catch (error) {
//     console.error("Error deleting egg:", error);
//     return NextResponse.json(
//       { error: "Failed to delete Egg" },
//       { status: 500 },
//     );
//   }
// }
