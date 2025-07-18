## Task 5: Monitoring & Maintenance

### Monitoring
- Health Check Endpoint: `/api/health`
- Add to UptimeRobot to ping every 5 mins
- Sentry SDK for error tracking: `@sentry/node`
- Use Vercel or Render built-in monitoring dashboards

### Maintenance Plan
- Schedule weekly/monthly updates for dependencies
- Enable automatic backups in MongoDB Atlas
- Create rollback documentation (revert deploy, Git commits)
- Monitor resource usage and log app crashes/errors