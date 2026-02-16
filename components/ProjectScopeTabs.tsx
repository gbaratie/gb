import { Tabs, Tab, Box } from '@mui/material';

export type ProjectScope = 'pro' | 'side';

interface ProjectScopeTabsProps {
  value: ProjectScope;
  onChange: (scope: ProjectScope) => void;
}

export function ProjectScopeTabs({ value, onChange }: ProjectScopeTabsProps) {
  return (
    <Box sx={{ mb: 4 }}>
      <Tabs
        value={value}
        onChange={(_, v) => onChange(v as ProjectScope)}
        textColor="inherit"
        indicatorColor="primary"
        sx={{
          minHeight: 36,
          '& .MuiTab-root': {
            minHeight: 36,
            textTransform: 'none',
            fontWeight: 600,
            opacity: 0.7,
          },
          '& .Mui-selected': { opacity: 1 },
        }}
      >
        <Tab value="pro" label="Professionnels" />
        <Tab value="side" label="Side projects" />
      </Tabs>
    </Box>
  );
}
