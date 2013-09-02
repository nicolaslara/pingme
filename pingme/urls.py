from django.conf.urls.static import static
from django.conf.urls import patterns, url, include
from django.conf import settings

from django.contrib import admin

admin.autodiscover()

urlpatterns = patterns('',
   # (r'', include('pingme.apps.')),
   # (r'^admin/doc/', include('django.contrib.admindocs.urls')),
   # (r'^admin/', include(admin.site.urls)),
    (r'^$', 'pingme.apps.main.views.index'),
                       (r'^success/$', 'pingme.apps.main.views.success'),
)

if settings.DEBUG and settings.MEDIA_ROOT:
    urlpatterns += static(settings.MEDIA_URL,
        document_root=settings.MEDIA_ROOT)
