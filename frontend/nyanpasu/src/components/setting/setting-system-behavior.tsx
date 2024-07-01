import { BaseCard } from "@nyanpasu/ui";
import Grid from "@mui/material/Unstable_Grid2";
import { PaperSwitchButton } from "./modules/system-proxy";
import { useTranslation } from "react-i18next";
import { useNyanpasu } from "@nyanpasu/interface";

export const SettingSystemBehavior = () => {
  const { t } = useTranslation();

  const { nyanpasuConfig, setNyanpasuConfig } = useNyanpasu();

  return (
    <BaseCard label="Initiating Behavior">
      <Grid container spacing={2}>
        <Grid xs={6}>
          <PaperSwitchButton
            label={t("Auto Launch")}
            checked={nyanpasuConfig?.enable_auto_launch || false}
            onClick={() =>
              setNyanpasuConfig({
                enable_auto_launch: !nyanpasuConfig?.enable_auto_launch,
              })
            }
          />
        </Grid>

        <Grid xs={6}>
          <PaperSwitchButton
            label={t("Silent Start")}
            checked={nyanpasuConfig?.enable_silent_start || false}
            onClick={() =>
              setNyanpasuConfig({
                enable_silent_start: !nyanpasuConfig?.enable_silent_start,
              })
            }
          />
        </Grid>
      </Grid>
    </BaseCard>
  );
};

export default SettingSystemBehavior;
