import { Stack } from "@mui/material"
import FAQ from "../components/FAQ"
import { useEffect } from "react";

const Faq = () => {

  useEffect(() => {
    document.title = 'TBC | FAQ';
  }, []);

  return (
    <Stack
      direction="column"
      component="main"
      sx={[
        {
          justifyContent: 'center',
          height: 'calc((1 - var(--template-frame-height, 0)) * 100%)',
          marginTop: 'max(120px - var(--template-frame-height, 0px), 0px)',
          minHeight: '100%',
        },
        (theme) => ({
          '&::before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            zIndex: -1,
            inset: 0,
            backgroundImage:
              'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
            backgroundRepeat: 'no-repeat',
            ...theme.applyStyles('dark', {
              backgroundImage:
                'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(0, 0%, 0%))',
            }),
          },
        }),
      ]}
    >
      <FAQ />
    </Stack>
  )
}

export default Faq