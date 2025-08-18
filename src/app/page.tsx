import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-4">
      hello world
      <div className="flex flex-col gap-4 p-4">
        <div>
          <Button variant={"elevated"}>i am a button</Button>
        </div>
        <div>
          <Input type="text" placeholder="I am in input" />
        </div>
        <div>
          <Progress value={50} />
        </div>
        <div>
          <Textarea name="" id="" value={"i am a textarea"} />
        </div>
        <div className="flex items-center gap-3">
          <Checkbox />
        </div>
      </div>
    </div>
  );
}
