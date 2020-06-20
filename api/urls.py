from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('api/user',views.UserViewSet)
router.register('api/forum',views.ForumViewSet)
router.register('api/regl',views.PostViewSet)

urlpatterns = router.urls
