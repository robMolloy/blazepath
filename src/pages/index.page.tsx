import { Typography } from "@/components";
import { adminCredentialsObj } from "@/config/firebase-adminsdk";

const Parent = () => {
  return (
    <main className={`min-h-screen`}>
      <Typography fullPage>
        <pre>{JSON.stringify(adminCredentialsObj, undefined, 2)}</pre>
      </Typography>
    </main>
  );
};

export default Parent;
