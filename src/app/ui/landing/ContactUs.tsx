import clsx from "clsx";
import { colors, layout } from "../utils/theme";
import Button from "../input/Button";

function ContactUs() {
  return (
    <div
      className={clsx(
        colors.background.main,
        layout.section.center,
        layout.padding
      )}
    >
      <div className='flex flex-col gap-8'>
        <div>
          <h2 className='mb-2 font-bold'>Email</h2>
          <input
            type='text'
            className={clsx(
              colors.background.main,
              colors.border.main,
              "p-2 rounded-xl"
            )}
          />
        </div>
        <div>
          <h2 className='mb-2 font-bold'>Message</h2>
          <input
            type='text'
            className={clsx(
              colors.background.main,
              colors.border.main,
              "p-2 rounded-xl"
            )}
          />
        </div>
        <Button label='Send' variant='secondary'></Button>
      </div>
    </div>
  );
}

export default ContactUs;
